import type { BadgeProps, CalendarMode, CalendarProps } from "antd";
import {
  Calendar,
  Spin,
  Select,
  Button
} from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getBookingWithFiltersAPI } from "@/redux/slices/dashboard/dashboardService";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import DateRender from "./components/RenderCells/DateRender";
import {
  LoadingOutlined
} from "@ant-design/icons";
import { CalendarStyled } from "./Calendar.style";
import CustomToolTip from "@/components/custom/ToolTip/CustomToolTip";
import BookingDetailsModal from "../doctorBookings/bookingModals/modals/bookingDetailsModal/BookingDetailsModal";
import { getAllSelfLeaveRequestsAPI } from "@/redux/slices/attendance/attendanceService";
import { formatStatus } from "@/lib/common";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";

const CalendarPage = () => {
  const dispatch = useDispatch() as any;
  const { linkableId } = useClientLinkableId();

  const [selectedValue, setSelectedValue] = useState(() => dayjs(new Date()));
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs(new Date()));
  const [mode, setMode] = useState<CalendarMode>("month");
  //get bookings

  //booking details modal
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [isBookingDetailsModalOpen, setIsBookingDetailsModalOpen] =
    useState(false);

  const handleBookingDetailsModalClose = () => {
    setIsBookingDetailsModalOpen(false);
  };

  //

  //tool tip

  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const [toolTipData, setToolTipData] = useState<any>(null);

  const handleShowMore = (data: any) => {
    setIsToolTipOpen(true);
    setToolTipData(data);
  };

  const handleToolTipClose = () => {
    setIsToolTipOpen(false);
    setToolTipData(null);
  };

  //

  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState<Map<string, any>>(new Map());
  const [leaveRequests, setLeaveRequests] = useState<Map<string, any>>(
    new Map()
  );

  console.log("selectedValue", bookings);

  const getAllBookings = async (from: string, to: string) => {
    try {
      setLoading(true);
      const leavePromise = dispatch(
        getAllSelfLeaveRequestsAPI({
          start_date: from,
          end_date: to,
          status: "approved",
        })
      ) as any;
      const bookingPromise = dispatch(
        getBookingWithFiltersAPI({
          filters: {
            from: "hr",
            status: "booking_scheduled,consultation_rescheduled,open,completed",
            // type: null,
            // id: String(linkableId),
            count: 10000,
            dateRange: {
              dateType: "scheduled",
              from: from,
              to: to,
            },
          },
        })
      ) as any;
      const [leaveResult, bookingResult] = (await Promise.allSettled([
        leavePromise,
        bookingPromise,
      ])) as any;

      if (bookingResult?.value?.error) {
        toast.error(
          bookingResult?.value?.error?.message || "Unknown Error Occured"
        );
        return;
      }
      if (mode === "month") {
        const dataMap = new Map();
        bookingResult?.value?.payload?.data?.bookings.forEach(
          (booking: any) => {
            if (booking?.collection_1_date) {
              const dateKey = dayjs(booking?.collection_1_date).format("DD/MM/YYYY");
              if (dataMap.has(dateKey)) {
                dataMap.set(dateKey, [
                  ...dataMap.get(dateKey),
                  booking,
                ]);
              } else {
                dataMap.set(dateKey, [booking]);
              }
            }
          }
        );
        setBookings(dataMap);

        const leavesMap = leaveResult?.value?.payload?.reduce(
          (acc: any, curr: any) => {
            curr?.leave_time?.forEach((leave: any) => {
              if (
                acc.has(dayjs(leave?.date, "YYYY-MM-DD").format("DD/MM/YYYY"))
              ) {
                acc.set(dayjs(leave?.date, "YYYY-MM-DD").format("DD/MM/YYYY"), [
                  ...acc.get(
                    dayjs(leave?.date, "YYYY-MM-DD").format("DD/MM/YYYY")
                  ),
                  {
                    type: leave?.type,
                    reason: curr?.reason,
                    leaveType: curr?.type,
                  },
                ]);
              } else {
                acc.set(dayjs(leave?.date, "YYYY-MM-DD").format("DD/MM/YYYY"), [
                  {
                    type: leave?.type,
                    reason: curr?.reason,
                    leaveType: curr?.type,
                  },
                ]);
              }
            });
            return acc;
          },
          new Map()
        );
        setLeaveRequests(leavesMap);
      } else if (mode === "year") {
        const dataMap = new Map();
        bookingResult?.value?.payload?.data?.bookings.forEach(
          (booking: any) => {
            if (booking?.collection_1_date) {
              console.log("collection_1_date", booking?.collection_1_date);
              const dateKey = dayjs(booking?.collection_1_date).format("MM/YYYY");
              console.log(
                "format",
                dateKey
              );
              if (dataMap.has(dateKey)) {
                dataMap.set(dateKey, [
                  ...dataMap.get(dateKey),
                  booking,
                ]);
              } else {
                dataMap.set(dateKey, [booking]);
              }
            }
          }
        );
        setBookings(dataMap);
        setBookings(dataMap);
        const leavesMap = leaveResult?.value?.payload?.reduce(
          (acc: any, curr: any) => {
            curr?.leave_time?.forEach((leave: any) => {
              if (acc.has(dayjs(leave?.date, "YYYY-MM-DD").format("MM/YYYY"))) {
                acc.set(dayjs(leave?.date, "YYYY-MM-DD").format("MM/YYYY"), [
                  ...acc.get(
                    dayjs(leave?.date, "YYYY-MM-DD").format("MM/YYYY")
                  ),
                  {
                    type: leave?.type,
                    reason: curr?.reason,
                    leaveType: curr?.type,
                  },
                ]);
              } else {
                acc.set(dayjs(leave?.date, "YYYY-MM-DD").format("MM/YYYY"), [
                  leave,
                ]);
              }
            });
            return acc;
          },
          new Map()
        );
        setLeaveRequests(leavesMap);
      }
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setLoading(false);
    }
  };

  console.log("bookings", bookings);
  console.log("leaveRequests", leaveRequests);

  useEffect(() => {
    if (linkableId) {
      if (mode === "month") {
        const from = selectedValue.startOf("month").format("YYYY-MM-DD");
        const to = selectedValue.endOf("month").format("YYYY-MM-DD");
        getAllBookings(from, to);
      } else if (mode === "year") {
        const from = selectedValue.startOf("year").format("YYYY-MM-DD");
        const to = selectedValue.endOf("year").format("YYYY-MM-DD");
        getAllBookings(from, to);
      }
    }
  }, [dispatch, linkableId, selectedValue.toISOString(), mode]);

  //

  const onSelect = (newValue: Dayjs, info: any) => {
    if (mode === "month") {
      if (selectedValue.format("MM/YYYY") !== newValue.format("MM/YYYY")) {
        setSelectedValue(newValue);
      }
      setSelectedDate(newValue);
    } else if (mode === "year") {
      setSelectedValue(newValue);
      setSelectedDate(newValue);
      setMode("month");
    }
    console.log("info", info);
  };

  const handleBookingDetailsModalOpen = (booking: any) => {
    setSelectedBooking(booking);
    setIsBookingDetailsModalOpen(true);
  };

  const monthCellRender = (value: Dayjs) => {
    const dateBookings = bookings.get(value.format("MM/YYYY"));
    const dateLeaves = leaveRequests.get(value.format("MM/YYYY"));
    return (
      <DateRender
        handleShowMore={handleShowMore}
        bookings={dateBookings}
        current={value}
        loading={loading}
        leaves={dateLeaves}
        mode={mode}
        handleBookingDetailsModalOpen={handleBookingDetailsModalOpen}
      />
    );
  };

  const dateCellRender = (value: Dayjs) => {
    const dateBookings = bookings.get(value.format("DD/MM/YYYY"));
    const dateLeaves = leaveRequests.get(value.format("DD/MM/YYYY"));
    return (
      <DateRender
        handleShowMore={handleShowMore}
        bookings={dateBookings}
        current={value}
        leaves={dateLeaves}
        loading={loading}
        mode={mode}
        handleBookingDetailsModalOpen={handleBookingDetailsModalOpen}
      />
    );
  };

  const customHeaderRender = ({ value, type, onChange, onTypeChange }: any) => {
    const start = 0;
    const end = 12;
    const monthOptions = [];

    let current = value.clone();
    const localeData = value.localeData();
    const months = [];
    for (let i = 0; i < 12; i++) {
      current = current.month(i);
      months.push(localeData.monthsShort(current));
    }

    for (let i = start; i < end; i++) {
      monthOptions.push(
        <Select.Option key={i} value={i} className="month-item">
          {months[i]}
        </Select.Option>
      );
    }

    const year = value.year();
    const month = value.month();
    const options = [];
    for (let i = year - 10; i < year + 10; i += 1) {
      options.push(
        <Select.Option key={i} value={i} className="year-item">
          {i}
        </Select.Option>
      );
    }
    return (
      <div className="!px-[22px] rounded-t-[20px] !py-[14px] header-style !mb-[22px]">
        <div className="flex flex-col min-[675px]:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-[46px] w-full">
            <SecoundaryButton
              className="!border-[1px]"
              onClick={() => {
                const today = dayjs();
                setSelectedValue(today);
                setSelectedDate(today);
                if (mode === "year") {
                  setMode("month");
                }
              }}
            >
              Today
            </SecoundaryButton>
            <div className="flex gap-6 items-center">
              <Button
                className="!border-none shadow-none"
                icon={<ChevronLeft />}
                onClick={() => {
                  const newValue = value.clone();
                  if (type === "month") {
                    onChange(newValue.month(newValue.month() - 1));
                  } else {
                    onChange(newValue.year(newValue.year() - 1));
                  }
                }}
              />
              <p className="font-medium m-0 text-[Inter] text-[20px] mb-1">
                {value.format(type === "month" ? "MMMM YYYY" : "YYYY")}
              </p>
              <Button
                className="!border-none shadow-none "
                icon={<ChevronRight />}
                onClick={() => {
                  const newValue = value.clone();
                  if (type === "month") {
                    onChange(newValue.month(newValue.month() + 1));
                  } else {
                    onChange(newValue.year(newValue.year() + 1));
                  }
                }}
              />
            </div>
          </div>
          <div className="max-[675px]:w-full">
            <Select
              value={type}
              onChange={(newType) => {
                onTypeChange(newType);
                setMode(newType as CalendarMode);
              }}
              className="calender-mode-select"
            >
              <Select.Option value="month">Month</Select.Option>
              <Select.Option value="year">Year</Select.Option>
            </Select>
          </div>
        </div>
      </div>
    );
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };

  //handle changes

  const handlePanelChange = (_: Dayjs, newMode: CalendarMode) => {
    setMode(newMode);
  };

  //

  console.log("toolTipData", toolTipData);

  return (
    <CalendarStyled>
      <div className="p-2 sm:px-4 sm:py-3">
        <div className="flex justify-between items-center">
          <h4 className="font-bold">My Calendar</h4>
        </div>
        <div className="flex gap-3 max-[1100px]:flex-col">
          <div className="flex-grow-0">
            <div className="bg-white rounded-lg p-2 calendar-container">
              <CustomToolTip
                handleClose={handleToolTipClose}
                isOpen={isToolTipOpen}
                title={toolTipData?.title}
                position={toolTipData?.position}
              >
                <div className="p-2">
                  {(() => {
                    switch (toolTipData?.type) {
                      case "booking":
                        return (
                          <div>
                            <p>
                              Total {toolTipData?.data?.bookings?.length}{" "}
                              Consultations
                            </p>
                            <div className="flex gap-2 flex-col max-h-[140px] overflow-y-auto">
                              {toolTipData?.data?.bookings?.map(
                                (booking: any, index: number) => {
                                  // Added index for key fallback if id is missing
                                  return (
                                    <div
                                      key={booking?.id || index} // Added key prop
                                      className="flex items-center gap-2 border-b border-gray-200 pb-2"
                                    >
                                      <div
                                        className="bg-[#92bdf6] px-2 rounded-lg text-sm cursor-pointer"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleToolTipClose();
                                          handleBookingDetailsModalOpen(
                                            booking
                                          );
                                        }}
                                      >
                                        <div className="font-semibold capitalize">
                                          {`${
                                            booking?.user?.first_name ?? ""
                                          } ${booking?.user?.last_name ?? ""}`}
                                        </div>
                                      </div>
                                      <div className="text-[.8rem] font-semibold">
                                        {booking?.collection_1_slot ?? ""}
                                      </div>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        );
                      case "leave":
                        return (
                          <>
                            <div>
                              <p>
                                Total {toolTipData?.data?.leaves?.length} Leaves
                              </p>
                              <div className="flex gap-2 flex-col max-h-[140px] overflow-y-auto">
                                {toolTipData?.data?.leaves?.map(
                                  (leave: any, index: number) => {
                                    // Added index for key fallback if id is missing
                                    return (
                                      <div
                                        key={index} // Added key prop
                                        className="flex items-center gap-2 border-b border-gray-200 pb-2"
                                      >
                                        <div className="bg-[#92bdf6] px-2 rounded-lg text-sm cursor-pointer">
                                          <div className="font-semibold capitalize">
                                            {`${formatStatus(leave?.type)} ${
                                              leave?.reason
                                                ? "(" +
                                                  formatStatus(leave?.type) +
                                                  ")"
                                                : ""
                                            }`}
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          </>
                        );
                      default:
                        return null; // Return null or default content if type doesn't match
                    }
                  })()}
                </div>
              </CustomToolTip>
              <Spin
                spinning={loading}
                tip="Loading"
                indicator={<LoadingOutlined spin />}
                size="large"
              >
                <Calendar
                  mode={mode as CalendarMode}
                  value={selectedValue}
                  onSelect={onSelect}
                  onPanelChange={handlePanelChange}
                  fullCellRender={cellRender}
                  headerRender={customHeaderRender}
                />
              </Spin>
              {isBookingDetailsModalOpen && (
                <BookingDetailsModal
                  handleClose={handleBookingDetailsModalClose}
                  modalData={selectedBooking}
                  handleSoftClose={handleBookingDetailsModalClose}
                />
              )}
            </div>
          </div>
          {/* <div className="basis-1/4 flex-grow-0">
            <CalendarSessions />
          </div> */}
        </div>
      </div>
    </CalendarStyled>
  );
};

export default CalendarPage;
