import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { getAllClientEmpoyess } from "@/redux/slices/employees/EmployeeService";
import { Select, Typography } from "antd";
import { UserDetails, ValidationErrors } from "../types";
const { Text } = Typography;

interface ExistingPatientFormProps {
  setFormData?: React.Dispatch<React.SetStateAction<UserDetails>>;
  consultType?: string;
  selectedPatient?: any;
  validationErrors: ValidationErrors;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
}

const ExistingPatient: React.FC<ExistingPatientFormProps> = ({
  setFormData,
  selectedPatient,
  validationErrors,
  setValidationErrors,
}) => {
  const dispatch = useDispatch() as any;
  const [loading, setLoading] = useState(false);
  const [patients, setPatients] = useState<any>([]);
  const { linkableId } = useClientLinkableId();

  const handlePatientSelect = (_: any, option: any) => {
    try {
      if (setFormData) {
        setFormData((prevFormData) => {
          const prevData = prevFormData?.users?.[0] ?? {
            user: {},
            address: {},
          };
          return {
            ...prevFormData,
            users: [
              {
                ...prevData,
                user: option?.originalItem,
              },
            ],
          };
        });
      }

      // Only clear validation errors if they exist and option has originalItem
      if (validationErrors?.user?.id && option?.originalItem) {
        setValidationErrors((prev) => ({
          ...prev,
          user: undefined,
        }));
      }
    } catch (error) {
      console.error("Error in handlePatientSelect:", error);
      // You might want to add error handling logic here
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
          label: `${patient?.first_name || ""} ${patient?.last_name || ""}${
            !patient?.first_name && !patient?.last_name
              ? "N/A(name not available)"
              : ""
          }`,
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
                `data:image/svg+xml,${encodeURIComponent(`
  <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" fill="${"#FF5733"}"/>
    <text 
      x="50%" 
      y="50%" 
      dy=".1em"
      fill="white"
      font-family="Arial"
      font-size="16"
      text-anchor="middle"
      dominant-baseline="middle"
    >
      ${
        option?.originalItem?.first_name && option?.originalItem?.last_name
          ? `${option?.originalItem?.first_name?.[0]}${option?.originalItem?.last_name?.[0]}`
          : "NA"
      }
    </text>
  </svg>
`)}`
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
