import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { getAllClientEmpoyess } from "@/redux/slices/employees/EmployeeService";
import { Select, Typography } from "antd";
import { ValidationErrors } from "../CreateOrder";
const { Text } = Typography;

interface ExistingPatientFormProps {
  onPatientSelect?: (patientData: any) => void;
  consultType?: string;
  selectedPatient?: any;
  validationErrors: ValidationErrors;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
}

const ExistingPatient: React.FC<ExistingPatientFormProps> = ({
  onPatientSelect,
  selectedPatient,
  validationErrors,
  setValidationErrors,
}) => {
  const dispatch = useDispatch() as any;
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState<any>([]);
  const { linkableId } = useClientLinkableId();

  const handlePatientSelect = (_: any, option: any) => {
    if (onPatientSelect) {
      onPatientSelect(option?.originalItem);
    }
    if(validationErrors?.user?.id && option?.originalItem){
      setValidationErrors((prev) => ({
        ...prev,
        user: undefined
      }));
    }
  };

  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        if (linkableId) {
          const filters = {
            searchText: "",
            page: 1,
            count: 1000000,
            department: "",
            clientId: linkableId,
          };
          const response = (await dispatch(
            getAllClientEmpoyess(filters)
          )) as any;
          if (response?.payload?.data) {
            setPatients(response.payload?.data);
          }
        }
      } catch (error) {
        console.error("Error fetching patients:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPatients();
  }, [dispatch, linkableId]);

  return (
    <div>
      <label htmlFor="employee-select" className="form-label">
        Select Existing Employee
      </label>
      <Select
        status={
          typeof validationErrors?.user === "object" &&
          validationErrors?.user?.id
            ? "error"
            : ""
        }
        id="employee-select"
        placeholder="Search and select a Employee"
        showSearch
        size="large"
        value={selectedPatient?.id || undefined}
        loading={loading}
        options={patients?.associatedUsers?.map?.((patient: any) => ({
          label: `${patient?.first_name || ""} ${patient?.last_name || ""}`,
          value: patient?.id,
          originalItem: patient,
        }))}
        onChange={handlePatientSelect}
        filterOption={(input, option: any) =>
          (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
        }
        optionRender={(option: any) => (
          <div className="flex items-center gap-2">
            <img
              src={
                option?.originalItem?.user?.image ||
                "https://placehold.co/40x40"
              }
              alt={`${option?.originalItem?.user?.first_name || ""} ${
                option?.originalItem?.user?.last_name || ""
              }`}
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <div>
              <div>{option?.label}</div>
              <div className="text-xs text-gray-500">
                {option?.originalItem?.user?.email || ""}
              </div>
            </div>
          </div>
        )}
        className="w-full"
      />
      {typeof validationErrors?.user === "object" &&
          validationErrors?.user?.id && (
        <Text strong className="block mb-2 !text-red-500">
          please select a user
        </Text>
      )}
    </div>
  );
};

export default ExistingPatient;
