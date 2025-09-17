import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { CreateOrderStyled } from "./CreateOrder.styled";
import { useDispatch } from "react-redux";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import OrderFormCommonDetails from "./components/OrderFormCommonDetails";
import { FaFlask, FaVial, FaLaptopMedical } from "react-icons/fa";
import { PillBottle } from "lucide-react";
import CustomTab from "@/components/custom/Tab/CustomTab";
import ConsultationOrder from "./Tabs/Consultation/ConsultationOrder";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import OrderCart from "./components/OrderCart";
import OtherTests from "./Tabs/OtherTests/OtherTests";
import toast from "react-hot-toast";
import CustomSpinLoader from "@/components/loader/SpinLoader/CustomSpinLoader";
import PharmacyOrder from "./Tabs/Pharmacy/PharmacyOrder";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import SecondOpinionOrder from "./Tabs/SecondOpinion/SecondOpinionOrder";
import useGetAllSubClientsOrderData from "@/hooks/useGetAllClientsOrderDetails";
import { Select } from "antd";
import { createNewOrderAPI } from "@/redux/slices/orders/orderService";
import { getClinicWalletsApi } from "@/redux/slices/Clients/ClientsService";
import {
  CartData,
  ConsultType,
  CreateOrderFormProps,
  FormData,
  OrderErrors,
  Service,
  UserDetails,
  ValidationErrors,
} from "./types";

const consultOptions: Array<{
  value: ConsultType;
  label: string;
  icon: any;
}> = [
  {
    value: "virtual",
    label: "Virtual Consult",
    icon: <FaLaptopMedical className="tab-icon" />,
  },
  {
    value: "labpackage",
    label: "Lab Package",
    icon: <FaFlask className="tab-icon" />,
  },
  {
    value: "labtest",
    label: "Lab Test",
    icon: <FaVial className="tab-icon" />,
  },
  {
    value: "pharmacy",
    label: "Pharmacy",
    icon: <PillBottle className="tab-icon" />,
  },
  {
    value: "second_opinion",
    label: "Second Opinion",
    icon: <PillBottle className="tab-icon" />,
  },
];

const defaultFormData: FormData = {
  consultation: {
    consultType: "raphaprefered",
    selectedDoctor: null,
    selectedTimeSlot: null,
    selectedDate: null,
    selectedSpecialization: null,
    selectedVendor: null,
  },
  tests: {
    selectedTest: null,
    selectedVendor: null,
    selectedTimeSlot: null,
    selectedDate: null,
  },
  pharmacy: {
    selectedMedicines: [],
  },
  secondOpinion: {
    phone: null,
    comments: null,
    alternate_phone: null,
    selectedCategory: null,
    selectedDoctor: null,
    selectedVendor: null,
    urls: null,
  },
};

const CreateOrder: React.FC<CreateOrderFormProps> = ({
  visible = false,
  onCancel,
  reload,
}) => {
  const { isLoading: subClientsDetailsLoading, subClientsOrderDetails } =
    useGetAllSubClientsOrderData();
  const validationRef = useRef<OrderErrors>({
    consultation: {
      date: "",
      doctor: "",
      timeSlot: "",
    },
  });
  const [selectedClientWallet, setSelectedClientWallet] = useState<
    Service[] | null
  >(null);
  const [selectedClient, setSelectedClient] = useState<
    null | (typeof subClientsOrderDetails)[number]
  >(null);
  const { linkableId } = useClientLinkableId();
  const dispatch = useDispatch() as any;
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartData, setCartData] = useState<CartData>({
    virtual: [],
    labpackage: [],
    labtest: [],
    pharmacy: [],
  });

  const allowedData = useMemo(() => {
    const allowedData = selectedClientWallet?.reduce?.(
      (acc: Map<string, any[]>, item) => {
        if (acc.get(item.type)) {
          acc.set(item.type, [...acc.get(item.type)!, item]);
        } else {
          acc.set(item.type, [item]);
        }
        return acc;
      },
      new Map<string, any[]>()
    );

    return allowedData ?? new Map<string, any[]>();
  }, [selectedClientWallet]);

  console.log("alloweddata", allowedData);

  const allowedTabs = useMemo(() => {
    return selectedClient
      ? consultOptions
          .filter((tab) => {
            switch (tab.value) {
              case "virtual": {
                if (
                  allowedData?.has("virtual_consultation") ||
                  allowedData?.has("opd_consultation")
                ) {
                  return true;
                } else {
                  return false;
                }
              }
              case "labpackage": {
                if (selectedClient?.packages?.length > 0) {
                  return true;
                }
                return false;
              }
              default:
                return false;
            }
          })
          ?.reverse()
      : [];
  }, [selectedClient, selectedClientWallet]);
  const [consultType, setConsultType] = useState<ConsultType>(
    allowedTabs[0]?.value ?? ""
  );
  const [userDetails, setUserDetails] = useState<UserDetails>({
    userType: "existing",
    users: [],
  });
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const [loading, setLoading] = useState({
    isBooking: false,
  });

  const fetchClinicWallets = useCallback(async () => {
    try {
      const res = (await dispatch(
        getClinicWalletsApi(selectedClient?.id)
      )) as any;
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occured");
        return;
      }
      setSelectedClientWallet(res?.payload?.data?.clientWallets);
    } catch (error) {
      console.error("Error fetching clinic wallets:", error);
    }
  }, [selectedClient?.id, dispatch]);

  useEffect(() => {
    if (selectedClient?.id) {
      fetchClinicWallets();
    }
  }, [fetchClinicWallets]);

  useEffect(() => {
    setConsultType(allowedTabs[0]?.value ?? "");
  }, [selectedClient,allowedTabs]);

  useEffect(() => {
    setFormData(defaultFormData);
    setValidationErrors({});
  }, [consultType]);

  const handleResetForm = () => {
    setUserDetails({ userType: "existing", users: [] });
    setFormData(defaultFormData);
    setValidationErrors({});
  };

  const handleValidation = (): boolean => {
    const errors: ValidationErrors = {};

    // Common validation for user details
    if (userDetails?.users || !userDetails?.users) {
      if (userDetails?.userType === "new") {
        const userErrors = {} as any;
        if (!userDetails?.users?.[0]?.user?.firstName) {
          userErrors.firstName = "Please enter first name";
        }
        if (!userDetails?.users?.[0]?.user?.lastName) {
          userErrors.lastName = "Please enter last name";
        }
        // Either email or phone is required
        const email = userDetails?.users?.[0]?.user?.email;
        const phone = userDetails?.users?.[0]?.user?.phone;
        if (!email && !phone) {
          userErrors.email = "Please enter email or phone number";
          userErrors.phone = "Please enter email or phone number";
        } else {
          if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
              userErrors.email = "Please enter a valid email address";
            }
          }
          if (phone) {
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(phone)) {
              userErrors.phone = "Please enter a valid 10 digit phone number";
            }
          }
        }
        if (
          !userDetails?.users?.[0]?.user?.age ||
          !userDetails?.users?.[0]?.user?.dob
        ) {
          userErrors.age = "Please enter age";
        }
        if (!userDetails?.users?.[0]?.user?.gender) {
          userErrors.gender = "Please enter gender";
        }
        if (!userDetails?.users?.[0]?.user?.employeeid) {
          userErrors.employeeid = "Please enter employeeid";
        }
        if (Object.keys(userErrors).length > 0) {
          errors.user = userErrors;
        }
      } else if (userDetails.userType === "existing") {
        if (
          userDetails?.users?.length === 0 ||
          !userDetails?.users?.every((user: any) => user.user.id)
        ) {
          errors.user = { id: "Please select users" };
        }
      }
    }


    // Validation based on consult type
    switch (consultType) {
      case "virtual":
        if (!formData.consultation.consultType) {
          errors.consultType = "Please select consultation type";
        }

        // For scheduled consultations, validate date and time
        if (
          ["call", "chat", "video", "opd","raphaprefered"].includes(
            formData.consultation.consultType
          )
        ) {
          if (!formData.consultation.selectedDate) {
            errors.date = "Please select a date";
          }
          if (!formData.consultation.selectedTimeSlot) {
            errors.timeSlot = "Please select a time slot";
          }
          if (
            !formData.consultation.selectedVendor?.id &&
            formData.consultation.consultType === "opd"
          ) {
            errors.vendor = "Please select a clinic";
          }
        }

        break;

      case "labpackage": {
        if (
          !Array.isArray(formData.tests.selectedTest) ||
          formData.tests.selectedTest.length === 0 ||
          !formData.tests.selectedTest.every(
            (test) => test.service_code && test.service_code !== ""
          )
        ) {
          errors.test = "Please select at least one valid test";
        }
        if (!formData.tests.selectedVendor?.id) {
          errors.vendor = "Please select a vendor";
        }
        break;
      }
      case "labtest":
        break;
      case "pharmacy": {
        if (formData?.pharmacy?.selectedMedicines?.length === 0) {
          errors.pharmacy = "Please select at least one medicine";
        }
        break;
      }

      case "second_opinion": {
        const secondOpinionErrors = {} as any;
        const type = formData.secondOpinion.selectedDoctor?.id
          ? "doctor"
          : formData.secondOpinion.selectedVendor
          ? "vendor"
          : null;
        if (!type) {
          secondOpinionErrors.doctor = "Please select a doctor";
          secondOpinionErrors.vendor = "Please select a Hospital";
        } else if (type === "doctor") {
          if (!formData?.secondOpinion?.selectedDoctor?.id) {
            secondOpinionErrors.doctor = "Please select a doctor";
          }
        } else if (type === "vendor") {
          if (!formData?.secondOpinion?.selectedVendor?.id) {
            secondOpinionErrors.vendor = "Please select a Hospital";
          }
          if (
            !formData?.secondOpinion?.selectedCategory ||
            formData?.consultation?.selectedSpecialization?.length === 0
          ) {
            secondOpinionErrors.category = "Please select a category";
          }
        }
        if (!formData?.secondOpinion?.urls) {
          secondOpinionErrors.reports = "Please upload reports";
        }
        if (!formData?.secondOpinion?.phone) {
          secondOpinionErrors.phone = "Please enter phone number";
        }
        if (!formData?.secondOpinion?.comments) {
          secondOpinionErrors.comments = "Please add a comment";
        }
        if (Object.keys(secondOpinionErrors).length > 0) {
          errors.secondOpinion = secondOpinionErrors;
        }
        break;
      }

      default:
        errors.general = "Invalid consultation type";
    }

    // Address validation for non-virtual consultations
    if (consultType == "labtest" || userDetails?.userType === "new") {
      userDetails?.users?.forEach((eachUser) => {
        if (eachUser?.address) {
          const addressErrors = {} as any;
          if (!eachUser.address.fullAddress) {
            addressErrors.fullAddress = "Please provide full address";
          }
          if (!eachUser.address.city) {
            addressErrors.city = "Please provide city";
          }
          if (!eachUser.address.state) {
            addressErrors.state = "Please provide state";
          }
          if (!eachUser.address.zip) {
            addressErrors.zip = "Please provide zip code";
          }
          if (Object.keys(addressErrors).length > 0) {
            errors.address = addressErrors;
          }
        } else {
          errors.address = {
            fullAddress: "Please provide full address",
            city: "Please provide city",
            state: "Please provide state",
            zip: "Please provide zip code",
          };
        }
      });
    }

    setValidationErrors(errors);

    // Display first error as toast
    if (Object.keys(errors).length > 0) {
      const allErrors: string[] = [];

      const handleErrorPush = (errorData: any) => {
        Object.entries(errorData).forEach(([_, value]) => {
          if (typeof value === "string") {
            allErrors.push(value);
          } else if (typeof value === "object") {
            handleErrorPush(value);
          }
        });
      };

      handleErrorPush(errors);

      // Show all errors as toast
      allErrors.forEach((error, index) => {
        toast.error(error);
      });

      return false;
    }

    return true;
  };

  const handleCreateOrder = async () => {
    // Validate form before proceeding
    if (!handleValidation()) {
      return;
    }

    const usersPayload = () => {
      if (userDetails.userType === "existing") {
        return userDetails.users
          ?.map((eachUser) => {
            if (!eachUser?.user?.id) {
              return null;
            }
            return {
              ...(eachUser?.user?.remark
                ? { remarks: eachUser.user.remark }
                : {}),
              email: String(eachUser.user.email),
              vendor_id: formData.tests?.selectedVendor?.id || 1,
              ...(eachUser.user?.selectedDate
                ? { selected_date: eachUser.user?.selectedDate }
                : {}),
              ...(eachUser.user?.selectedTimeSlot
                ? { selected_timeslot: eachUser.user?.selectedTimeSlot }
                : {}),
              address: eachUser?.address?.fullAddress ?? "",
              name: `${eachUser.user.first_name}${
                String(eachUser.user.last_name) ? " " : ""
              }${String(eachUser.user.last_name ?? "")}`,
              ...(eachUser.user?.employeeid
                ? { employee_id: eachUser.user.employeeid }
                : {}),
            };
          })
          .filter(Boolean);
      } else if (userDetails.userType === "new") {
        return userDetails.users
          ?.map((eachUser) => {
            if (!eachUser?.user) {
              return null;
            }
            return {
              ...(eachUser?.user?.remark
                ? { remarks: eachUser.user.remark }
                : {}),
              name:
                `${eachUser.user.firstName}${
                  String(eachUser.user.lastName) ? " " : ""
                }${String(eachUser.user.lastName ?? "")}` || "",
              email: eachUser.user.email || null,
              phone: eachUser.user.phone || null,
              age: eachUser.user.age || "",
              gender: eachUser.user.gender || "",
              address: eachUser?.address?.fullAddress ?? "",
              ...(eachUser.user?.selectedDate
                ? { selected_date: eachUser.user?.selectedDate }
                : {}),
              ...(eachUser.user?.selectedTimeSlot
                ? { selected_timeslot: eachUser.user?.selectedTimeSlot }
                : {}),
              vendor_id: formData.tests?.selectedVendor?.id || 1,
              ...(eachUser.user?.employeeid
                ? { employee_id: eachUser.user.employeeid }
                : {}),
            };
          })
          .filter(Boolean);
      } else if (userDetails.userType === "bulk") {
        return userDetails.users;
      }

      throw new Error("User details not found");
    };

    let payload: any;
    switch (consultType) {
      case "virtual": {
        if (
          ["video", "chat", "call", "opd", "raphaprefered"].includes(
            formData.consultation.consultType
          )
        ) {
          payload = {
            client_id: selectedClient?.id ?? linkableId,
            package_code: null,
            doctor_id: String(formData.consultation.selectedDoctor?.id || null),
            vendor_id: 1,
            selected_date: formData.consultation.selectedDate,
            selected_timeslot: formData.consultation.selectedTimeSlot,
            users: usersPayload(),
          };
        } else if (formData.consultation.consultType === "opd") {
          throw new Error("OPD consultation not implemented yet");
        }
        break;
      }
      case "labpackage": {
        payload = {
          client_id: selectedClient?.id ?? linkableId,
          package_code: (Array.isArray(formData.tests.selectedTest)
            ? formData.tests.selectedTest?.map((item) => item.service_code)
            : [formData.tests.selectedTest?.service_code])?.[0],
          doctor_id: null,
          vendor_id: formData.tests.selectedVendor?.id || 1,
          selected_date: formData.tests.selectedDate,
          selected_timeslot: formData.tests.selectedTimeSlot,
          users: usersPayload(),
        };
        break;
      }
      case "labtest": {
        payload = {
          client_id: selectedClient?.id ?? linkableId,
          test_codes: Array.isArray(formData.tests.selectedTest)
            ? formData.tests.selectedTest?.map((item) => item.service_code)
            : [formData.tests.selectedTest?.service_code],
          vendor_id: formData.tests.selectedVendor?.id,
          collection_1_date: formData.tests.selectedDate,
          collection_1_slot: formData.tests.selectedTimeSlot,
          users: usersPayload(),
        };
        break;
      }
      default:
        return;
    }

    setLoading((pre) => {
      return {
        ...pre,
        isBooking: true,
      };
    });
    try {
      if (payload) {
        const orderResponse = await dispatch(createNewOrderAPI(payload));
        if (orderResponse.error) {
          toast.error(orderResponse.error.message || "Unknown error occurred");
          return;
        } else {
          toast.success("Order Booked Successfully!");
          handleResetForm();
          onCancel();
          if (reload) {
            reload();
          }
        }
      }
    } catch (error) {
      toast.error("Unknown error occurred");
    } finally {
      setLoading((pre) => {
        return {
          ...pre,
          isBooking: false,
        };
      });
    }
  };

  console.log("formData", formData);
  console.log("userDetails", userDetails);
  console.log("cartData", cartData);
  console.log("validationErrors", validationErrors);
  console.log("consultType", consultType);

  return (
    <CustomModal
      title={
        selectedClient
          ? cartOpen
            ? "Cart"
            : `Create New Order for ${selectedClient.name}`
          : "Select a Client"
      }
      open={visible}
      handleClose={onCancel}
      headerClassName="px-2"
    >
      <CustomModal.Body>
        <CustomSpinLoader spinning={subClientsDetailsLoading}>
          <div className="flex flex-col gap-1 m-2">
            <p className="text-lg font-bold m-0">Select a Client</p>
            <Select
              size="large"
              showSearch
              options={subClientsOrderDetails?.map((client) => ({
                label: client.name,
                value: client.id,
              }))}
              value={selectedClient?.id}
              onChange={(value: string) => {
                setSelectedClient(
                  subClientsOrderDetails?.find(
                    (client) => client.id === value
                  ) || null
                );
              }}
              placeholder="Select a Client"
              loading={subClientsDetailsLoading}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              optionFilterProp="label"
            />
          </div>
        </CustomSpinLoader>
        {selectedClient && selectedClientWallet && allowedTabs?.length > 0 && (
          <CustomSpinLoader spinning={loading.isBooking}>
            <CreateOrderStyled>
              {cartOpen ? (
                <>
                  {/* <OrderCart cartData={cartData} setCartData={setCartData} /> */}
                </>
              ) : (
                <>
                  <div id="createOrderTopDiv">
                    <CustomTab
                      activeTab={consultType}
                      setActiveTab={setConsultType}
                      tabs={allowedTabs}
                    />
                  </div>
                  {/* <div className="flex flex-col min-[900px]:flex-row gap-2"> */}
                  <div>
                    {/* <div className="w-full min-[900px]:w-[60%] min-[900px]:basis-[60%] min-[900px]:shrink-0"> */}
                    {consultType === "virtual" && (
                      <ConsultationOrder
                        setFormData={setFormData}
                        formData={formData}
                        validationErrors={validationErrors}
                        setValidationErrors={setValidationErrors}
                        selectedClientId={selectedClient?.id}
                        allowedData={allowedData}
                      />
                    )}

                    {["labpackage", "labtest", "radiology"].includes(
                      consultType
                    ) && (
                      <OtherTests
                        setFormData={setFormData}
                        formData={formData}
                        consultType={consultType}
                        validationErrors={validationErrors}
                        setValidationErrors={setValidationErrors}
                        selectedClient={selectedClient}
                      />
                    )}

                    {consultType === "pharmacy" && (
                      <PharmacyOrder
                        setFormData={setFormData}
                        formData={formData}
                        validationErrors={validationErrors}
                        setValidationErrors={setValidationErrors}
                      />
                    )}
                    {consultType === "second_opinion" && (
                      <SecondOpinionOrder
                        formData={formData}
                        setFormData={setFormData}
                        validationErrors={validationErrors}
                        setValidationErrors={setValidationErrors}
                      />
                    )}

                    <OrderFormCommonDetails
                      consultType={consultType}
                      formData={userDetails}
                      setFormData={setUserDetails}
                      validationErrors={validationErrors}
                      setValidationErrors={setValidationErrors}
                    />
                    {/* </div> */}
                    {/* <div className="w-full md:w-[40%]">
                      <OrderDetails
                        consultType={consultType}
                        formData={formData}
                        userDetails={userDetails}
                      />
                    </div> */}
                  </div>
                </>
              )}
            </CreateOrderStyled>
          </CustomSpinLoader>
        )}
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex justify-end gap-2">
          <SecoundaryButton onClick={onCancel}>Cancel</SecoundaryButton>
          {!cartOpen && (
            <PrimaryButton onClick={handleCreateOrder}>
              Create Order
            </PrimaryButton>
          )}
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );
};

export default CreateOrder;
