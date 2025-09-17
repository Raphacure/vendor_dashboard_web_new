import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getAllFilteredPackages,
  getAllFilteredTests,
} from "@/redux/slices/doctor/doctorService";
import toast from "react-hot-toast";
import { Select, Form, Card, Typography, Space, Spin, DatePicker } from "antd";
import {
  SearchOutlined,
  MedicineBoxOutlined,
  ExperimentOutlined,
  RadarChartOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { updateNestedField } from "@/lib/common";
import { getVendorTimeSlots } from "@/redux/slices/vendor/vendorService";
import dayjs from "dayjs";
import { OrderClients } from "@/redux/slices/Clients/clients.types";
import { ConsultType, FormData, ValidationErrors } from "../../types";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import moment from "moment";
const { Title, Text } = Typography;

const defaultVendor = {
  id: 1,
  name: "Raphacure Preferred Vendor",
  phone: "95551 66000",
  address: "We will select the nearest vendor for you!",
  city: "Nearby",
  zip: 560102,
  slot_start_time: "07:00:00",
  slot_end_time: "19:00:00",
  week_off_days: "0",
  type: "pathology_lab",
  parent_id: null,
  mapped_pin_codes: "500075,500034,",
  image:
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/wa-default.png",
  rating: null,
  status: "requested",
  old_users_data: null,
  created_at: null,
  updated_at: "2025-04-25T05:18:27.456Z",
  state: "karnataka",
  search_keys: "Raphacure Preferred Vendor",
  instant_pin_codes: null,
  facilities: [],
  services: [],
  default_consultation_cost: 0,
  available_in_90: false,
  collection_type: "center",
  address1: null,
  address2: null,
  latitude: null,
  longitude: null,
  primary_email: "wellness@raphacure.com",
  secondary_email: null,
  created_by: null,
  spoc_contact_first_name: null,
  spoc_contact_last_name: null,
  spoc_contact_phone_no: null,
  spoc_contact_email: null,
  spoc_contact_office_no: null,
  spoc_contact_designation: null,
  marketplace_name: "raphacure",
  gst_number: null,
  secondary_phone: null,
  registration_details: null,
  vendor_client_id: null,
  is_premium: false,
  country_code: null,
  price: {
    actual_cost: 1200,
    discount_percentage: 0,
    service_charges: 0,
    discounted_price: 1200,
  },
};

interface OtherTestsProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  validationErrors: ValidationErrors;
  consultType: ConsultType;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
  selectedClient: OrderClients["data"]["clients"][number];
}

const OtherTests = ({
  setFormData,
  formData,
  consultType,
  validationErrors,
  setValidationErrors,
  selectedClient,
}: OtherTestsProps) => {
  const testData = formData?.tests;
  const [vendors, setVendors] = useState<any[]>([]);
  const {linkableId} = useClientLinkableId()
  const dispatch = useDispatch() as any;

  const [testsList, setTestsList] = React.useState<any>([]);
  const [timeSlots, setTimeSlots] = useState<any[]>([]);

  const [isLoading, setIsLoading] = React.useState<{
    testsList: boolean;
    vendorsList: boolean;
    timeSLots: boolean;
  }>({
    testsList: false,
    vendorsList: false,
    timeSLots: false,
  });

  useEffect(() => {
    setTestsList([]);
    setTimeSlots([]);
  }, [consultType]);

  useEffect(() => {
    if (linkableId === "58ac0845-98d5-411e-aa3e-9490d7fcde1f") {
      setVendors([defaultVendor]);
      updateTestsFormData("selectedVendor", null);
    } else {
      if (testData.selectedTest?.length > 0) {
        const selectedPackage = selectedClient.packages.find((item) => {
          return item.service_code === testData.selectedTest?.[0]?.service_code;
        });
        setVendors([
          defaultVendor,
          ...(Array.isArray(selectedPackage?.vendors)
            ? selectedPackage.vendors.filter((vendor:any)=>!vendor?.is_parent)
            : []),
        ]);
        updateTestsFormData("selectedVendor", null);
      } else {
        setVendors([]);
        updateTestsFormData("selectedVendor", null);
      }
    }
  }, [testData.selectedTest, selectedClient.packages]);

  useEffect(() => {
    switch (consultType) {
      case "labpackage":
        getAllPackagess();
        break;
      case "labtest":
        getAllLabtests();
        break;
      case "radiology":
        getAllRadiologyTests();
        break;
      default:
        break;
    }
  }, [consultType, dispatch]);

  useEffect(() => {
    if (testData?.selectedDate) {
      getTestsTimeSlots(testData?.selectedDate);
      updateTestsFormData("selectedTimeSlot", null);
    }
  }, [testData.selectedDate, dispatch, testData.selectedVendor]);

  const getTestsTimeSlots = async (dateToUse: any) => {
    if (!testData.selectedVendor?.id) {
      toast.error("Please select a vendor to get timeslots");
      return;
    }
    if (!dateToUse) {
      toast.error("Please select a date first");
      return;
    }
    try {
      setIsLoading((pre) => {
        return {
          ...pre,
          timeSLots: true,
        };
      });
      const result = (await dispatch(
        getVendorTimeSlots({
          date: dateToUse,
          vendorId: testData.selectedVendor?.id ?? 1,
        })
      )) as any;

      if (result?.error) {
        toast.error(result?.error?.message || "Unknown Error Occured");
        return;
      }
      setTimeSlots(result?.payload?.data?.timeslots ?? []);
    } catch (error) {
      toast.error("unknown error occured");
      console.error(error);
    } finally {
      setIsLoading((pre) => {
        return {
          ...pre,
          timeSLots: false,
        };
      });
    }
  };

  const getAllPackagess = async (searchText: string = "") => {
    try {
      setIsLoading({
        ...isLoading,
        testsList: true,
      });
      // const body = {
      //   filters: {
      //     categoryIds: [],
      //     count: 20,
      //     isCorporate: false,
      //     type: "diagnostic",
      //     page: 1,
      //     searchText,
      //   },
      // };
      // const res = await dispatch(getAllFilteredPackages(body));
      // if (res?.error) {
      //   toast.error(res?.error?.data?.message ?? "Something went wrong");
      //   return;
      // } else {
      //   setTestsList(res?.payload?.data?.data);
      // }
      setTestsList(selectedClient.packages);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading({
        ...isLoading,
        testsList: false,
      });
    }
  };

  const getAllLabtests = async (searchText: string = "") => {
    try {
      setIsLoading((pre) => ({ ...pre, testsList: true }));
      const body = {
        filters: {
          categoryIds: [],
          count: 20,
          page: 1,
          searchText,
        },
      };
      const res = await dispatch(getAllFilteredTests(body));
      if (res?.error) {
        toast.error(res?.error?.data?.message ?? "Something went wrong");
        return;
      } else {
        setTestsList(res?.payload?.data);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading((pre) => ({ ...pre, testsList: false }));
    }
  };

  const getAllRadiologyTests = async (searchText: string = "") => {
    try {
      setIsLoading((pre) => ({ ...pre, testsList: true }));
      const body = {
        filters: {
          searchText,
          categoryIds: [],
          testType: "ctmri",
          count: 20,
          page: 1,
          active_status: "active",
        },
      };
      const res = await dispatch(getAllFilteredTests(body));
      if (res?.error) {
        toast.error(res?.error?.data?.message ?? "Something went wrong");
        return;
      } else {
        setTestsList(res?.payload?.data);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading((pre) => ({ ...pre, testsList: false }));
    }
  };

  const handleSearch = async (value: any) => {
    switch (consultType) {
      case "labpackage":
        getAllPackagess(value);
        break;
      case "labtest":
        getAllLabtests(value);
        break;
      case "radiology":
        getAllRadiologyTests(value);
        break;
      default:
        break;
    }
  };

  const handleTestSelect = (selectedOptions: any) => {
    setFormData((pre: any) => ({
      ...pre,
      tests: {
        ...pre.selectedTest,
        selectedTest: Array.isArray(selectedOptions)
          ? selectedOptions?.map?.((item: any) => item?.originalItem)
          : [selectedOptions?.originalItem],
      },
    }));
    if (validationErrors?.vendor || validationErrors?.test) {
      setValidationErrors((pre: any) => ({
        ...pre,
        test: selectedOptions ? null : pre.selectedTest,
      }));
    }
  };

  const handleDateChange = (date: any) => {
    if (date) {
      updateTestsFormData("selectedDate", dayjs(date).format("YYYY-MM-DD"));
    } else {
      updateTestsFormData("selectedDate", null);
    }
    if (date && validationErrors?.date) {
      setValidationErrors((pre: any) => ({
        ...pre,
        date: null,
      }));
    }
  };

  const updateTestsFormData = <T extends keyof FormData["tests"]>(
    key: T,
    value: FormData["tests"][T]
  ) => {
    setFormData((pre: any) => ({
      ...pre,
      tests: updateNestedField(key, value, pre.tests),
    }));
  };

  const getComponentConfig = () => {
    switch (consultType) {
      case "labpackage":
        return {
          title: "Lab Packages",
          placeholder: "Search Lab Packages...",
          icon: <MedicineBoxOutlined />,
          mode: undefined,
          color: "#1677ff;",
        };
      case "labtest":
        return {
          title: "Lab Tests",
          placeholder: "Search Lab Tests...",
          icon: <ExperimentOutlined />,
          mode: "multiple",
          color: "#1677ff;",
        };
      case "radiology":
        return {
          title: "Radiology Tests",
          placeholder: "Search Radiology Tests...",
          icon: <RadarChartOutlined />,
          mode: "multiple",
          color: "#1677ff;",
        };
      default:
        return null;
    }
  };

  const config = getComponentConfig();

  if (
    !["labpackage", "labtest", "radiology"].includes(consultType) ||
    !config
  ) {
    return null;
  }

  return (
    <div className="max-w-screen-xl mx-auto px-2 !mt-[22px]">
      <Card
        className="search-component-card"
        style={{
          marginBottom: 24,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          border: `1px solid ${config.color}20`,
        }}
      >
        <Space direction="vertical" size="middle" className="w-full">
          {/* Header Section */}
          <div>
            <div className="flex gap-1">
              <span className={`text-[18px]`} style={{ color: config.color }}>
                {config.icon}
              </span>
              <Title
                className="text-nowrap m-0"
                level={4}
                style={{ color: config.color }}
              >
                {config.title}
              </Title>
            </div>
          </div>

          {/* Description */}
          <Text type="secondary">
            {consultType === "labpackage"
              ? "Select a comprehensive lab package for multiple health checks"
              : `Search and select ${
                  consultType === "labtest"
                    ? "individual lab tests"
                    : "radiology examinations"
                } as needed`}
          </Text>

          {/* Form Section */}
          <Form layout="vertical">
            <Form.Item
              label={
                <span className="font-semibold text-[#262626]">
                  {config.title} Selection
                </span>
              }
              className="mb-0"
            >
              <Select
                status={validationErrors.test ? "error" : ""}
                placeholder={config.placeholder}
                mode={config.mode as any}
                size="large"
                loading={isLoading?.testsList}
                showSearch
                allowClear
                filterOption={false}
                suffixIcon={
                  isLoading?.testsList ? (
                    <Spin size="small" />
                  ) : (
                    <SearchOutlined style={{ color: config.color }} />
                  )
                }
                style={{
                  width: "100%",
                }}
                onSearch={async (value) => {
                  handleSearch(value);
                }}
                options={testsList?.map((item: any) => ({
                  label: item.service_name,
                  value: item.service_code,
                  originalItem: item,
                }))}
                optionRender={(option) => (
                  <div className="py-1">
                    <div className="font-medium text-[#262626]">
                      <img
                        src={
                          option.data.originalItem?.image?.[0] ??
                          "https://placehold.co/40x40"
                        }
                        alt={option.data.originalItem.service_name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 !mr-3"
                      />
                      {option.data.originalItem.service_name}
                    </div>
                    {option.data.originalItem.service_code && (
                      <div className="text-xs text-[#8c8c8c]">
                        Code: {option.data.originalItem.service_code}
                      </div>
                    )}
                  </div>
                )}
                onChange={(_, options) => {
                  handleTestSelect(options);
                }}
                value={
                  Array.isArray(testData.selectedTest)
                    ? testData.selectedTest?.map(
                        (item: any) => item?.service_code
                      )
                    : testData.selectedTest?.service_code
                }
              />
              {validationErrors.test && (
                <Text strong className="block mb-2 !text-red-500">
                  {validationErrors.test}
                </Text>
              )}
            </Form.Item>
          </Form>
          <Form layout="vertical">
            <Form.Item
              label={
                <span className="font-semibold text-[#262626]">
                  {config.title} Vendor Selection
                </span>
              }
              className="mb-0"
            >
              <Select
                placeholder="Select Vendor"
                size="large"
                status={validationErrors.vendor ? "error" : ""}
                loading={isLoading?.vendorsList}
                showSearch
                allowClear
                disabled={!testData.selectedTest?.[0]?.service_code}
                filterOption={false}
                suffixIcon={
                  isLoading?.testsList ? (
                    <Spin size="small" />
                  ) : (
                    <SearchOutlined style={{ color: config.color }} />
                  )
                }
                className="w-full"
                options={vendors?.map?.((vendors) => {
                  return {
                    label: vendors?.name,
                    value: vendors?.id,
                    originalItem: vendors,
                  };
                })}
                value={testData.selectedVendor?.id}
                onChange={(id) => {
                  updateTestsFormData(
                    "selectedVendor",
                    vendors.find((vendor) => vendor.id === id)
                  );
                  if (validationErrors.vendor) {
                    setValidationErrors((pre: any) => ({
                      ...pre,
                      vendor: null,
                    }));
                  }
                }}
              />
              {validationErrors.vendor && (
                <Text strong className="block mb-2 !text-red-500">
                  {validationErrors.vendor}
                </Text>
              )}
            </Form.Item>
          </Form>
        </Space>
      </Card>

      {testData.selectedTest && (
        <Card
          title={
            <Space>
              <CalendarOutlined className="text-pink-500" />
              <span>Schedule Appointment</span>
            </Space>
          }
          className="shadow-md"
        >
          <Text type="secondary" className="block mb-6">
            Select your preferred date and time for the consultation
          </Text>

          <Space direction="vertical" size="large" className="w-full">
            {/* Date Selection */}
            <div>
                <Text strong className="block mb-3">
                <CalendarOutlined className="!mr-2" />
                Select Date
                </Text>
                <DatePicker
                status={validationErrors.date ? "error" : ""}
                onChange={handleDateChange}
                value={
                  testData.selectedDate ? dayjs(testData.selectedDate) : null
                }
                size="large"
                className="w-[300px]"
                placeholder="Choose appointment date"
                disabledDate={(current) => {
                  // Disable today, tomorrow, past dates, and Sundays
                  const today = dayjs().startOf("day");
                  const tomorrow = today.add(1, "day");
                  // day() === 0 means Sunday
                  return (
                  (current && current < tomorrow.add(1, "day")) ||
                  (current && current.day() === 0) 
                  );
                }}
                />
              {validationErrors.date && (
                <Text strong className="block mb-2 !text-red-500">
                  {validationErrors.date}
                </Text>
              )}
            </div>

            {/* Time Slots */}
            <div>
              <Text strong className="block mb-3">
                <ClockCircleOutlined className="!mr-2" />
                Available Time Slots{" "}
                {validationErrors.timeSlot && (
                  <p className="text-red-500 m-0 inline-block">
                    ({validationErrors.timeSlot})
                  </p>
                )}
              </Text>

              {isLoading.timeSLots ? (
                <div className="flex items-center justify-center py-10">
                  <Space size="middle">
                    <Spin indicator={<LoadingOutlined spin />} size="large" />
                    <Text className="text-base">
                      Loading available time slots...
                    </Text>
                  </Space>
                </div>
              ) : !testData.selectedDate ? (
                <div className="text-center !py-4 bg-gray-50 rounded-lg border border-gray-200">
                  <CalendarOutlined className="text-2xl text-gray-400 mb-2" />
                  <Text className="block text-gray-500">
                    Please select a date first to view available time slots
                  </Text>
                </div>
              ) : timeSlots.length === 0 ? (
                <div className="text-center py-6 bg-gray-50 rounded-lg border border-gray-200">
                  <ClockCircleOutlined className="text-2xl text-gray-400 mb-2" />
                  <Text className="block text-gray-500">
                    No time slots available for the selected date
                  </Text>
                </div>
              ) : (
                <Form layout="vertical">
                  <Form.Item
                    label={
                      <span className="font-semibold text-[#262626]">
                        Select Time Slot
                      </span>
                    }
                    className="mb-0"
                  >
                    <Select
                      status={validationErrors.timeSlot ? "error" : ""}
                      placeholder="Choose a time slot"
                      size="large"
                      style={{ width: "100%" }}
                      value={testData.selectedTimeSlot}
                      onChange={(value) => {
                        updateTestsFormData("selectedTimeSlot", value);
                        if (value && validationErrors.timeSlot) {
                          setValidationErrors((pre: any) => ({
                            ...pre,
                            timeSlot: undefined,
                          }));
                        }
                      }}
                      options={timeSlots.filter(item=>{
                        if (!item?.start_time) return false;
                          const slotMoment = moment(item.start_time, "HH:mm:ss");
                          const limitMoment = moment("11:00:00", "HH:mm:ss");
                          return slotMoment.isBefore(limitMoment) && item?.duration_minutes == 60
                      }).map((item) => ({
                        label: item?.slot,
                        value: item?.slot,
                      }))}
                      notFoundContent={
                        <div className="text-center py-2 text-gray-500">
                          No time slots available
                        </div>
                      }
                    />
                    {validationErrors.timeSlot && (
                      <Text strong className="block mb-2 !text-red-500">
                        {validationErrors.timeSlot}
                      </Text>
                    )}
                  </Form.Item>
                </Form>
              )}
            </div>
          </Space>
        </Card>
      )}
    </div>
  );
};

export default memo(OtherTests);
