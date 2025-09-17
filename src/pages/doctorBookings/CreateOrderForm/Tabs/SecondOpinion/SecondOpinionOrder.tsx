import { updateNestedField } from "@/lib/common";
import { getDoctorFiltersAPI } from "@/redux/slices/doctor/doctorService";
import { getAllRaphaDoctorsAPI } from "@/redux/slices/doctorUsers/doctorUsersService";
import { Switch, Select, Card, Typography, Collapse, Space, Spin } from "antd";
import React, { memo, useEffect, useRef, useState } from "react";
import { SearchOutlined, TeamOutlined } from "@ant-design/icons";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { FormData, ValidationErrors } from "../../CreateOrder";
import { getAllVendorsRestAPI } from "@/redux/slices/vendor/vendorService";
import SecondOpinionReports from "../../components/SecondOpinionReports";
import { TbListDetails } from "react-icons/tb";

const { Text } = Typography;

const specializationList = [
  {
    id: 102,
    name: "Cardiology",
  },
  {
    id: 115,
    name: "Oncology",
  },
  {
    id: 103,
    name: "Orthopedics",
  },
  {
    id: 105,
    name: "Neurology",
  },
  {
    id: 104,
    name: "Gastroenterology",
  },
  {
    id: 88,
    name: "General Surgery",
  },
];

const specializationIds = specializationList?.map((s: any) => s?.id);

interface ConsultationOrderProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  validationErrors: ValidationErrors;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
}

const SecondOpinionOrder = ({
  formData,
  setFormData,
  validationErrors,
  setValidationErrors
}: ConsultationOrderProps) => {
  const timeoutRef = useRef<{
    doctors: any;
  }>({
    doctors: undefined,
  });
  const secondOpinionFormData = formData.secondOpinion;
  const dispatch = useDispatch() as any;
  const [doctorsType, setDoctorsType] = useState<"doctors" | "vendors">(
    "doctors"
  );

  const [doctorsList, setDoctorsList] = useState([]);
  const [doctorSpecilizations, setDoctorSpecilizations] = useState<any[]>([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState<any>([]);

  const [loading, setLoading] = useState({
    doctors: false,
    categories: false,
  });

  const resetFormData = () => {
    setFormData((pre) => ({
      ...pre,
      secondOpinion: {
        selectedDoctor: null,
        selectedVendor: null,
        selectedCategory: null,
        urls: null,
        phone: null,
        comments: null,
        alternate_phone: null,
      },
    }));
  };

  useEffect(() => {
    getSecoundOpinionDoctorsOrVendors("", selectedSpecialization, doctorsType);
  }, [dispatch, doctorsType, selectedSpecialization]);

  useEffect(() => {
    getAllDoctorsCategory();
    resetFormData();
  }, []);

  const getSecoundOpinionDoctorsOrVendors = async (
    searchText = "",
    specializations: any[],
    type: string = "doctors"
  ) => {
    if (type === "doctors") {
      try {
        setLoading((pre: any) => ({ ...pre, doctors: true }));
        const result = (await dispatch(
          getAllRaphaDoctorsAPI({
            filters: {
              count: 10,
              searchText,
              is_doctor_second_opinion: true,
              status: ["approved"],
              category_ids: Array.isArray(specializations)
                ? specializations
                : [],
              client_id: null,
            },
          })
        )) as any;

        if (result?.error) {
          toast.error(result?.error?.message || "Unknown Error Occured");
          setDoctorsList([]);
        } else {
          setDoctorsList(result?.payload?.data?.doctors);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch team members.");
        setDoctorsList([]);
      } finally {
        setLoading((pre: any) => ({ ...pre, doctors: false }));
      }
    } else if (type === "vendors") {
      try {
        setLoading((pre: any) => ({ ...pre, doctors: true }));
        const result = (await dispatch(
          getAllVendorsRestAPI({
            filters: {
              page: 1,
              count: 10,
              is_international: true,
              search_text: searchText,
            },
          })
        )) as any;

        if (result?.error) {
          toast.error(result?.error?.message || "Unknown Error Occured");
          setDoctorsList([]);
        } else {
          setDoctorsList(result?.payload?.vendors);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch team members.");
        setDoctorsList([]);
      } finally {
        setLoading((pre: any) => ({ ...pre, doctors: false }));
      }
    }
  };

  const getAllDoctorsCategory = async () => {
    try {
      setLoading((pre: any) => ({ ...pre, categories: true }));
      const result = (await dispatch(
        getDoctorFiltersAPI({
          filtersNeeded: ["category_ids"],
        })
      )) as any;
      if (result?.error) {
        toast.error(result?.error?.message || "Unknown Error Occured");
        return;
      }
      setDoctorSpecilizations(result.payload?.data?.category_ids || []);
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setLoading((pre: any) => ({ ...pre, categories: false }));
    }
  };

  const updateSecondOpinionFormData = (key: string, value: any) => {
    setFormData((pre: any) => ({
      ...pre,
      secondOpinion: updateNestedField(key, value, pre.secondOpinion),
    }));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-2 mt-3">
      <Space direction="vertical" size="large" className="w-full">
        {/* Consultation Type Selection */}

        {/* Doctor Selection Toggle */}
        <Card
          title={
            <Space>
              <TeamOutlined className="text-green-500" />
              <span>Doctor Selection Preference</span>
            </Space>
          }
          className={`shadow-md ${
            validationErrors.doctor ? "!border-red-500" : ""
          }`}
        >
          <>
            <Text type="secondary" className="block mb-4">
              Choose between International Doctors and Hospitals
            </Text>

            <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
              <Space size="large">
                <>
                  <Text
                    strong
                    className={
                      doctorsType !== "doctors"
                        ? "!text-gray-600"
                        : "!text-blue-500"
                    }
                  >
                    Indian Second Opinion(Doctors)
                  </Text>
                  <Switch
                    checked={doctorsType === "doctors" ? false : true}
                    onChange={(checked) => {
                      resetFormData();
                      setDoctorsType(!checked ? "doctors" : "vendors");
                    }}
                    size="default"
                  />
                  <Text
                    strong
                    className={
                      doctorsType !== "doctors"
                        ? "!text-blue-500"
                        : "!text-gray-600"
                    }
                  >
                    International Secound Opinion(Hospitals)
                  </Text>
                </>
              </Space>
            </div>
          </>

          <>
            <Text strong className="block mb-2">
              Specializations
            </Text>
            <Select
              status={
                validationErrors?.secondOpinion?.category ? "error" : undefined
              }
              className="w-full mb-2"
              id="secoundOpinionSpec"
              placeholder="Select specializations"
              loading={loading.categories}
              value={
                doctorsType === "doctors"
                  ? selectedSpecialization
                  : secondOpinionFormData.selectedCategory
              }
              size="large"
              suffixIcon={
                loading.doctors ? (
                  <Spin size="small" />
                ) : (
                  <SearchOutlined style={{ color: "#1677ff" }} />
                )
              }
              mode={doctorsType === "doctors" ? "multiple" : undefined}
              showSearch
              options={
                doctorsType === "vendors"
                  ? doctorSpecilizations
                      ?.filter((item: any) =>
                        specializationIds?.includes(item?.id)
                      )
                      ?.map((spec: any) => ({
                        label: `${spec?.name}`,
                        value: spec.id,
                      }))
                  : doctorSpecilizations?.map((spec: any) => ({
                      label: `${spec?.name}`,
                      value: spec.id,
                    }))
              }
              filterOption={(input, option: any) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              onChange={(values) => {
                if (doctorsType === "vendors") {
                  updateSecondOpinionFormData("selectedCategory", values);
                  if(validationErrors?.secondOpinion?.category && values){
                    setValidationErrors((pre: ValidationErrors) => ({
                      ...pre,
                      secondOpinion: {
                        ...pre.secondOpinion,
                        category: undefined,
                      },
                    }))
                  }
                } else if (doctorsType === "doctors") {
                  setSelectedSpecialization(values);
                }
              }}
            />
            {validationErrors.secondOpinion?.category && (
              <Text strong className="block mb-2 !text-red-500">
                {validationErrors.secondOpinion?.category}
              </Text>
            )}

            <Text strong className="block mb-2">
              {`Select ${
                doctorsType === "vendors"
                  ? "International Hospitals"
                  : "Doctors"
              } from Rapha Platform`}
            </Text>
            <Select
              className="w-full"
              id="secoundOpinionDoctor"
              placeholder="Search and select a secound opinion doctor"
              showSearch
              status={
                doctorsType === "doctors" 
                  ? (validationErrors?.secondOpinion?.doctor ? "error" : undefined)
                  : (validationErrors?.secondOpinion?.vendor ? "error" : undefined)
              }
              size="large"
              suffixIcon={
                loading.doctors ? (
                  <Spin size="small" />
                ) : (
                  <SearchOutlined style={{ color: "#1677ff" }} />
                )
              }
              loading={loading.doctors}
              value={
                doctorsType === "doctors"
                  ? secondOpinionFormData.selectedDoctor?.id
                  : doctorsType === "vendors"
                  ? secondOpinionFormData?.selectedVendor?.id
                  : null
              }
              onSearch={(value) =>
                getSecoundOpinionDoctorsOrVendors(
                  value,
                  selectedSpecialization,
                  doctorsType
                )
              }
              options={
                doctorsType === "doctors"
                  ? doctorsList?.map((doctor: any) => ({
                      label: `${doctor?.name || ""} - ${
                        doctor?.specialization || ""
                      }`,
                      value: doctor.id,
                      originalItem: doctor,
                    }))
                  : doctorsList?.map((vendor: any) => ({
                      label: `${vendor?.name || ""} - ${
                        vendor?.specialization || ""
                      }`,
                      value: vendor.id,
                      originalItem: vendor,
                    }))
              }
              filterOption={false}
              onChange={(value, option: any) => {
                if (doctorsType === "doctors") {
                  const doctorObj = option?.originalItem || null;
                  setFormData((pre: FormData) => ({
                    ...pre,
                    secondOpinion: {
                      ...pre.secondOpinion,
                      selectedDoctor: doctorObj,
                      selectedVendor: null,
                    },
                  }));
                  if(validationErrors?.secondOpinion?.doctor && value){
                    setValidationErrors((pre: ValidationErrors) => ({
                     ...pre,
                      secondOpinion: {
                       ...pre.secondOpinion,
                        doctor: undefined,
                      },
                    }))
                  }
                } else if (doctorsType === "vendors") {
                  const doctorObj = option?.originalItem || null;
                  setFormData((pre: FormData) => ({
                    ...pre,
                    secondOpinion: {
                      ...pre.secondOpinion,
                      selectedDoctor: null,
                      selectedVendor: doctorObj,
                    },
                  }));
                  if(validationErrors?.secondOpinion?.vendor && value){
                    setValidationErrors((pre: ValidationErrors) => ({
                     ...pre,
                      secondOpinion: {
                      ...pre.secondOpinion,
                        vendor: undefined,
                      },
                    }))
                  }
                }
              }}
              optionRender={(option: any) => (
                <div className="flex items-center gap-2">
                  <img
                    src={
                      option?.originalItem?.image ||
                      option?.originalItem?.roleDoctor?.user?.image ||
                      "https://placehold.co/40x40"
                    }
                    alt={option?.originalItem?.name}
                    className="w-8 h-8 rounded-full mr-2 object-cover"
                  />
                  <span>{option?.label}</span>
                </div>
              )}
            />
          {doctorsType === "doctors" ? (
            validationErrors.secondOpinion?.doctor && (
              <Text strong className="block mb-2 !text-red-500">
                {validationErrors.secondOpinion?.doctor}
              </Text>
            )
          ) : (
            validationErrors.secondOpinion?.vendor && (
              <Text strong className="block mb-2 !text-red-500">
                {validationErrors.secondOpinion?.vendor}
              </Text>
            )
          )}
          </>
        </Card>

        <Card
          title={
            <Space>
              <TbListDetails />
              <span>Second Opinion Details</span>
            </Space>
          }
          className={`shadow-md ${
            validationErrors.secondOpinion ? "!border-red-500" : ""
          }`}
        >
          <SecondOpinionReports
            validationErrors={validationErrors}
            reports={secondOpinionFormData}
            setReports={(key: string, value: any) => {
              updateSecondOpinionFormData(key, value);
            }}
            setValidationErrors={setValidationErrors}
          />
        </Card>
      </Space>
    </div>
  );
};

export default memo(SecondOpinionOrder);
