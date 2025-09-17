import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import Accordion from "@/components/custom/accordium/Accordium";
import {
  getDoctorTimeSlotsAPI,
  resheduleDoctorBookingAPI,
} from "@/redux/slices/doctor/doctorService";
import dayjs from "dayjs";
import React, { useEffect } from "react";
import { DatePicker } from "antd";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ResheduleBookingStyled } from "./ResheduleBooking.styled";
import CustomSpinLoader from "@/components/loader/SpinLoader/CustomSpinLoader";
import { getVendorTimeSlots } from "@/redux/slices/vendor/vendorService";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";

const ResheduleBooking = ({ data, handleClose, handleSoftClose }: any) => {
  const dispatch = useDispatch() as any;

  const [formData, setFormData] = React.useState<any>({
    collection_1_date: dayjs(), // Set initial date to today's date
  });
  const [formError, setFormError] = React.useState<any>({});
  const [timeSlots, setTimeSlots] = React.useState<any>([]);
  const [timeSlotsLoading, setTimeSlotsLoading] =
    React.useState<boolean>(false);

  const handleDateChange = (date: any) => {
    console.log("date", date);
    setFormData((prevData: any) => ({
      ...prevData,
      collection_1_date: date ? date.format("YYYY-MM-DD") : null,
    }));
  };

  //time slots

  useEffect(() => {
    const getTimeSlots = async (type: string) => {
      try {
        setTimeSlotsLoading(true);

        const isDoctor =
          ["virtual_consultation", "opd_consultation"].includes(type) &&
          data?.virtual_type !== "instant";

        const result = (await dispatch(
          isDoctor
            ? getDoctorTimeSlotsAPI({
                id: data?.doctor?.id,
                type: data?.virtual_type ?? "opd",
                date: dayjs(formData?.collection_1_date).format("YYYY-MM-DD"),
              })
            : getVendorTimeSlots({
                date: dayjs(formData?.collection_1_date).format("YYYY-MM-DD"),
                vendorId: 1,
              })
        )) as any;

        if (result?.error) {
          toast.error(result?.error?.message || "Unknown Error Occurred");
          return;
        }

        setTimeSlots(
          isDoctor ? result?.payload : result?.payload?.data?.timeslots
        );
      } catch (error) {
        toast.error("Unknown error occurred");
        console.error(error);
      } finally {
        setTimeSlotsLoading(false);
      }
    };

    getTimeSlots(data?.type);
  }, [formData, dispatch, data?.doctor?.id, data?.virtual_type, data?.type]);

  //

  //submit form

  const submitForm = async () => {
    let error = {};

    // Check if selected date and time are the same as original booking
    if (
      dayjs(formData?.collection_1_date).format("DD/MM/YYYY") ===
        dayjs(data?.collection_1_date, "DD/MM/YYYY").format("DD/MM/YYYY") &&
      formData?.collection_1_slot === data?.collection_1_slot
    ) {
      toast.error(
        "Rescheduled date and time cannot be the same as original booking"
      );
      return;
    }

    if (!formData?.collection_1_slot) {
      error = {
        ...error,
        collection_1_slot: "Please select a time slot",
      };
      setFormError((prev: any) => ({
        ...prev,
        collection_1_slot: "Please select a time slot",
      }));
    }

    if (!formData?.collection_1_date) {
      error = {
        ...error,
        collection_1_date: "Please select a date",
      };
      setFormError((prev: any) => ({
        ...prev,
        collection_1_date: "Please select a date",
      }));
    }

    if (Object.keys(error).length > 0) {
      toast.error("Please select a valid date and time slot");
      return;
    }

    setFormError({});
    const payload = {
      bookingid: data?.id,
      payload: { booking: formData },
    };

    try {
      const result = (await dispatch(
        resheduleDoctorBookingAPI(payload)
      )) as any;
      if (result?.error) {
        toast.error(result?.error?.message || "Unknown Error Occured");
        return;
      }
      if (result?.payload) {
        toast.success("Booking rescheduled successfully");
        setFormData({});
        handleClose();
      }
    } catch (error) {
      toast.error("unknown error occured");
    }
  };

  //

  if (data?.virtual_type === "instant") return null;

  const accordiumData = [
    ...(["virtual_consultation", "opd_consultation"]?.includes(data?.type)
      ? [
          {
            title: `Morning (${
              timeSlots?.[0]?.timeslots?.morning?.length ?? 0
            } slots)`,
            render: (value: any) => {
              if (timeSlots?.[0]?.timeslots?.morning?.length === 0) {
                return (
                  <div>
                    <p>No time slots availabe</p>
                  </div>
                );
              }
              return (
                <div className="time-slot-div">
                  {timeSlots?.[0]?.timeslots?.morning?.map((item: any) => {
                    return (
                      <span
                        key={item}
                        onClick={() =>
                          setFormData((pre: any) => ({
                            ...pre,
                            collection_1_slot: item,
                          }))
                        }
                        className={`time-slot ${
                          formData?.collection_1_slot === item ? "active" : ""
                        }`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              );
            },
          },
          {
            title: `Afternoon (${
              timeSlots?.[0]?.timeslots?.afternoon?.length ?? 0
            } slots)`,
            render: (value: any) => {
              if (timeSlots?.[0]?.timeslots?.afternoon?.length === 0) {
                return (
                  <div>
                    <p>No time slots availabe</p>
                  </div>
                );
              }
              return (
                <div className="time-slot-div">
                  {timeSlots?.[0]?.timeslots?.afternoon?.map((item: any) => {
                    return (
                      <span
                        key={item}
                        onClick={() =>
                          setFormData((pre: any) => ({
                            ...pre,
                            collection_1_slot: item,
                          }))
                        }
                        className={`time-slot ${
                          formData?.collection_1_slot === item ? "active" : ""
                        }`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              );
            },
          },
          {
            title: `Evening (${
              timeSlots?.[0]?.timeslots?.evening?.length ?? 0
            } slots)`,
            render: (value: any) => {
              if (timeSlots?.[0]?.timeslots?.evening?.length === 0) {
                return (
                  <div>
                    <p>No time slots availabe</p>
                  </div>
                );
              }
              return (
                <div className="time-slot-div">
                  {timeSlots?.[0]?.timeslots?.evening?.map((item: any) => {
                    return (
                      <span
                        key={item}
                        onClick={() =>
                          setFormData((pre: any) => ({
                            ...pre,
                            collection_1_slot: item,
                          }))
                        }
                        className={`time-slot ${
                          formData?.collection_1_slot === item ? "active" : ""
                        }`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
              );
            },
          },
        ]
      : [
          {
            title: `Select Time Slot (${timeSlots?.length ?? 0} slots)`,
            render: (value: any) => {
              if (timeSlots?.length === 0) {
                return (
                  <div>
                    <p>No time slots availabe</p>
                  </div>
                );
              }
              return (
                <div className="time-slot-div">
                  {timeSlots?.map((item: any) => {
                    return (
                      <span
                        key={item?.slot}
                        onClick={() =>
                          setFormData((pre: any) => ({
                            ...pre,
                            collection_1_slot: item?.slot,
                          }))
                        }
                        className={`time-slot ${
                          formData?.collection_1_slot === item?.slot
                            ? "active"
                            : ""
                        }`}
                      >
                        {item?.slot}
                      </span>
                    );
                  })}
                </div>
              );
            },
          },
        ]),
  ] as any;
  return (
    <>
      <CustomModal.Body>
        <ResheduleBookingStyled>
          <div className="flex gap-5 pt-6 px-6 !pb-24 lg:!pb-32 min-h-[450px] flex-col lg:flex-row bg-gray-50 rounded-lg p-2">
            <div className="basis-1/2 bg-white p-5 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Reschedule Booking
              </h2>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select New Date
                </label>
                <DatePicker
                  value={
                    formData?.collection_1_date
                      ? dayjs(formData?.collection_1_date)
                      : null
                  }
                  onChange={handleDateChange}
                  format="YYYY-MM-DD"
                  className="w-full rounded-lg border-[1px] border-gray-300 hover:border-blue-500 focus:border-blue-500 shadow-sm py-2 px-3 transition-colors duration-200"
                  style={{ height: "42px" }}
                  allowClear
                  placeholder="Pick a date"
                  disabledDate={(current) =>
                    current && current < dayjs().startOf("day")
                  }
                />
                {formError?.collection_1_date && (
                  <p className="text-red-500 text-sm mt-1">
                    {formError?.collection_1_date}
                  </p>
                )}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
                <h3 className="text-lg font-medium text-gray-800 mb-3 border-b border-blue-100 pb-2">
                  Booking Details
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Booking ID:</span>
                    <span className="font-medium">{data?.id || "N/A"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Previous Date:</span>
                    <span className="font-medium">
                      {data?.collection_1_date
                        ? String(data?.collection_1_date)
                        : "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Previous Time:</span>
                    <span className="font-medium">
                      {data?.collection_1_slot
                        ? String(data?.collection_1_slot)
                        : "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between bg-green-50 p-2 rounded-md mt-3 mb-1">
                    <span className="text-gray-700">Rescheduled Date:</span>
                    <span className="font-medium text-green-700">
                      {formData?.collection_1_date
                        ? dayjs(formData?.collection_1_date).format(
                            "DD/MM/YYYY"
                          )
                        : "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between bg-green-50 p-2 rounded-md">
                    <span className="text-gray-700">Rescheduled Time:</span>
                    <span className="font-medium text-green-700">
                      {formData?.collection_1_slot
                        ? String(formData?.collection_1_slot)
                        : "N/A"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <CustomSpinLoader spinning={timeSlotsLoading}>
              <div className="basis-1/2 bg-white p-5 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Select a Time Slot
                </h2>
                <Accordion data={accordiumData} />
                {formError?.collection_1_slot && (
                  <p className="text-red-500 text-sm mt-1">
                    {formError?.collection_1_slot}
                  </p>
                )}
              </div>
            </CustomSpinLoader>
          </div>
        </ResheduleBookingStyled>
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex justify-end gap-2">
          <SecoundaryButton onClick={() => handleSoftClose()}>
            Cancel
          </SecoundaryButton>
          <PrimaryButton onClick={submitForm}>Reschedule</PrimaryButton>
        </div>
      </CustomModal.Footer>
    </>
  );
};

export default ResheduleBooking;
