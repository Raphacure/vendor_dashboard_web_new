import React, { useEffect, useState } from "react";
import { Calendar, Clock, ChevronDown } from "lucide-react";
import { DatePicker, Select } from "antd";
import PreEmploymentBookingFormPageStyled from "./PreEmploymentBookingFormPage.styled";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SuccessFullModal from "@/components/custom/modal/SucessFullModal/SucessFullModal";
import { useLocation, useNavigate } from "react-router";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import Loader from "@/components/loader/loader/Loader";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { getVendorTimeSlots } from "@/redux/slices/vendor/vendorService";
import { getAllPackages } from "@/redux/slices/packages/packagesService";
import {
  createNewOrderAPI,
  createOrderAPI,
} from "@/redux/slices/orders/orderService";
import CustomSpinLoader from "@/components/loader/SpinLoader/CustomSpinLoader";
import { useParams } from "react-router";
import { packageTypes } from "../packages.constants";

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

const PreEmploymentBookingFormPage = () => {
  const { type } = useParams();
  const navigate = useNavigate() as any;
  const location = useLocation() as any;
  const dispatch = useDispatch() as any;
  const { linkableId } = useClientLinkableId();
  const { selectedEmployees } = location.state || {};
  const [open, setOpen] = useState(false);

  const packageType = packageTypes.find((item) => item.type === type);
  if (!packageType) {
    navigate(-1);
  }

  const packageBreadcrumbs = [
    {
      name: "Quick Links",
      link: "/quick-links",
    },
    {
      name: `${packageType?.name}`,
      link: `/package/${packageType?.type}`,
    },
    {
      name: `${packageType?.name} Booking`,
      link: `/package/${packageType?.type}/book`,
    },
  ];

  const [isLoading, setIsLoading] = useState({
    page: false,
    timeSlots: false,
    form: false,
    package: false,
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeSlots, setTimeSlots] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState<null | number>(null);
  const [selectedPackage, setSelectedPackage] = useState(null) as any;
  const [errors, setErrors] = useState({}) as any;
  const [packages, setPackages] = useState([]);

  const selectedPackageDetails = packages.find(
    (pkg: any) => pkg.service_code === selectedPackage?.service_code
  ) as any;
  console.log("selectedPackageDetails", selectedPackageDetails);
  const employeeCount = selectedEmployees?.length ?? 0;
  const costPerEmployee = selectedPackageDetails?.price?.discounted_price ?? 0;
  const totalCost = employeeCount * costPerEmployee;

  useEffect(() => {
    if (employeeCount === 0) {
      toast.error("Please select at least 1 employee");
      navigate(`/package/${packageType?.type}}`);
    }
  }, [employeeCount, navigate, packageType]);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setIsLoading((pre) => {
          return {
            ...pre,
            package: true,
          };
        });

        const response = await dispatch(
          getAllPackages({
            filters: {
              count: 200,
              clientId: linkableId,
              categoryIds: packageType?.category ?? [],
            },
          })
        );
        if (response?.error) {
          toast.error(response?.error?.message || "unknown error occured");
          return;
        }
        setPackages(response?.payload?.data?.data || []);
      } catch (error) {
        toast.error("Failed to fetch packages");
      } finally {
        setIsLoading((pre) => {
          return {
            ...pre,
            package: false,
          };
        });
      }
    };
    fetchPackages();
  }, [dispatch, linkableId]);

  useEffect(() => {
    if (selectedDate) {
      const getTimeSlotsAsync = async () => {
        try {
          setIsLoading((pre) => {
            return {
              ...pre,
              timeSlots: true,
            };
          });
          const result = await dispatch(
            getVendorTimeSlots({
              date: dayjs(selectedDate).format("YYYY-MM-DD"),
              vendorId: 1,
            })
          );
          if (result?.error) {
            toast.error(result?.error?.message || "unknown error occured");
            setTimeSlots([]);
            setSelectedTime(null);
            return;
          } else {
            setTimeSlots(result?.payload?.data?.timeslots ?? []);
            setSelectedTime(null);
          }
        } catch (error) {
          toast.error("unknown error occured");
        } finally {
          setIsLoading((pre) => {
            return {
              ...pre,
              timeSlots: false,
            };
          });
        }
      };
      getTimeSlotsAsync();
    }
  }, [selectedDate, dispatch]);

  const checkValidation = () => {
    let isValid = true;
    const newErrors = {} as any;
    if (!selectedDate) {
      newErrors.selectedDate = "Please select a date";
      isValid = false;
    }
    if (!selectedTime) {
      newErrors.selectedTime = "Please select a time";
      isValid = false;
    }
    if (!selectedVendor) {
      newErrors.selectedVendors = "Please select a vendor";
      isValid = false;
    }
    // if (!selectedSiteId) {
    //   newErrors.selectedSiteId = "Please select a site";
    //   isValid = false;
    // }
    if (!selectedPackage) {
      newErrors.selectedPackage = "Please select a package";
      isValid = false;
    }
    setErrors(newErrors);
    Object.values(newErrors).forEach((error: any) => {
      toast.error(error);
    });
    return { isValid, errors: newErrors };
  };

  const handleCreateOrder = async () => {
    if (!checkValidation().isValid) {
      return;
    }

    const payload = {
      client_id: linkableId,
      package_code: selectedPackageDetails?.service_code,
      doctor_id: null,
      vendor_id: Number(selectedVendor ?? 1) ,
      selected_date: dayjs(selectedDate).format("YYYY-MM-DD"),
      selected_timeslot: selectedTime,
      users: selectedEmployees,
    };

    setIsLoading((pre) => {
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
          navigate("/package/pre-employment")
        }
      }
    } catch (error) {
      toast.error("Unknown error occurred");
    } finally {
      setIsLoading((pre) => {
        return {
          ...pre,
          isBooking: false,
        };
      });
    }
  };

  const handleCancel = () => {
    navigate(-1)
  };

  console.log("timeSlots", timeSlots);

  return (
    <PreEmploymentBookingFormPageStyled>
      {isLoading?.page && <Loader />}
      <div className="!px-[39px] !py-[48.06px] bg-white rounded-lg">
        <CommonBreadCrumbs className="mb-2" items={packageBreadcrumbs} />
        <p className="text-[28px] font-bold text-gray-900 !mb-[40.4px]">
          {packageType?.name}
        </p>
        <p className="text-[22px] font-medium !mb-[39.68px]">
          {employeeCount} Total Employees selected
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 mb-8">
          <div>
            <label className="block text-base mb-2">Select Package*</label>
            <div className="relative">
              <CustomSpinLoader spinning={isLoading?.package}>
                <Select
                  className="w-full h-12 rounded-md"
                  placeholder={"Select a package"}
                  suffixIcon={
                    <ChevronDown size={20} className="text-indigo-800" />
                  }
                  value={selectedPackage?.service_code}
                  onChange={(value, option: any) => {
                    setSelectedPackage(option.packageDetails);
                    setErrors((prev: any) => ({
                      ...prev,
                      selectedPackage: "",
                    }));
                  }}
                  options={packages.map((pkg: any) => ({
                    label: pkg.service_name,
                    value: pkg.service_code,
                    packageDetails:pkg
                  }))}
                  disabled={isLoading?.page}
                />
              </CustomSpinLoader>
            </div>
            <span className="text-red-600">{errors.selectedPackage}</span>
          </div>
          <div>
            <label className="block text-base mb-2">Select Vendor*</label>
            <div className="relative">
              <CustomSpinLoader spinning={isLoading?.package}>
                <Select
                  className="w-full h-12 rounded-md"
                  placeholder={"Select a Vendor"}
                  suffixIcon={
                    <ChevronDown size={20} className="text-indigo-800" />
                  }
                  value={selectedVendor}
                  onChange={(value) => {
                    setSelectedVendor(value);
                    setErrors((prev: any) => ({
                      ...prev,
                      selectedVendors: "",
                    }));
                  }}
                  options={(selectedPackage?.vendors?.length>0 ?selectedPackage?.vendors : [defaultVendor])?.map((vendor: any) => ({
                    label: vendor?.name,
                    value: vendor?.id,
                  }))}
                  disabled={isLoading?.page || !selectedPackage?.service_code}
                />
              </CustomSpinLoader>
            </div>
            <span className="text-red-600">{errors.selectedVendors}</span>
          </div>
          <div>
            <label className="block text-base mb-2">Select Date*</label>
            <div className="relative">
              <DatePicker
                className="w-full h-12 rounded-md pr-10"
                format="YYYY-MM-DD"
                minDate={dayjs()}
                suffixIcon={null}
                value={selectedDate}
                onChange={(date) => {
                  setSelectedDate(date);
                  setErrors((prev: any) => ({ ...prev, selectedDate: "" }));
                }}
              />
              <span className="absolute right-3 top-3 text-indigo-800 pointer-events-none">
                <Calendar size={20} />
              </span>
            </div>
            <span className="text-red-600">{errors.selectedDate}</span>
          </div>
          <div>
            <label className="block text-base mb-2">Select Time*</label>
            <div className="relative">
              <CustomSpinLoader spinning={isLoading?.timeSlots}>
                <Select
                  className="w-full h-12 rounded-md"
                  placeholder={"Select a time"}
                  suffixIcon={
                    <ChevronDown size={20} className="text-indigo-800" />
                  }
                  value={selectedTime}
                  onChange={(value) => {
                    setSelectedTime(value);
                    setErrors((prev: any) => ({ ...prev, selectedTime: "" }));
                  }}
                  options={timeSlots.map((timeSlot: any) => ({
                    label: timeSlot?.slot,
                    value: timeSlot?.slot,
                  }))}
                  disabled={isLoading?.timeSlots}
                />
              </CustomSpinLoader>
              <span className="absolute right-3 top-3 text-indigo-800 pointer-events-none">
                <Clock size={20} />
              </span>
            </div>
            <span className="text-red-600">{errors.selectedTime}</span>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 mb-8">
          <div>
            <label className="block text-base mb-2">Select Site*</label>
            <div className="relative">
              <Select
                className="w-full h-12 rounded-md"
                placeholder="Select a site"
                suffixIcon={
                  <ChevronDown size={20} className="text-indigo-800" />
                }
                value={selectedSiteId}
                onChange={(value) => {
                  setSelectedSiteId(value);
                  setErrors((prev: any) => ({ ...prev, selectedSiteId: "" }));
                }}
                options={[
                  { label: "Site 1", value: "site1" },
                  { label: "Site 2", value: "site2" },
                ]}
              />
            </div>
            <span className="text-red-600">{errors.selectedSiteId}</span>
          </div>
        </div> */}
        <div className="flex justify-end gap-[21px] !mt-[47.7px]">
          <SecoundaryButton
            className="!px-[20px] !py-[10px]"
            onClick={handleCancel}
          >
            Cancel
          </SecoundaryButton>
          <PrimaryButton
            type="submit"
            className="!px-[20px] !py-[10px]"
            isLoading={isLoading?.form}
            onClick={handleCreateOrder}
          >
            Book Now
          </PrimaryButton>
        </div>
        <div className="!mt-[76.95px]  text-center">
          <div className="box-shadow-employee-card bg-gray-50 !px-7 !py-8 rounded-[24px] inline-block">
            {selectedPackageDetails ? (
              <div className="grid grid-cols-1 md:grid-cols-[1fr_20px_1fr]  justify-between items-center">
                <div className="flex items-start flex-col">
                  <p className="text-[#252B61] text-[22px] font-medium m-0">
                    Package "{selectedPackageDetails?.service_name}" Selected
                  </p>
                  <p className="text-lg font-medium m-0 text-[22px]">
                    {costPerEmployee} × {employeeCount} Employees selected
                  </p>
                </div>
                <div className="w-[1px] h-[99.4px] bg-[#000000] "></div>
                <div className="flex items-center gap-2 ">
                  <p className="text-gray-600 text-[22px] m-0">Total cost</p>
                  <p className="text-4xl font-bold text-[#252B61] m-0">
                    ₹{totalCost.toFixed(2)}
                  </p>
                  <p className="text-[#252B61] text-[22px] m-0 ">Estimated</p>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-[#252B61] text-[22px] m-0 ">
                  Please select a package to see the estimated cost.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <SuccessFullModal
        open={open}
        handleClose={() => setOpen(false)}
        data={{
          title: `${packageType?.name} Requested!`,
          message:
            "Our team will review the availability and logistics, and get back to you with the proposed dates and details shortly.",
          whatsNext: [
            <p>
              <b>We’re reviewing</b> your request and checking availability.
            </p>,
            <p>
              <b>Our team will contact</b> you for any details needed.
            </p>,
            <p>
              <b>You’ll get a confirmation</b> once it’s scheduled.
            </p>,
          ],
        }}
        handleBack={() => {
          navigate(`/package/${packageType?.type}}`);
        }}
      />
    </PreEmploymentBookingFormPageStyled>
  );
};

export default PreEmploymentBookingFormPage;
