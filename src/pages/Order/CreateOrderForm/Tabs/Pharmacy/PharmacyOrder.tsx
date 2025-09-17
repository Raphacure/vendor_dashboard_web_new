import { Select, Spin, Card, Typography, Collapse, Space } from "antd";
import { memo, useEffect, useRef, useState } from "react";
import { SearchOutlined} from "@ant-design/icons";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getAllMedicinesNewAPI } from "@/redux/slices/prescription/prescriptionService";
import { Pill, PillIcon } from "lucide-react";
import { FormData, ValidationErrors } from "../../types";
import MedicineCardModule from "@/components/MedicineCard/MedicineCardModule";

const { Text } = Typography;

interface PharmacyOrderProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  validationErrors: ValidationErrors;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
}

const PharmacyOrder = ({
  validationErrors,
  formData,
  setFormData,
  setValidationErrors
}: PharmacyOrderProps) => {
  const pharmacyFormData = formData.pharmacy;
  const dispatch = useDispatch() as any;

  const timerRef = useRef<{
    medicineTimer: ReturnType<typeof setTimeout> | undefined;
  }>({
    medicineTimer: undefined,
  });

  const [loading, setLoading] = useState({
    pharmacy: false,
  });
  const [medicineList, setMedicineList] = useState([]);

  useEffect(() => {
    getAllMedicineList();
  }, [dispatch]);

  const getAllMedicineList = async (search: string = "") => {
    clearTimeout(timerRef.current.medicineTimer);
    timerRef.current.medicineTimer = setTimeout(async () => {
      try {
        setLoading((prev) => ({ ...prev, pharmacy: true }));
        const res = await dispatch(
          getAllMedicinesNewAPI({
            count: 10,
            page: 1,
            searchText: search,
          })
        );
        if (res.error) {
          toast.error(res.payload.message || "Something went wrong");
        } else {
          setMedicineList(res.payload.data);
        }
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setLoading((prev) => ({ ...prev, pharmacy: false }));
      }
    }, 250);
  };

const handleUpdateMedicineQuantity = (
  serviceCode: string,
  quantity: number
) => {
  setFormData((prev) => {
    // Get existing medicines to check for the one being updated
    const existingMedicines = prev.pharmacy.selectedMedicines || [];

    // Find the medicine being updated
    const medicineToUpdate = existingMedicines.find(
      (med: any) => med.item.service_code === serviceCode
    );

    if (medicineToUpdate) {
      // If quantity is 0, remove the medicine from the list
      if (quantity === 0) {
        const updatedMedicines = existingMedicines.filter(
          (medicine: any) => medicine.item.service_code !== serviceCode
        );
        return {
          ...prev,
          pharmacy: {
            ...prev.pharmacy,
            selectedMedicines: updatedMedicines,
          },
        };
      }

      // Update existing medicine quantity
      const updatedMedicines = existingMedicines.map((medicine: any) =>
        medicine.item.service_code === serviceCode
          ? { ...medicine, quantity: quantity }
          : medicine
      );

      return {
        ...prev,
        pharmacy: {
          ...prev.pharmacy,
          selectedMedicines: updatedMedicines,
        },
      };
    }

    return prev;
  });
};

const handleMedicinesChange = (value: any, options: any) => {
  // Get all selected medicines with their details
  const selectedMedicines = options
    .filter((item: any) => item?.originalItem && value.includes(item.value))
    .map((item: any) => ({
      item: item.originalItem,
      quantity: 1, // Initialize quantity for each medicine
    }));

  setFormData((prev) => {
    // Get existing medicines
    const existingMedicines = prev.pharmacy.selectedMedicines || [];

    // Remove medicines that are no longer selected
    const remainingMedicines = existingMedicines.filter((med: any) =>
      value.includes(med.item.service_code)
    );

    // Add new medicines without modifying existing quantities
    const newMedicines = selectedMedicines.filter(
      (newMed: any) =>
        !remainingMedicines.some(
          (med: any) => med.item.service_code === newMed.item.service_code
        )
    );

    return {
      ...prev,
      pharmacy: {
        ...prev.pharmacy,
        selectedMedicines: [...remainingMedicines, ...newMedicines],
      },
    };
  });
  if(value && validationErrors.pharmacy){
    setValidationErrors((prev) => ({
      ...prev,
      pharmacy: undefined
    }))
  }
};

  return (
    <div className="max-w-screen-xl mx-auto px-2 mt-3">
      <Space direction="vertical" size="large" className="w-full">
        <Card
          title={
            <Space>
              <Pill className="text-green-500" />
              <span>Medicine Selection</span>
            </Space>
          }
          className={`shadow-md ${
            validationErrors.pharmacy ? "!border-red-500" : ""
          }`}
        >
          <>
            <Text type="secondary" className="block mb-4">
              Select from Medicines from the list
            </Text>

            <div>
              <Text strong className="block mb-2">
                Search Your Medicines
              </Text>
              <Select
                status={validationErrors.pharmacy ? "error" : ""}
                placeholder="Type to search and select a medicines from the list"
                showSearch
                suffixIcon={
                  loading.pharmacy ? (
                    <Spin size="small" />
                  ) : (
                    <SearchOutlined style={{ color: "#1677ff" }} />
                  )
                }
                mode="multiple"
                size="large"
                className="w-full"
                value={pharmacyFormData.selectedMedicines?.map(
                  (item: any) => item?.item?.service_code
                )}
                loading={loading.pharmacy}
                onSearch={(value) => getAllMedicineList(value)}
                options={medicineList.map((medicine: any) => ({
                  label: `${medicine?.service_name ?? medicine?.service_code}`,
                  value: medicine?.service_code,
                  originalItem: medicine,
                }))}
                filterOption={false}
                onChange={handleMedicinesChange}
                optionRender={(option: any) => {
                  return (
                    <div className="flex items-center py-2">
                      <img
                        src={
                          option?.data?.originalItem?.image?.[0] ?? <PillIcon />
                        }
                        alt={`${option?.label}`}
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 mr-3"
                      />
                      <div>
                        <div className="font-medium">{option?.label}</div>
                        <div className="text-xs text-gray-600">
                          {option?.data?.originalItem?.company ??
                            "company not available"}
                        </div>
                      </div>
                    </div>
                  );
                }}
              />
              {validationErrors.pharmacy && (
                <Text strong className="block mb-2 !text-red-500">
                  {validationErrors.pharmacy}
                </Text>
              )}
            </div>
          </>

          <>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {pharmacyFormData.selectedMedicines?.map(
                (item: any, index: number) => {
                  return (
                    <MedicineCardModule
                      key={index}
                      medicineDetail={item.item}
                      sectionName={item?.item?.category_key}
                      onCountChange={handleUpdateMedicineQuantity}
                    />
                  );
                }
              )}
            </div>
          </>
        </Card>
      </Space>
    </div>
  );
};

export default memo(PharmacyOrder);
