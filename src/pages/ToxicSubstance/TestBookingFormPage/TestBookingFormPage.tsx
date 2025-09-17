import React, { useEffect, useState } from "react";
import { Calendar, Clock, ChevronDown } from "lucide-react";
import { DatePicker, Select, Spin } from "antd";
import TestBookingFormPageStyled from "./TestBookingFormPage.styled";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SuccessFullModal from "@/components/custom/modal/SucessFullModal/SucessFullModal";
import { useLocation, useNavigate, useParams } from "react-router";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import { useDispatch } from "react-redux";
import { getPackageDetailsAPI } from "@/redux/slices/packages/packagesService";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import { getVendorTimeSlots } from "@/redux/slices/vendor/vendorService";
import Loader from "@/components/loader/loader/Loader";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import {
  createBulkOrderAPI,
  createOrderAPI,
} from "@/redux/slices/orders/orderService";
import AutocompleteField from "@/components/Address/AddressAutoComplete/AddressAutoComplete";

const TestBookingFormPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedEmployees } = location.state || {};
  const { testId } = useParams();
  const dispatch = useDispatch() as any;
  const { linkableId } = useClientLinkableId();

  const [open, setOpen] = useState(false);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [packageDetails, setPackageDetails] = useState<any>(null);
  const [errors, setErrors] = useState({}) as any;
  const [address, setAddress] = useState("") as any;
  const [isLoading, setIsLoading] = useState({
    page: false,
    form: false,
    timeSlots: false,
  });

  console.log("selectedEmployees", selectedEmployees);

  const costPerEmployee = packageDetails?.price?.discounted_price ?? 0;
  const employeeCount = selectedEmployees?.length ?? 0;
  const totalCost = employeeCount * costPerEmployee;

  const TestBookingFormPagebreadcrumbsItems = [
    { name: "HR Dashboard", link: "/dashboard" },
    { name: "Toxic Substance", link: "/toxic-substance" },
    {
      name: `${packageDetails?.service_name}`,
      link: `/toxic-substance/${testId}`,
    },
    { name: "Booking Form", link: `/toxic-substance/${testId}/book` },
  ];

  useEffect(() => {
    if (employeeCount === 0) {
      navigate(`/toxic-substance/${testId}`);
    }
  }, [employeeCount, navigate, testId]);

  useEffect(() => {
    const getPackageDetails = async () => {
      try {
        setIsLoading((pre) => {
          return {
            ...pre,
            page: true,
          };
        });
        const filters = { package_id: testId };
        const result = (await dispatch(getPackageDetailsAPI(filters))) as any;
        if (result?.error) {
          toast.error(result?.error?.message || "unknown error occured");
          return;
        } else {
          setPackageDetails(result?.payload?.data);
        }
      } catch (error) {
        toast.error("unknown error occured");
      } finally {
        setIsLoading((pre) => {
          return {
            ...pre,
            page: false,
          };
        });
      }
    };
    getPackageDetails();
  }, [dispatch, testId]);

  useEffect(() => {
    if (selectedDate) {
      const getTimeSlots = async () => {
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
            setSelectedTimeSlot(null);
            return;
          } else {
            setTimeSlots(result?.payload?.data?.timeslots ?? []);
            setSelectedTimeSlot(null);
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

      getTimeSlots();
    }
  }, [selectedDate, dispatch]);

  const checkValidation = () => {
    let isValid = true;
    const newErrors: { [key: string]: string } = {};

    if (!selectedDate) {
      newErrors.selectedDate = "Please select a date";
      isValid = false;
    }

    if (!selectedTimeSlot) {
      newErrors.selectedTimeSlots = "Please select a time slot";
      isValid = false;
    }

    if (!address || address.trim() === "") {
      newErrors.address = "Please select an address";
      isValid = false;
    }

    setErrors(newErrors);

    Object.values(newErrors).forEach((error) => {
      toast.error(error);
    });

    return { isValid, errors: newErrors };
  };

  const handleBookNow = async () => {
    const { isValid } = checkValidation();
    if (!isValid) {
      return;
    }
    try {
      setIsLoading((pre) => {
        return {
          ...pre,
          form: true,
        };
      });
      const payload = {
        client_id: linkableId,
        package_code: testId,
        doctor_id: null,
        vendor_id: 1,
        selected_date: dayjs(selectedDate).format("YYYY-MM-DD"),
        selected_timeslot: selectedTimeSlot,
        users: selectedEmployees?.map((employee: any) => {
          return {
            user_id: employee?.toString(),
            vendor_id: 1,
            selected_date: dayjs(selectedDate).format("YYYY-MM-DD"),
            selected_timeslot: selectedTimeSlot,
            address: address,
          };
        }),
      };
      const result = await dispatch(createBulkOrderAPI(payload));
      if (result?.error) {
        toast.error(result?.error?.message || "unknown error occured");
        return;
      } else {
        toast.success("Booking requested successfully");
        setOpen(true);
      }
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setIsLoading((pre) => {
        return {
          ...pre,
          form: false,
        };
      });
    }
  };

  return (
    <TestBookingFormPageStyled>
      {isLoading?.page && <Loader />}
      <div className="!px-[39px] !py-[48px] bg-white rounded-lg">
        <CommonBreadCrumbs
          className="!mb-2"
          items={TestBookingFormPagebreadcrumbsItems}
        />
        <p className="text-[28px] font-bold text-gray-900 !mb-[40px]">
          {packageDetails?.service_name}
        </p>
        <p className="text-[22px] font-medium !mb-[40px]">
          {employeeCount} Total Employees selected
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-base mb-2">Select Date*</label>
            <div className="relative">
              <DatePicker
                className="w-full h-12 rounded-md pr-10"
                format="YYYY-MM-DD"
                suffixIcon={null}
                minDate={dayjs()}
                onChange={(date) => {
                  if (date) {
                    setErrors((pre: any) => ({ ...pre, selectedDate: "" }));
                  } else {
                    setErrors((pre: any) => ({
                      ...pre,
                      selectedDate: "Please select a date",
                    }));
                  }
                  setSelectedDate(date);
                }}
                value={selectedDate}
              />
              <span className="absolute right-3 top-3 text-indigo-800 pointer-events-none">
                <Calendar size={20} />
              </span>
            </div>
            <span className="text-red-600">{errors?.selectedDate}</span>
          </div>
          <div>
            <label className="block text-base mb-2">Select Time*</label>
            <div className="relative">
              <Spin spinning={isLoading?.timeSlots}>
                <Select
                  className="w-full rounded-md"
                  placeholder="Select a time slot"
                  suffixIcon={
                    <ChevronDown size={20} className="text-indigo-800" />
                  }
                  options={timeSlots?.map((timeSlot: any) => ({
                    value: timeSlot?.slot,
                    label: timeSlot?.slot,
                  }))}
                  value={selectedTimeSlot}
                  onChange={(value) => {
                    if (value?.length > 0) {
                      setErrors((pre: any) => ({
                        ...pre,
                        selectedTimeSlots: "",
                      }));
                    } else {
                      setErrors((pre: any) => ({
                        ...pre,
                        selectedTimeSlots: "Please select a time slot",
                      }));
                    }
                    setSelectedTimeSlot(value);
                  }}
                />
              </Spin>
            </div>
            <span className="text-red-600">{errors?.selectedTimeSlots}</span>
          </div>
          <div>
            <label className="block text-base mb-2">Enter Site Address*</label>
            <AutocompleteField
              onAddressSelected={(place) => {
                const selectedAddress = place?.formatted_address;
                setAddress(selectedAddress);
                if (selectedAddress && selectedAddress.trim() !== "") {
                  setErrors((prevErrors: any) => ({
                    ...prevErrors,
                    address: "",
                  }));
                } else {
                  setErrors((prevErrors: any) => ({
                    ...prevErrors,
                    address: "Please select an address",
                  }));
                }
              }}
              placeholder="Enter your site address"
              className="h-[54px]"
            />
            <span className="text-red-600">{errors?.address}</span>
          </div>
        </div>
        <div className="flex justify-end !mt-[51.9px] gap-2">
          <SecoundaryButton
            onClick={() => {
              navigate(`/toxic-substance/${testId}`);
            }}
            className="!py-[10px] !px-[20px]"
          >
            Cancel
          </SecoundaryButton>
          <PrimaryButton onClick={handleBookNow} isLoading={isLoading?.form}>
            Book Now
          </PrimaryButton>
        </div>
        <div className="!mt-[76px]  text-center">
          <div className="box-shadow-employee-card bg-gray-50 !px-7 !py-8 rounded-[24px] inline-block">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_20px_1fr]  justify-between items-center">
              <div className="flex items-start flex-col">
                <p className="text-[#252B61] text-[22px] font-medium m-0">
                  Package Selected
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
          </div>
        </div>
      </div>
      <SuccessFullModal
        open={open}
        handleClose={() => setOpen(false)}
        data={{
          title: "Test Booking Requested!",
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
          navigate(`/toxic-substance/${testId}`);
        }}
      />
    </TestBookingFormPageStyled>
  );
};

export default TestBookingFormPage;
