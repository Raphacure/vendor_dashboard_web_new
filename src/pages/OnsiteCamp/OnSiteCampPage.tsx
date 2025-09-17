import React, { useCallback, useEffect, useState } from "react";
import OnSiteCampPageStyled from "./OnSiteCampPage.styled";
import { useNavigate } from "react-router";
import CommonBreadCrumbs from "@/components/custom/BreadCrumb/CommonBreadCrumb";
import { onSiteCampBreadcrumbsItems } from "@/constants/breadcrumbs.constants";
import { useDispatch, useSelector } from "react-redux";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { getAllCampBookingsAPI } from "@/redux/slices/campBookings/campBookingsService";
import toast from "react-hot-toast";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import { Button, DatePicker, Select } from "antd";
import { formatStatus } from "@/lib/common";
import dayjs from "dayjs";
import {
  getCampBkTimeslotsAPI,
  rescheduleCampBkAPI,
  updateCampBkStatusAPI,
} from "@/redux/slices/bookingScreen/bookingScreenService";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import { Calendar } from "antd/lib";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import { getAllClientsRestApi } from "@/redux/slices/Clients/ClientsService";
import { RootState } from "@/redux/store";
import useDownloadCsv from "@/hooks/useDownloadCsv";
import PrimaryButton from "@/components/custom/button/PrimaryButton";

const OnSiteCampPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [campDates, setCampDates] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<any>(null);
  const [timeSlots, setTimeSlots] = useState<any[]>([]);
  const [searchText, setSearchText] = useState("");
  const [dateRange, setDateRange] = useState<{
    start_date: string;
    end_date: string;
  } | null>(null);
  const [status, setStatus] = useState<{
    availableStatus: { value: string; label: string }[];
    selectedStatus: { value: string; label: string };
  }>({
    availableStatus: [
      { value: "", label: "All" },
      { value: "open", label: "Open" },
      { value: "completed", label: "Completed" },
      { value: "reports_delivered", label: "Reports Delivered" },
    ],
    selectedStatus: { value: "", label: "All" },
  });
  const [groupedTimeSlots, setGroupedTimeSlots] = useState<any>({});
  const [timeSlotError, setTimeSlotError] = useState<string | null>(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const { allClients, loading: clientsLoading } = useSelector(
    (state: RootState) => state?.clients
  );
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);

  const { linkableId } = useClientLinkableId();
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
    null
  );
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 20,
    total: 0,
  });
  const [campBookings, setCampBookings] = useState([]);

  const getAllClientsApi = useCallback(() => {
    const body: any = {
      page: 0,
      count: 100000,
    };
    dispatch(getAllClientsRestApi(body));
  }, [dispatch]);

  useEffect(() => {
    getAllClientsApi();
  }, [getAllClientsApi]);

  const getAllCampBookings = async () => {
    try {
      setIsLoading(true);
      const filters = {
        from: "hr",
        ...(selectedClientId
          ? { client_id: selectedClientId }
          : { client_id: linkableId }),
        ...(searchText ? { searchText: searchText } : {}),
        page: pagination.page,
        limit: pagination.pageSize,
        ...(status.selectedStatus.value
          ? { status: status.selectedStatus.value }
          : {}),
        ...(dateRange
          ? { start_date: dateRange.start_date, end_date: dateRange.end_date }
          : {}),
      };
      const response = (await dispatch(
        getAllCampBookingsAPI({ filters: filters })
      )) as any;
      if (response.error) {
        toast.error(response.error.message || "Unknown error occurred");
        return;
      } else {
        setCampBookings(response.payload?.data?.data);
        setPagination((pre) => {
          return {
            ...pre,
            total: response.payload?.data?.total,
          };
        });
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!linkableId) return;

    // Create debounced search handler
    const debounceTimer = setTimeout(() => {
      getAllCampBookings();
    }, 300);

    // Cleanup timeout on unmount or when dependencies change
    return () => clearTimeout(debounceTimer);
  }, [
    linkableId,
    dispatch,
    status.selectedStatus.value,
    searchText,
    pagination.page,
    pagination.pageSize,
    dateRange,
    selectedClientId,
  ]);

  const getTimeSlots = async () => {
    const payload = {
      client_id: selectedBooking?.branch_location?.client_id,
      branch_location_id: selectedBooking?.branch_location?.id,
      scheduled_date: dayjs(selectedDate).format("YYYY-MM-DD"),
    };
    const res: any = await dispatch(getCampBkTimeslotsAPI(payload));
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
      return;
    }
    console.log("allSlots : ", res?.payload?.data?.slots);
    const allSlots = res?.payload?.data?.slots || [];

    setGroupedTimeSlots({
      all: allSlots,
    });
  };

  useEffect(() => {
    if (selectedDate && selectedBooking) {
      getTimeSlots();
    }
  }, [selectedDate, selectedBooking]);

  const handleStatusUpdate = async (
    currentBookingId: string,
    newStatus: string
  ) => {
    const updatePayload = {
      id: currentBookingId,
      payload: {
        status: newStatus,
      },
    };

    console.log("updatePayload : ", updatePayload);

    if (!newStatus || !currentBookingId) return;
    const res = (await dispatch(updateCampBkStatusAPI(updatePayload))) as any;

    if (res?.error) {
      toast.error(res?.error?.message || "Failed to update status");
    } else {
      toast.success("Booking status updated successfully!");
      getAllCampBookings(); // Refresh data
    }
  };

  const handleScheduleUpdate = async () => {
    if (!selectedDate) {
      setTimeSlotError("Please select a date.");
      return;
    }

    const updatePayload = {
      id: selectedBooking?.id,
      payload: {
        scheduled_date: dayjs(selectedDate).format("YYYY-MM-DD"),
        scheduled_slot: selectedTimeSlot,
      },
    };
    console.log("updatePayload for reschedule : ", updatePayload);

    const res = (await dispatch(rescheduleCampBkAPI(updatePayload))) as any; // Assuming updateCampBkStatusAPI can handle reschedule

    if (res?.error) {
      toast.error(res?.error?.message || "Failed to reschedule booking");
    } else {
      toast.success("Booking rescheduled successfully!");
      setShowScheduleModal(false);
      setSelectedDate(null);
      setSelectedTimeSlot(null);
      setTimeSlots([]);
      setSelectedBooking(null);
      setTimeSlotError(null);
      getAllCampBookings(); // Refresh data
    }
  };

  const { downloadCsv } = useDownloadCsv({ sectionName: "camp" });

  const handlePageChange = (page: number, pageSize: number) => {
    setPagination((pre) => {
      return {
        ...pre,
        page,
        pageSize,
      };
    });
  };

  const columns = [
    {
      label: "Booking ID",
      dataIndex: "id",
      key: "id",
    },
    {
      label: "Client Name",
      dataIndex: ["client", "name"],
      key: "client_name",
      render: (text: string, record: any) => (
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {record.client?.logo_url ? (
              <img
                src={record?.client?.logo_url}
                alt={text}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span style={{ fontSize: "16px" }}>
                {text?.charAt(0)?.toUpperCase()}
              </span>
            )}
          </div>
          <span>{text}</span>
        </div>
      ),
    },
    {
      label: "Location",
      dataIndex: ["branch_location", "location_name"],
      key: "location",
      render: (text: string) => (
        // @ts-ignore
        <div style={{ maxWidth: "300px", textWrap: "auto" }}>{text}</div>
      ),
    },
    {
      label: "User Name",
      dataIndex: ["user"],
      key: "user_name",
      render: (user: any) => (
        <span>{`${user?.first_name || ""} ${user?.last_name || ""}`}</span>
      ),
    },
    {
      label: "SPOC Name",
      dataIndex: ["branch_location", "spoc_name"],
      key: "spoc_name",
    },
    {
      label: "Client Name",
      dataIndex: ["client", "name"],
      key: "client_name",
    },
    {
      label: "Status Update",
      key: "action",
      render: (_: any, record: any) => (
        <Select
          style={{ width: "fit-content" }}
          placeholder="Update Status"
          showSearch
          defaultValue={record?.status}
          filterOption={(input: any, option: any) =>
            (option?.label ?? "")?.toLowerCase()?.includes(input?.toLowerCase())
          }
          onChange={(value) => {
            handleStatusUpdate(record.id, value);
          }}
          options={[
            { value: "open", label: "Open" },
            { value: "completed", label: "Completed" },
            { value: "reports_delivered", label: "Reports Delivered" },
          ]}
        />
      ),
    },
    {
      label: "Scheduled Date",
      dataIndex: "collection_1_date",
      key: "collection_1_date",
      render: (date: any, record: any) => {
        return (
          <span
            className="text-[#1890ff] cursor-pointer"
            onClick={() => {
              const dates = record?.branch_location?.camp_dates;
              console.log("camp_dates : ", dates);
              if (!dates?.length) {
                toast.error("Camp Dates not available");
                return;
              }

              setSelectedBookingId(record?.id);
              setSelectedBooking(record);
              setCampDates(dates || []);
              setShowScheduleModal(true);
              // Convert date format if needed
              if (date && typeof date === "string" && date.includes("/")) {
                // Convert from DD/MM/YYYY to YYYY-MM-DD
                const parts = date.split("/");
                if (parts.length === 3) {
                  setSelectedDate(`${parts[2]}-${parts[1]}-${parts[0]}`);
                } else {
                  setSelectedDate(date);
                }
              } else {
                setSelectedDate(date);
              }
              setSelectedTimeSlot(record.scheduled_slot);
            }}
          >
            {date ? dayjs(date, "DD/MM/YYYY").format("DD/MM/YYYY") : "N/A"}
          </span>
        );
      },
    },
    {
      label: "Scheduled Slot",
      dataIndex: "collection_1_slot",
      key: "collection_1_slot",
      render: (slot: any, record: any) => (
        <span
          className="text-[#1890ff] cursor-pointer"
          onClick={() => {
            const dates = record?.branch_location?.camp_dates;
            console.log("camp_dates : ", dates);
            if (!dates?.length) {
              toast.error("Camp Dates not available");
              return;
            }

            setSelectedBookingId(record?.id);
            setSelectedBooking(record);
            setCampDates(dates || []);
            setShowScheduleModal(true);
            // Convert date format if needed
            const date = record.collection_1_date;
            if (date && typeof date === "string" && date.includes("/")) {
              // Convert from DD/MM/YYYY to YYYY-MM-DD
              const parts = date.split("/");
              if (parts.length === 3) {
                setSelectedDate(`${parts[2]}-${parts[1]}-${parts[0]}`);
              } else {
                setSelectedDate(date);
              }
            } else {
              setSelectedDate(record.collection_1_date);
            }
            setSelectedTimeSlot(slot);
          }}
        >
          {slot || "N/A"}
        </span>
      ),
    },
    {
      label: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: string) => formatStatus(text) || "N/A",
    },
    {
      label: "Package Code",
      dataIndex: "package_code",
      key: "package_code",
    },
  ];

  return (
    <OnSiteCampPageStyled>
      <CommonBreadCrumbs className="mb-2" items={onSiteCampBreadcrumbsItems} />
      <div className="header">
        <h1 className="!text-[28px] !font-semibold">On site camp</h1>
        <div className="header-actions flex-wrap">
          <div>
            <Select
              value={selectedClientId}
              onChange={setSelectedClientId}
              style={{ width: "200px" }}
              loading={clientsLoading}
              placeholder="Select a Sub-client"
              allowClear
              showSearch
            >
              {allClients?.data?.clients?.map((client: any) => (
                <Select.Option key={client.id} value={client.id}>
                  {client.name}
                </Select.Option>
              ))}
            </Select>
          </div>
          <div className="date-range-picker">
            <DatePicker.RangePicker
              style={{ width: "300px" }}
              format="DD/MM/YYYY"
              placeholder={["Start Date", "End Date"]}
              onChange={(dates) => {
                if (dates && dates[0] && dates[1]) {
                  setDateRange({
                    start_date: dates[0].format("YYYY-MM-DD"),
                    end_date: dates[1].format("YYYY-MM-DD"),
                  });
                } else {
                  setDateRange(null);
                }
              }}
            />
          </div>
          <CommonSearchBox
            onSearch={(value) => {
              setSearchText(value);
            }}
            searchText={searchText}
            placeHolder="Search Camp Bookings"
          />
          <div className="sort-dropdown">
            <div className="select-wrapper">
              <Select
                defaultValue={status.selectedStatus.value}
                style={{ width: 120 }}
                onChange={(value) => {
                  setStatus((prev) => ({
                    ...prev,
                    selectedStatus:
                      prev.availableStatus.find((s) => s.value === value) ||
                      prev.selectedStatus,
                  }));
                }}
                options={status.availableStatus}
              />
            </div>
          </div>
          <SecoundaryButton
            onClick={() =>
              downloadCsv({
                body: {
                  filters: {
                    type: "camp_booking",
                    ...(selectedClientId
                      ? { clientId: selectedClientId }
                      : { clientId: linkableId }),
                  },
                },
              })
            }
          >
            Download All Bookings
          </SecoundaryButton>
          {/* <PrimaryButton
            className="!px-[20px] !py-[10px]"
            onClick={() => navigate("/onsite-camp/request-new-camp")}
          >
            Request New
          </PrimaryButton> */}
        </div>
      </div>
      <div>
        <CustomTable
          columns={columns}
          data={campBookings}
          showingName=""
          isLoading={isLoading}
          onPageChange={handlePageChange}
          page={pagination.page}
          pageSize={pagination.pageSize}
          pagination={true}
          total={pagination.total}
        />
        <CustomModal
          title={
            <div>
              ORDER ID - {selectedBookingId}
              <div className="text-base font-normal mt-1">
                Current:{" "}
                {selectedDate
                  ? dayjs(selectedDate).format("DD/MM/YYYY")
                  : "Not Set"}
                {selectedTimeSlot ? ` ${selectedTimeSlot}` : ""}
              </div>
            </div>
          }
          open={showScheduleModal}
          handleClose={() => {
            setShowScheduleModal(false);
            setSelectedDate(null);
            setSelectedTimeSlot(null);
            setTimeSlots([]);
            setSelectedBooking(null);
            setTimeSlotError(null);
          }}
          width="1000px"
        >
          <CustomModal.Body>
            <div className="flex flex-col sm:flex-row gap-5">
              {/* Calendar Section */}
              <div className="flex-1">
                <Calendar
                  fullscreen={false}
                  onChange={(date: any) =>
                    setSelectedDate(date.format("YYYY-MM-DD"))
                  }
                  defaultValue={
                    selectedDate
                      ? selectedDate.includes("/")
                        ? dayjs(selectedDate.split("/").reverse().join("-"))
                        : dayjs(selectedDate)
                      : dayjs()
                  }
                  disabledDate={(current: any) => {
                    const currentFormatted = current.format(
                      "YYYY-MM-DD[T]00:00:00.000[Z]"
                    );
                    return !campDates.includes(currentFormatted);
                  }}
                />
              </div>

              {/* Time Slots Section */}
              <div className="flex-2 max-h-[400px] overflow-y-auto">
                <h5>All Time Slot</h5>
                {timeSlotError ? (
                  <div className="p-4 text-[#f5222d] text-center mt-5 border border-[#ffccc7] rounded bg-[#fff2f0]">
                    {timeSlotError}
                  </div>
                ) : (
                  <div>
                    {Object.keys(groupedTimeSlots).map((type) => (
                      <div key={type}>
                        {groupedTimeSlots[type]?.length > 0 && (
                          <>
                            <h4 className="mt-5 mb-2 capitalize">{type}</h4>
                            <div className="grid grid-cols-3 gap-2 mt-2">
                              {groupedTimeSlots[type].map((slot: any) => (
                                <div
                                  key={slot?.time}
                                  onClick={() =>
                                    setSelectedTimeSlot(slot?.time)
                                  }
                                  className={`p-2 border border-gray-300 rounded cursor-pointer text-center text-sm transition-all ${
                                    selectedTimeSlot === slot?.time
                                      ? "bg-[#1890ff] text-white"
                                      : "bg-white text-black"
                                  }`}
                                >
                                  <div>{slot?.time}</div>
                                  <div
                                    className={`text-xs ${
                                      selectedTimeSlot === slot?.time
                                        ? "text-white"
                                        : "text-gray-500"
                                    }`}
                                  >
                                    Available Slots: {slot?.availableSlots}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CustomModal.Body>
          <CustomModal.Footer>
            <div className="flex justify-end gap-2">
              <SecoundaryButton onClick={() => setShowScheduleModal(false)}>
                Cancel
              </SecoundaryButton>
              <PrimaryButton
                onClick={handleScheduleUpdate}
                disabled={!selectedDate}
              >
                Update
              </PrimaryButton>
            </div>
          </CustomModal.Footer>
        </CustomModal>
      </div>
    </OnSiteCampPageStyled>
  );
};

export default OnSiteCampPage;
