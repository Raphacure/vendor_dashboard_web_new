import React, { useEffect, useState } from "react";
import { CreateOrderStyled } from "./CreateOrder.styled";
import { useDispatch } from "react-redux";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import OrderFormCommonDetails from "./components/OrderFormCommonDetails";
import { FaFlask, FaVial, FaXRay, FaLaptopMedical } from "react-icons/fa";
import { PillBottle } from "lucide-react";
import CustomTab from "@/components/custom/Tab/CustomTab";
import ConsultationOrder from "./Tabs/Consultation/ConsultationOrder";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import OrderCart from "./components/OrderCart";
import OtherTests from "./Tabs/OtherTests/OtherTests";
import {
  createDoctorBookingConfirmAPI,
  createHrBookingAPI,
} from "@/redux/slices/doctor/doctorService";
import toast from "react-hot-toast";
import CustomSpinLoader from "@/components/loader/SpinLoader/CustomSpinLoader";
import OrderDetails from "./components/OrderDetails";
import PharmacyOrder from "./Tabs/Pharmacy/PharmacyOrder";
import { addNewClientEmpoyeeAPI } from "@/redux/slices/employees/EmployeeService";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import SecondOpinionOrder from "./Tabs/SecondOpinion/SecondOpinionOrder";

export type ConsultType =
  | "virtual"
  | "labpackage"
  | "labtest"
  | "radiology"
  | "pharmacy"
  | "second_opinion";

interface ConsultationData {
  consultType: "instant" | "call" | "chat" | "video" | "second_opinion" | "opd";
  selectedDoctor: any; // Consider defining a more specific Doctor type
  selectedTimeSlot: string | null;
  selectedDate: string | null; // Or Date object, depending on usage
  selectedSpecialization: any; // Consider defining a more specific Specialization type
  selectedVendor: any;
}

interface TestsData {
  selectedTest: any; // Consider defining a more specific Test type
  selectedVendor: any; // Consider defining a more specific Vendor type
  selectedTimeSlot: string | null;
  selectedDate: string | null; // Or Date object, depending on usage
}

interface PharmacyData {
  selectedMedicines: any[];
}

interface SecondOpinionData {
  selectedDoctor: any | null;
  selectedVendor: any | null;
  selectedCategory: any | null;
  urls: any | null;
  phone: string | null;
  comments: string | null;
  alternate_phone: string | null;
}

export interface FormData {
  consultation: ConsultationData;
  tests: TestsData;
  pharmacy: PharmacyData;
  secondOpinion: SecondOpinionData;
}

export interface UserDetails {
  user?: any; // Consider defining a more specific User type
  payment?: {
    paymentMethod: string;
    paymentType: string;
  };
  address?: {
    fullAddress: string;
    detail?: string | null;
    city: string;
    latitude?: number;
    longitude?: number;
    state: string;
    zip: string;
  };
  userType: "existing" | "new";
}

interface CartDataItem {
  consultType: ConsultType;
  formData: FormData;
  userDetails: UserDetails;
}

export interface CartData {
  virtual: CartDataItem[];
  labpackage: CartDataItem[];
  labtest: CartDataItem[];
  radiology: CartDataItem[];
  pharmacy: CartDataItem[];
}

export interface ValidationErrors {
  user?: {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    age?: string;
    gender?: string;
    dob?: string;
  };
  payment?: {
    paymentMethod?: string;
    paymentType?: string;
  };
  doctor?: string;
  consultType?: string;
  date?: string;
  timeSlot?: string;
  test?: string;
  vendor?: string;
  address?: {
    fullAddress?: string;
    city?: string;
    state?: string;
    zip?: string;
  };
  general?: string;
  secondOpinion?: {
    doctor?: string;
    vendor?: string;
    category?: string;
    reports?: string;
    phone?: string;
    comments?: string;
  };
  pharmacy?: string;
}

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
    value: "radiology",
    label: "Radiology",
    icon: <FaXRay className="tab-icon" />,
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

interface CreateOrderFormProps {
  visible: boolean;
  onCancel: () => void;
  reload?: () => void;
}

const defaultFormData: FormData = {
  consultation: {
    consultType: "instant",
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
  const { linkableId } = useClientLinkableId();
  const dispatch = useDispatch() as any;
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartData, setCartData] = useState<CartData>({
    virtual: [],
    labpackage: [],
    labtest: [],
    radiology: [],
    pharmacy: [],
  });
  const [consultType, setConsultType] = useState<ConsultType>("virtual");
  const [userDetails, setUserDetails] = useState<UserDetails>({
    userType: "existing",
  });
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );

  const [loading, setLoading] = useState({
    isBooking: false,
  });

  useEffect(() => {
    setFormData(defaultFormData);
    setValidationErrors({});
  }, [consultType]);

  const handleResetForm = () => {
    setUserDetails({ userType: "existing" });
    setFormData(defaultFormData);
    setValidationErrors({});
  };

  const handleValidation = (): boolean => {
    const errors: ValidationErrors = {};

    // Common validation for user details
    if (userDetails?.user || !userDetails?.user) {
      if (userDetails?.userType === "new") {
        const userErrors = {} as any;
        if (!userDetails?.user?.firstName) {
          userErrors.firstName = "Please enter first name";
        }
        if (!userDetails?.user?.lastName) {
          userErrors.lastName = "Please enter last name";
        }
        if (!userDetails?.user?.email) {
          userErrors.email = "Please enter email";
        }
        if (!userDetails?.user?.phone) {
          userErrors.phone = "Please enter phone number";
        }
        if (!userDetails?.user?.age || !userDetails?.user?.dob) {
          userErrors.age = "Please enter age";
        }
        if (!userDetails?.user?.gender) {
          userErrors.gender = "Please enter gender";
        }
        if (Object.keys(userErrors).length > 0) {
          errors.user = userErrors;
        }
      } else {
        if (!userDetails?.user?.id) {
          errors.user = { id: "Please select a user" };
        }
      }
    }

    if (userDetails.payment) {
      const paymentErrors = {} as any;
      if (!userDetails.payment.paymentMethod) {
        paymentErrors.paymentMethod = "Please select a payment method";
      }
      if (userDetails?.payment?.paymentMethod !== "raphacure_collects") {
        if (!userDetails.payment.paymentType) {
          paymentErrors.paymentType = "Please select a payment type";
        }
      }
      if (Object.keys(paymentErrors).length > 0) {
        errors.payment = paymentErrors;
      }
    } else {
      errors.payment = {
        paymentMethod: "Please select a payment method",
        paymentType: "Please select a payment type",
      };
    }

    // Validation based on consult type
    switch (consultType) {
      case "virtual":
        if (
          !formData.consultation.selectedDoctor &&
          formData.consultation.consultType !== "second_opinion"
        ) {
          errors.doctor = "Please select a doctor";
        }

        if (!formData.consultation.consultType) {
          errors.consultType = "Please select consultation type";
        }

        // For scheduled consultations, validate date and time
        if (
          ["call", "chat", "video", "opd"].includes(
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

      case "labpackage":
      case "labtest":
      case "radiology":
        if (
          !formData.tests.selectedTest ||
          (Array.isArray(formData.tests.selectedTest) &&
            formData.tests.selectedTest.length === 0)
        ) {
          errors.test = `Please select at least one ${
            consultType === "labpackage"
              ? "package"
              : consultType === "labtest"
              ? "lab test"
              : "radiology test"
          }`;
        }

        if (!formData.tests.selectedVendor) {
          errors.vendor = "Please select a vendor";
        }

        if (!formData.tests.selectedDate) {
          errors.date = "Please select a date";
        }

        if (!formData.tests.selectedTimeSlot) {
          errors.timeSlot = "Please select a time slot";
        }
        break;

      case "pharmacy":
        if (formData?.pharmacy?.selectedMedicines?.length === 0) {
          errors.pharmacy = "Please select at least one medicine";
        }
        break;

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
      if (userDetails?.address) {
        const addressErrors = {} as any;
        if (!userDetails.address.fullAddress) {
          addressErrors.fullAddress = "Please provide full address";
        }
        if (!userDetails.address.city) {
          addressErrors.city = "Please provide city";
        }
        if (!userDetails.address.state) {
          addressErrors.state = "Please provide state";
        }
        if (!userDetails.address.zip) {
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
    let newUserId;

    if (!userDetails.user?.id) {
      try {
        setLoading({
          isBooking: true,
        });
        const data = {
          user: {
            first_name: userDetails.user?.firstName,
            last_name: userDetails.user?.lastName,
            email: userDetails.user?.email,
            phone: userDetails.user?.phone,
            age: userDetails.user?.age,
            gender: userDetails.user?.gender,
            dob: userDetails.user?.dob,
            address: {
              address: userDetails.address?.fullAddress,
              city: userDetails.address?.city,
              state: userDetails.address?.state,
              zip: userDetails.address?.zip,
            },
          },
        };
        const res = await dispatch(
          addNewClientEmpoyeeAPI({ data: data, clientId: linkableId })
        );
        if (res.error) {
          toast.error(res.error.message || "unkown error");
          return;
        } else {
          toast.success("User created successfully");
          newUserId = res?.payload?.data?.createdUser?.id;
        }
      } catch (error) {
        toast.error("Something went wrong");
        return;
      } finally {
        setLoading({
          isBooking: false,
        });
      }
    }

    let payload: any;
    switch (consultType) {
      case "virtual": {
        if (
          ["call", "chat", "video"].includes(formData.consultation.consultType)
        ) {
          payload = {
            virtual_type: formData.consultation.consultType,
            useWallet: true,
            doctor_id: parseInt(formData.consultation.selectedDoctor?.id),
            user_id: userDetails.user?.id,
            collection_1_date: formData.consultation.selectedDate,
            collection_1_slot: formData.consultation.selectedTimeSlot,
            collection_2_date: null,
            collection_2_slot: null,
            attachment_ids: null,
            section_key: "doctor",
          };
        } else if (formData.consultation.consultType === "instant") {
          payload = {
            virtual_type: "instant",
            useWallet: true,
            doctor_id: parseInt(formData.consultation.selectedDoctor?.id),
            user_id: userDetails.user?.id,
            collection_1_date: null,
            collection_1_slot: null,
            collection_2_date: null,
            collection_2_slot: null,
            attachment_ids: null,
            section_key: "doctor",
          };
        } else if (formData.consultation.consultType === "opd") {
          payload = {
            virtual_type: null,
            useWallet: true,
            doctor_id: parseInt(formData.consultation.selectedDoctor?.id),
            vendor_id: parseInt(formData.consultation.selectedVendor.id),
            user_id: userDetails.user?.id,
            collection_1_date: formData.consultation.selectedDate,
            collection_1_slot: formData.consultation.selectedTimeSlot,
            collection_2_date: null,
            collection_2_slot: null,
            attachment_ids: null,
            section_key: "doctor",
          };
        }
        break;
      }
      case "labpackage": {
        payload = {
          virtual_type: null,
          package_code:
            formData.tests.selectedTest.map(
              (item: any) => item.service_code
            )?.[0] || "",
          useWallet: true,
          vendor_id: formData.tests.selectedVendor?.id || 1,
          user_id: userDetails.user?.id,
          collection_1_date: formData.tests.selectedDate,
          collection_1_slot: formData.tests.selectedTimeSlot,
          attachment_ids: null,
          section_key: "labtest",
          instant_booking: null,
        };
        break;
      }
      case "labtest": {
        payload = {
          virtual_type: null,
          test_codes:
            formData.tests.selectedTest.map((item: any) => item.service_code) ||
            [],
          useWallet: true,
          vendor_id: formData.tests.selectedVendor?.id || 1,
          user_id: userDetails.user?.id,
          collection_1_date: formData.tests.selectedDate,
          collection_1_slot: formData.tests.selectedTimeSlot,
          attachment_ids: null,
          section_key: "labtest",
          instant_booking: null,
        };
        break;
      }
      case "radiology": {
        payload = {
          virtual_type: null,
          test_codes:
            formData.tests.selectedTest.map((item: any) => item.service_code) ||
            [],
          useWallet: true,
          vendor_id: formData.tests.selectedVendor?.id || 1,
          user_id: userDetails.user?.id,
          collection_1_date: formData.tests.selectedDate,
          collection_1_slot: formData.tests.selectedTimeSlot,
          attachment_ids: null,
          section_key: "ctmri",
        };
        break;
      }
      case "pharmacy": {
        payload = {
          user_id: userDetails.user?.id,
          useWallet: true,
          collection_1_date: null,
          collection_1_slot: null,
          medicines:
            formData.pharmacy.selectedMedicines?.map((medicine: any) => {
              return {
                service_code: medicine?.item?.service_code,
                count: medicine?.quantity,
              };
            }) || [],
          attachment_ids: null,
          section_key: "pharmacy",
        };
        break;
      }
      case "second_opinion": {
        payload = {
          user_id: userDetails.user?.id,
          section_key: "doctor",
          isSecondOpinion: true,
          report_urls: Array.isArray(formData.secondOpinion?.urls)
            ? formData.secondOpinion?.urls
            : [],
          specialization_id: formData.secondOpinion?.selectedVendor?.id
            ? formData.secondOpinion?.selectedCategory
            : null,
          useWallet: true,
          extra_info: {
            alternate_person: formData.secondOpinion?.alternate_phone,
            contact_number: formData.secondOpinion?.phone,
            comments: formData.secondOpinion?.comments,
          },
          ...(formData.secondOpinion?.selectedDoctor
            ? {
                doctor_id: formData.secondOpinion?.selectedDoctor?.id,
              }
            : {
                vendor_id: formData.secondOpinion?.selectedVendor?.id,
              }),
        };
        break;
      }
    }

    if (!payload) {
      toast.error("Invalid data found");
      return;
    }

    payload.user_id = userDetails.user?.id || newUserId;

    try {
      setLoading((pre) => {
        return {
          ...pre,
          isBooking: true,
        };
      });
      if (payload?.user_id) {
        const orderResponse = await dispatch(createHrBookingAPI(payload));
        if (orderResponse.error) {
          toast.error(orderResponse.error.message || "Unknown error occurred");
          return;
        } else {
          const bookingResponse = await dispatch(
            createDoctorBookingConfirmAPI({
              user_id: payload.user_id,
              payment_note: userDetails?.payment?.paymentMethod,
            })
          );
          if (bookingResponse.error) {
            toast.error(
              bookingResponse.error.message || "Unknown error occurred"
            );
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

  return (
    <CustomModal
      title={cartOpen ? "Cart" : "Create New Order"}
      open={visible}
      handleClose={onCancel}
      headerClassName="px-2"
    >
      <CustomModal.Body>
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
                    tabs={consultOptions}
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
