import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { updateNestedField } from "@/lib/common";
import {
  getDoctorClinicDetailsAPI,
  getDoctorFiltersAPI,
  getDoctorTimeSlotsAPI,
} from "@/redux/slices/doctor/doctorService";
import {
  getAllClientAssiocatedDoctors,
  getAllRaphaDoctorsAPI,
} from "@/redux/slices/doctorUsers/doctorUsersService";
import {
  Switch,
  Select,
  DatePicker,
  Spin,
  Card,
  Typography,
  Collapse,
  Button,
  Row,
  Col,
  Space,
  Alert,
} from "antd";
import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  LoadingOutlined,
  MedicineBoxOutlined,
  SearchOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import toast from "react-hot-toast";
import {
  FaComments,
  FaLaptopMedical,
  FaPhoneAlt,
  FaVideo,
} from "react-icons/fa";
import { MdOutlineAddIcCall } from "react-icons/md";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { FormData, ValidationErrors } from "../../CreateOrder";

const { Text } = Typography;
const { Panel } = Collapse;

const availableConsultTypes = ["instant", "call", "chat", "video", "opd"];

const virtualConsultOptions = [
  {
    value: "instant",
    label: "Instant Call",
    icon: <FaPhoneAlt className="mr-2" />,
  },
  {
    value: "call",
    label: "Audio Consult",
    icon: <MdOutlineAddIcCall className="mr-2" />,
  },
  {
    value: "chat",
    label: "Chat Consult",
    icon: <FaComments className="mr-2" />,
  },
  {
    value: "video",
    label: "Video Consult",
    icon: <FaVideo className="mr-2" />,
  },
  {
    value: "opd",
    label: "OPD Consult",
    icon: <FaLaptopMedical className="mr-2" />,
  },
];

interface ConsultationOrderProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  validationErrors: ValidationErrors;
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationErrors>>;
}

const ConsultationOrder = ({
  formData,
  setFormData,
  validationErrors,
  setValidationErrors,
}: ConsultationOrderProps) => {
  const timeoutRef = useRef<{
    doctors: any;
  }>({
    doctors: undefined,
  });
  const consultationFormData = formData.consultation;
  const dispatch = useDispatch() as any;
  const [doctorsType, setDoctorsType] = useState<
    "associated_doctors" | "rapha_doctors"
  >("associated_doctors");
  const { linkableId } = useClientLinkableId();

  const [doctorsList, setDoctorsList] = useState([]);
  const [doctorSpecilizations, setDoctorSpecilizations] = useState<any[]>([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState<any[]>(
    []
  );
  const [timeSlots, setTimeSlots] = useState([]) as any;
  const [clinicsList, setClinicsList] = useState([]);

  const [loading, setLoading] = useState({
    doctors: false,
    categories: false,
    timeSlots: false,
    clinics: false,
  });

  const updateConsultationFormData = useCallback(
    (key: string, value: any) => {
      setFormData((pre: any) => ({
        ...pre,
        consultation: updateNestedField(key, value, pre.consultation),
      }));
    },
    [setFormData]
  );

  const resetFormData = useCallback(() => {
    setFormData((pre: any) => ({
      ...pre,
      consultation: {
        ...pre.consultation,
        selectedSpecialization: [],
        selectedDoctor: null,
        selectedDate: null,
        selectedTimeSlot: null,
      },
    }));
  }, [setFormData]);

  const getAllDoctorsCategory = useCallback(async () => {
    try {
      setLoading((pre) => ({ ...pre, categories: true }));
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
      setLoading((pre) => ({ ...pre, categories: false }));
    }
  }, [dispatch]);

  const getAllRaphaDoctors = useCallback(
    async (
      searchText = "",
      specializations = doctorSpecilizations,
      consultType = consultationFormData.consultType
    ) => {
      try {
        setLoading((pre) => ({ ...pre, doctors: true }));
        const result = (await dispatch(
          getAllRaphaDoctorsAPI({
            filters: {
              count: 10,
              ...(consultType === "opd" ? { availabilities: true } : {}),
              searchText: searchText,
              status: ["approved"],
              category_ids: Array.isArray(
                consultationFormData.selectedSpecialization
              )
                ? consultationFormData.selectedSpecialization
                : [],
              ...(consultType === "instant" ? { availableIn90: true } : {}),
              client_id: null,
              ...(consultType === "opd" ? { type: [consultType] } : {}),
              ...(["call", "chat", "video", "instant"].includes(consultType)
                ? { virtual_type: [consultType] }
                : {}),
            },
          })
        )) as any;

        if (result?.error) {
          toast.error(result?.error?.message || "Unknown Error Occured");
        } else {
          setDoctorsList(result?.payload?.data?.doctors || []);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch team members.");
      } finally {
        setLoading((pre) => ({ ...pre, doctors: false }));
      }
    },
    [
      dispatch,
      consultationFormData.consultType,
      consultationFormData.selectedSpecialization,
      doctorSpecilizations,
    ]
  );

  const getAllLinkedDoc = useCallback(
    async (searchText = "") => {
      try {
        setLoading((pre) => ({ ...pre, doctors: true }));
        const result = (await dispatch(
          getAllClientAssiocatedDoctors({
            clientId: linkableId ?? "",
          })
        )) as any;

        if (result?.error) {
          toast.error(result?.error?.message || "Unknown Error Occured");
          return;
        } else {
          setDoctorsList(
            result?.payload?.data?.associatedDoctors?.[0]?.doctors || []
          );
        }
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch team members.");
      } finally {
        setLoading((pre) => ({ ...pre, doctors: false }));
      }
    },
    [dispatch, linkableId]
  );

  const getDoctorClinics = useCallback(async () => {
    const docId = consultationFormData.selectedDoctor?.id;
    if (!docId) {
      toast.error("Please select a doctor first for getting clinics");
      return;
    }

    try {
      setLoading((pre) => ({ ...pre, clinics: true }));
      const res = await dispatch(getDoctorClinicDetailsAPI({ id: docId }));
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occured");
        return;
      } else {
        if (res?.payload?.length === 0) {
          toast.error(
            "No clinics found for this doctor please select another doctor"
          );
        }
        setClinicsList(res?.payload || []);
      }
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setLoading((pre) => ({ ...pre, clinics: false }));
    }
  }, [dispatch, consultationFormData.selectedDoctor?.id]);

  const getDoctorTimeSlots = useCallback(
    async (dateToUse: any) => {
      if (!dateToUse) {
        toast.error("Please select a date first");
        return;
      }

      const selectedDoctorObj = consultationFormData.selectedDoctor;

      let doctorId =
        selectedDoctorObj?.doctorDetails?.id ||
        (selectedDoctorObj?.roles && selectedDoctorObj.roles.length > 0
          ? selectedDoctorObj.roles[0].linkable_id
          : null) ||
        selectedDoctorObj?.roleDoctor?.linkable_id ||
        selectedDoctorObj?.id;

      if (!doctorId) {
        toast.error("Please select a doctor first");
        return;
      }

      const formattedDate = dateToUse;

      try {
        setLoading((pre) => ({ ...pre, timeSlots: true }));
        const result = (await dispatch(
          getDoctorTimeSlotsAPI({
            id: doctorId,
            type: consultationFormData.consultType,
            date: formattedDate,
          })
        )) as any;

        if (result?.error) {
          toast.error(result?.error?.message || "Unknown Error Occured");
          return;
        }
        setTimeSlots(result?.payload);
      } catch (error) {
        toast.error("unknown error occured");
        console.error(error);
      } finally {
        setLoading((pre) => ({ ...pre, timeSlots: false }));
      }
    },
    [
      dispatch,
      consultationFormData.consultType,
      consultationFormData.selectedDoctor,
    ]
  );

  const handleDateChange = useCallback(
    (date: any) => {
      if (date) {
        updateConsultationFormData(
          "selectedDate",
          dayjs(date).format("YYYY-MM-DD")
        );
      } else {
        updateConsultationFormData("selectedDate", null);
      }
      if (validationErrors?.date) {
        setValidationErrors((pre: any) => ({ ...pre, date: null }));
      }
    },
    [updateConsultationFormData, validationErrors?.date, setValidationErrors]
  );

  const handleDoctorSelect = useCallback(
    (_: any, option: any) => {
      const doctorObj = option?.originalItem || null;
      setFormData((pre: any) => ({
        ...pre,
        consultation: {
          ...pre.consultation,
          selectedDoctor: doctorObj,
          selectedDate: null,
          selectedTimeSlot: null,
          selectedVendor: null,
        },
      }));
      if (validationErrors.doctor) {
        if (doctorObj) {
          setValidationErrors((pre: any) => ({
            ...pre,
            doctor: null,
          }));
        }
      }
    },
    [setFormData, validationErrors.doctor, setValidationErrors]
  );

  useEffect(() => {
    getAllDoctorsCategory();
    resetFormData();
  }, [consultationFormData.consultType, getAllDoctorsCategory, resetFormData]);

  useEffect(() => {
    if (doctorsType === "rapha_doctors") {
      getAllRaphaDoctors();
    } else {
      getAllLinkedDoc();
    }
  }, [
    consultationFormData.consultType,
    dispatch,
    doctorsType,
    selectedSpecialization,
    getAllRaphaDoctors,
    getAllLinkedDoc,
  ]);

  useEffect(() => {
    if (
      consultationFormData.consultType === "opd" &&
      consultationFormData.selectedDoctor?.id
    ) {
      getDoctorClinics();
    }
  }, [
    consultationFormData.selectedDoctor,
    consultationFormData.consultType,
    getDoctorClinics,
  ]);

  useEffect(() => {
    if (
      consultationFormData.selectedDoctor &&
      consultationFormData.selectedDate
    ) {
      getDoctorTimeSlots(consultationFormData.selectedDate);
    }
  }, [
    consultationFormData.selectedDoctor,
    consultationFormData.selectedDate,
    getDoctorTimeSlots,
  ]);

  const accordionData = useMemo(
    () => [
      {
        title: `Morning (${
          timeSlots?.[0]?.timeslots?.morning?.length ?? 0
        } slots)`,
        slots: timeSlots?.[0]?.timeslots?.morning || [],
      },
      {
        title: `Afternoon (${
          timeSlots?.[0]?.timeslots?.afternoon?.length ?? 0
        } slots)`,
        slots: timeSlots?.[0]?.timeslots?.afternoon || [],
      },
      {
        title: `Evening (${
          timeSlots?.[0]?.timeslots?.evening?.length ?? 0
        } slots)`,
        slots: timeSlots?.[0]?.timeslots?.evening || [],
      },
    ],
    [timeSlots]
  );

  const associatedDoctorOptions = useMemo(
    () =>
      doctorsList
        ?.filter((doctor: any) => doctor?.id !== null)
        .map((doctor: any) => ({
          label: `${doctor?.user?.first_name || ""} ${
            doctor?.user?.last_name || ""
          }`,
          value: doctor?.id,
          originalItem: doctor,
        })),
    [doctorsList]
  );

  const raphaDoctorOptions = useMemo(
    () =>
      doctorsList?.map((doctor: any) => ({
        label: `${doctor?.name || ""} - ${doctor?.specialization || ""}`,
        value: doctor.id,
        originalItem: doctor,
      })),
    [doctorsList]
  );

  const specializationOptions = useMemo(
    () =>
      doctorSpecilizations?.map((spec: any) => ({
        label: `${spec?.name} (${spec?.count} doctors)`,
        value: spec.id,
      })),
    [doctorSpecilizations]
  );

  const clinicOptions = useMemo(
    () =>
      clinicsList?.map((clinic: any) => ({
        value: clinic?.vendor?.id,
        originalItem: clinic?.vendor,
        label: `${clinic?.vendor?.name}`,
      })),
    [clinicsList]
  );

  return (
    <div className="max-w-screen-xl mx-auto px-2 mt-3">
      <Space direction="vertical" size="large" className="w-full">
        {/* Consultation Type Selection */}
        {availableConsultTypes.includes(consultationFormData.consultType) && (
          <Card
            title={
              <Space>
                <MedicineBoxOutlined className="text-blue-500" />
                <span>Select Consultation Type</span>
                {validationErrors.consultType && (
                  <span className="text-red-500">
                    please select a consultation type
                  </span>
                )}
              </Space>
            }
            className={`shadow-md ${
              validationErrors.consultType ? "!border-red-500" : ""
            }`}
          >
            <Text type="secondary" className="block mb-4">
              Choose how you'd like to consult with your doctor
            </Text>

            <div className="flex gap-2 flex-wrap">
              {virtualConsultOptions.map((option: any) => (
                <Button
                  key={option.value}
                  onClick={() =>
                    updateConsultationFormData("consultType", option.value)
                  }
                  className={`h-10 px-4 py-3 !rounded-full flex items-center justify-center focus:outline-none !shadow-md ${
                    consultationFormData.consultType === option.value
                      ? "!bg-[#222E62] text-white"
                      : "bg-white text-[#222E62] border border-[#222E62] hover:bg-opacity-10 hover:bg-[#222E62]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {consultationFormData.consultType === option.value && (
                      <span className="w-1 h-1 inline-block bg-white rounded-full"></span>
                    )}
                    <Text
                      strong
                      className={`${
                        consultationFormData.consultType === option.value
                          ? "text-white"
                          : "text-[#222E62]"
                      }`}
                    >
                      {option.label}
                    </Text>
                  </div>
                </Button>
              ))}
            </div>
          </Card>
        )}

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
          {availableConsultTypes.includes(consultationFormData.consultType) && (
            <>
              <Text type="secondary" className="block mb-4">
                Choose between your associated doctors or browse all available
                doctors
              </Text>

              <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <Space size="large">
                  <>
                    <Text
                      strong
                      className={
                        doctorsType === "rapha_doctors"
                          ? "!text-gray-600"
                          : "!text-blue-500"
                      }
                    >
                      Your Associated Doctors
                    </Text>
                    <Switch
                      checked={doctorsType === "rapha_doctors"}
                      onChange={(checked) => {
                        resetFormData();
                        setDoctorsType(
                          checked ? "rapha_doctors" : "associated_doctors"
                        );
                      }}
                      size="default"
                    />
                    <Text
                      strong
                      className={
                        doctorsType === "associated_doctors"
                          ? "!text-gray-600"
                          : "!text-blue-500"
                      }
                    >
                      All Platform Doctors
                    </Text>
                  </>
                </Space>
              </div>
            </>
          )}

          {/* Doctor Selection */}
          {consultationFormData.consultType &&
            availableConsultTypes.includes(
              consultationFormData.consultType
            ) && (
              <>
                <Text type="secondary" className="block mb-4">
                  {doctorsType === "rapha_doctors"
                    ? "Choose from available doctors on the platform"
                    : "Select from your associated doctors"}
                </Text>

                {doctorsType === "associated_doctors" ? (
                  <div>
                    <Text strong className="block mb-2">
                      Search Your Doctors
                    </Text>
                    <Select
                      status={validationErrors.doctor ? "error" : ""}
                      placeholder="Type to search and select a doctor from your team"
                      showSearch
                      suffixIcon={
                        loading.doctors ? (
                          <Spin size="small" />
                        ) : (
                          <SearchOutlined style={{ color: "#1677ff" }} />
                        )
                      }
                      size="large"
                      className="w-full"
                      value={consultationFormData.selectedDoctor?.id}
                      loading={loading.doctors}
                      onSearch={getAllLinkedDoc}
                      options={associatedDoctorOptions}
                      filterOption={false}
                      onChange={handleDoctorSelect}
                      optionRender={(option: any) => {
                        return (
                          <div className="flex items-center py-2">
                            <img
                              src={
                                option?.data?.originalItem?.image ??
                                "https://placehold.co/40x40"
                              }
                              alt={`Dr. ${option?.label}`}
                              className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 mr-3"
                            />
                            <div>
                              <div className="font-medium">{option?.label}</div>
                              <div className="text-xs text-gray-600">
                                {option?.data?.originalItem?.specialization ??
                                  "General Practice"}
                              </div>
                            </div>
                          </div>
                        );
                      }}
                    />
                    {validationErrors.doctor && (
                      <Text strong className="block mb-2 !text-red-500">
                        please select a doctor
                      </Text>
                    )}
                  </div>
                ) : (
                  <Space direction="vertical" size="middle" className="w-full">
                    <div>
                      <Text strong className="block mb-2">
                        Filter by Specialization
                      </Text>
                      <Select
                        placeholder="Select one or more specializations to filter doctors"
                        mode="multiple"
                        showSearch
                        suffixIcon={
                          loading.categories ? (
                            <Spin size="small" />
                          ) : (
                            <SearchOutlined style={{ color: "#1677ff" }} />
                          )
                        }
                        size="large"
                        className="w-full"
                        value={
                          Array.isArray(selectedSpecialization)
                            ? selectedSpecialization
                            : []
                        }
                        loading={loading.categories}
                        options={specializationOptions}
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                        }
                        onChange={setSelectedSpecialization}
                      />
                    </div>

                    <div>
                      <Text strong className="block mb-2">
                        Select Doctor
                      </Text>
                      <Select
                        status={validationErrors.doctor ? "error" : ""}
                        placeholder="Search and select a doctor from the platform"
                        showSearch={true}
                        suffixIcon={
                          loading.doctors ? (
                            <Spin size="small" />
                          ) : (
                            <SearchOutlined style={{ color: "#1677ff" }} />
                          )
                        }
                        size="large"
                        className="w-full"
                        value={consultationFormData.selectedDoctor?.id}
                        loading={loading.doctors}
                        onSearch={(value) => {
                          clearTimeout(timeoutRef.current.doctors);
                          timeoutRef.current.doctors = setTimeout(() => {
                            getAllRaphaDoctors(
                              value,
                              consultationFormData.selectedSpecialization,
                              consultationFormData.consultType
                            );
                          }, 200);
                        }}
                        options={raphaDoctorOptions}
                        filterOption={false}
                        onChange={handleDoctorSelect}
                        optionRender={(option: any) => (
                          <div className="flex items-center py-2">
                            <img
                              src={
                                option?.data?.originalItem?.image ??
                                "https://placehold.co/40x40"
                              }
                              alt={`Dr. ${option?.label}`}
                              className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 mr-3"
                            />
                            <div>
                              <div className="font-medium">{option?.label}</div>
                              <div className="text-xs text-gray-600">
                                {option?.data?.originalItem?.specialization ??
                                  "General Practice"}
                              </div>
                            </div>
                          </div>
                        )}
                      />
                      {validationErrors.doctor && (
                        <Text strong className="block mb-2 !text-red-500">
                          please select a doctor
                        </Text>
                      )}
                    </div>
                  </Space>
                )}
              </>
            )}
        </Card>

        {/* Appointment Scheduling */}
        {consultationFormData.selectedDoctor &&
          consultationFormData.consultType !== "instant" && (
            <Card
              title={
                <Space>
                  <CalendarOutlined className="text-pink-500" />
                  <span>Schedule Appointment</span>
                </Space>
              }
              className={`shadow-md ${
                validationErrors.date || validationErrors?.timeSlot
                  ? "!border-red-500"
                  : ""
              }`}
            >
              <Text type="secondary" className="block !mb-6">
                Select your preferred date and time for the consultation
              </Text>

              <Space direction="vertical" size="large" className="w-full">
                {consultationFormData.consultType === "opd" && (
                  <div>
                    <Text strong className="block mb-2">
                      Select OPD-Clinic
                    </Text>
                    <Select
                      status={validationErrors.vendor ? "error" : ""}
                      placeholder="Select a clinic"
                      suffixIcon={
                        loading.clinics ? (
                          <Spin size="small" />
                        ) : (
                          <SearchOutlined style={{ color: "#1677ff" }} />
                        )
                      }
                      size="large"
                      className="w-full"
                      value={consultationFormData.selectedVendor?.id}
                      loading={loading.clinics}
                      options={clinicOptions}
                      filterOption={false}
                      onChange={(_, option: any) => {
                        const vendorObj = option?.originalItem || null;
                        updateConsultationFormData(
                          "selectedVendor",
                          vendorObj
                        );
                      }}
                      optionRender={(option: any) => (
                        <div className="flex items-center py-2 gap-2">
                          <img
                            src={
                              option?.data?.originalItem?.image ||
                              "https://placehold.co/40x40"
                            }
                            alt={`${option?.data?.originalItem?.name}`}
                            className="w-10 h-10 rounded-full object-cover border-2 border-gray-100 mr-3"
                          />
                          <div>
                            <div className="font-medium">
                              {option?.data?.originalItem?.name}
                            </div>
                            <div className="text-xs text-gray-600">
                              {option?.data?.originalItem?.address ??
                                "Address not availabe"}
                            </div>
                          </div>
                        </div>
                      )}
                    />
                    {validationErrors.vendor && (
                      <Text strong className="block mb-2 !text-red-500">
                        please select a Clinic
                      </Text>
                    )}
                  </div>
                )}
                {/* Date Selection */}
                <div>
                  <Text strong className="block !mb-3">
                    <CalendarOutlined className="!mr-2" />
                    Select Date
                  </Text>
                  <DatePicker
                    status={validationErrors?.date ? "error" : ""}
                    onChange={handleDateChange}
                    value={
                      consultationFormData.selectedDate
                        ? dayjs(consultationFormData.selectedDate)
                        : null
                    }
                    size="large"
                    className="w-[300px]"
                    placeholder="Choose appointment date"
                    disabledDate={(current) => {
                      return current && current < dayjs().startOf("day");
                    }}
                  />
                  {validationErrors?.date && (
                    <Text strong className="block !text-red-500">
                      please select a date
                    </Text>
                  )}
                </div>

                {/* Time Slots */}
                <div>
                  <Text strong className="block !mb-3">
                    <ClockCircleOutlined className="!mr-2" />
                    Available Time Slots
                    {validationErrors?.timeSlot && (
                      <span className="text-red-500 !ml-2">
                        (please select a timeslot)
                      </span>
                    )}
                  </Text>

                  {loading.timeSlots ? (
                    <div className="flex items-center justify-center py-10">
                      <Space size="middle">
                        <Spin
                          indicator={<LoadingOutlined spin />}
                          size="large"
                        />
                        <Text className="text-base">
                          Loading available time slots...
                        </Text>
                      </Space>
                    </div>
                  ) : consultationFormData.selectedDate && timeSlots ? (
                    <Collapse size="large" className="bg-gray-50">
                      {accordionData.map((section, index) => (
                        <Panel
                          header={
                            <Space>
                              <ClockCircleOutlined className="text-blue-500" />
                              <Text strong>{section.title}</Text>
                              <Text type="secondary" className="text-xs">
                                ({section.slots?.length || 0} slots available)
                              </Text>
                            </Space>
                          }
                          key={index}
                        >
                          <Row gutter={[12, 12]} className="max-w-3xl">
                            {section.slots?.length > 0 ? (
                              section.slots.map((item: any) => (
                                <Col xs={12} sm={8} md={6} lg={4} key={item}>
                                  <Button
                                    type={
                                      consultationFormData.selectedTimeSlot ===
                                      item
                                        ? "primary"
                                        : "default"
                                    }
                                    size="large"
                                    className={`w-full h-12 font-medium ${
                                      consultationFormData.selectedTimeSlot ===
                                      item
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-100 text-gray-600"
                                    }`}
                                    onClick={() => {
                                      updateConsultationFormData(
                                        "selectedTimeSlot",
                                        item
                                      );
                                      if (validationErrors?.timeSlot && item) {
                                        setValidationErrors((prev: any) => ({
                                          ...prev,
                                          timeSlot: null,
                                        }));
                                      }
                                    }}
                                  >
                                    {item}
                                  </Button>
                                </Col>
                              ))
                            ) : (
                              <Col span={24}>
                                <Alert
                                  message="No time slots available for this period"
                                  type="info"
                                  showIcon
                                  className="text-center"
                                />
                              </Col>
                            )}
                          </Row>
                        </Panel>
                      ))}
                    </Collapse>
                  ) : consultationFormData.selectedDate ? (
                    <Alert
                      message="No time slots available"
                      description="Please try selecting a different date"
                      type="warning"
                      showIcon
                      className="text-center p-10"
                    />
                  ) : (
                    <Alert
                      message="Select a date first"
                      description="Choose an appointment date to view available time slots"
                      type="info"
                      showIcon
                      className="text-center p-10"
                    />
                  )}
                </div>
              </Space>
            </Card>
          )}
      </Space>
    </div>
  );
};

export default React.memo(ConsultationOrder);