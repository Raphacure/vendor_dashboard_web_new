import { useCallback, useEffect, useMemo, useState } from "react";
import { BookingStyled } from "./Booking.styled";
import { RiDownloadLine } from "react-icons/ri";
import DownloadForm from "@/components/custom/DownloadForm/DownloadForm";
import { useNavigate, useParams, useSearchParams } from "react-router";
import moment from "moment";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import { LoadingOutlined } from "@ant-design/icons";
import { DatePicker, Select, Spin } from "antd";
import {
  checkIsMobile,
  formatStatus,
  getName,
  parseAllDateFormats,
} from "../../lib/common";
import MobileFilter from "@/components/custom/filter/MobileFilter";
import BookingAction from "./bookingComponents/components/BookingAction";
import BookingStatus from "./bookingComponents/components/BookingStatus";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import ClearFilterButton from "@/components/custom/button/ClearFilterButton";
import useVendorLinkableId from "@/hooks/auth/useVendorLinkableId";
import { useGetBookings } from "@/hooks/useQuerys/bookings/bookingsQuery";
import { useDebounce } from "@uidotdev/usehooks";
import ViewBookingDetails from "./bookingComponents/modals/ViewBookingDetails";
import CustomModalRenderer from "@/components/custom/ModalRenderer/CustomModalRenderer";
import useCustomModalRenderer from "@/components/custom/ModalRenderer/useCustomModalRenderer";
import BookingCustomerDetails from "./bookingComponents/components/BookingCustomerDetails";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";

const Booking = () => {
  const navigate = useNavigate();
  const { linkableId } = useVendorLinkableId();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("globalsearch");
  const bookingTab = searchParams.get("tab");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { section } = useParams();

  const {
    activeTypes,
    push: pushModal,
    pop: popModal,
    data: modalData,
    setData: setModalData,
  } = useCustomModalRenderer(["booking_details", "customerDetails"]);
  const [filters, setFilters] = useState<{
    dateRange: { start_date: string; end_date: string } | null;
    searchText: string;
    status: string[];
  }>({
    dateRange: null,
    searchText: "",
    status: [],
  });

  // Combined filter state that works for both mobile and desktop
  const [filterState, setFilterState] = useState(() => {
    const filterOptions = [
      {
        label: "All Bookings",
        key: "",
        data: null,
        classes: "all-label",
        type: "all",
      },
      {
        label: "Upcoming",
        key: "booking_scheduled,consultation_rescheduled",
        data: null,
        classes: "upcoming-label",
        type: "upcoming",
      },
      {
        label: "Pending",
        key: "open,payment_pending",
        data: null,
        classes: "open-label",
        type: "pending",
      },
      {
        label: "Prescription Sent",
        key: "prescription_sent_successfully",
        data: null,
        classes: "prescription-label",
        type: "prescription_sent",
      },
      {
        label: "Reports Delivered",
        key: "reports_delivered",
        data: null,
        classes: "reports-label",
        type: "reports_delivered",
      },
      {
        label: "Completed",
        key: "completed",
        data: null,
        classes: "completed-label",
        type: "completed",
      },
      {
        label: "Rejected",
        key: "cancelled",
        data: null,
        classes: "rejected-label",
        type: "rejected",
      },
    ];

    // Determine initial selection based on URL params
    let initialSelection = filterOptions[0]; // Default to "All Bookings"
    if (section) {
      initialSelection =
        filterOptions.find((item) => item.type === section) || filterOptions[0];
    } else if (bookingTab) {
      initialSelection =
        filterOptions.find((item) => item.type === bookingTab) ||
        filterOptions[0];
    }

    return {
      options: filterOptions,
      // For desktop: single selected filter
      selectedFilter: initialSelection,
      // For mobile: array of selected filter keys
      selectedFilters: [initialSelection.type], // FIX: Use .type for consistency
    };
  });

  const [time] = useState(new Date());

  // Helper function to get current filter key based on device
  const getCurrentFilterKey = () => {
    if (checkIsMobile()) {
      return [
        ...new Set(
          filterState.options
            .filter((item) => filterState.selectedFilters.includes(item.type))
            .map((item) => item.key)
        ),
      ].join(",");
    }
    return filterState.selectedFilter.key;
  };

  // Helper function to get current filter label
  const getCurrentFilterLabel = () => {
    if (checkIsMobile()) {
      if (filterState.selectedFilters.includes("all")) {
        return "All Bookings";
      }
      // Return the first selected filter's label for mobile
      const firstSelectedType = filterState.selectedFilters[0];
      const selectedOption = filterState.options.find(
        (opt) => opt.type === firstSelectedType
      );
      return selectedOption?.label || "All Bookings";
    }
    return filterState.selectedFilter.label;
  };

  useEffect(() => {
    if (searchTerm) {
      const allBookingsOption = filterState.options.find(
        (opt) => opt.type === "all"
      );
      if (allBookingsOption) {
        setFilterState((prev) => ({
          ...prev,
          selectedFilter: allBookingsOption,
          selectedFilters: ["all"],
        }));
      }
    }
  }, [searchTerm, filterState.options]);

  useEffect(() => {
    setFilters((pre) => ({
      ...pre,
      searchText: searchTerm || "",
    }));
  }, [searchTerm]);

  const currentFilterKey = getCurrentFilterKey();
  const currentFilterLabel = getCurrentFilterLabel();

  const memorizedFilters = useMemo(() => {
    return {
      from: "vendor",
      page,
      pageSize,
      status: checkIsMobile() ? currentFilterKey : filters.status.join(","),
      id: String(linkableId),
      searchText:
        searchTerm && currentFilterLabel === "All Bookings"
          ? searchTerm
          : filters.searchText,
      ...(filters.dateRange
        ? {
            dateRange: {
              dateType: "scheduled",
              from: filters.dateRange.start_date,
              to: filters.dateRange.end_date,
            },
          }
        : {}),
    };
  }, [
    page,
    pageSize,
    currentFilterKey,
    filters,
    linkableId,
    searchTerm,
    currentFilterLabel,
  ]);

  const bookingFilters = useDebounce(memorizedFilters, 600);

  // OPTIMIZATION: Use isPending from react-query and alias it to 'loading' for the JSX
  const { data, isPending: loading } = useGetBookings(bookingFilters);

  const [isFilterOpen, setIsFIlterOpen] = useState(false);

  // OPTIMIZATION: Refactored for clarity and removed unused 'filters' parameter
  const handleMobileFilter = (type: string) => {
    if (searchTerm) {
      navigate("/bookings", { replace: true });
    }

    setFilterState((prev) => {
      const { selectedFilters, options } = prev;
      let newSelectedFilters;

      if (type === "all") {
        newSelectedFilters = ["all"];
      } else {
        const wasAllSelected = selectedFilters.includes("all");
        const isCurrentlySelected = selectedFilters.includes(type);

        if (wasAllSelected) {
          newSelectedFilters = [type];
        } else if (isCurrentlySelected) {
          newSelectedFilters = selectedFilters.filter((t) => t !== type);
        } else {
          newSelectedFilters = [...selectedFilters, type];
        }
      }

      if (newSelectedFilters.length === 0) {
        newSelectedFilters = ["all"];
      }

      const firstSelectedType = newSelectedFilters[0] || "all";
      const correspondingDesktopFilter =
        options.find((opt) => opt.type === firstSelectedType) || options[0];

      return {
        ...prev,
        selectedFilters: newSelectedFilters,
        selectedFilter: correspondingDesktopFilter,
      };
    });
  };

  //modal logic - keeping for backward compatibility with other modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData_legacy, setModalData_legacy] = useState<any>(null);
  const [selectedModalAction, setSelectedModalAction] = useState("");

  const instituteAction = useCallback(
    (action: string, data: any = {}) => {
      const allowedActions = [
        "reject",
        "approve",
        "booking_details",
        "reschedule",
      ];
      if (allowedActions.includes(action)) {
        if (action === "booking_details") {
          // Use CustomModalRenderer for booking details
          setModalData({ selectedbooking: data });
          pushModal("booking_details");
        } else {
          // Keep existing logic for other actions
          setSelectedModalAction(action);
          setModalData_legacy(data);
          setIsModalOpen(true);
        }
      }
    },
    [pushModal, setModalData]
  );

  const [showDownloadPopup, setShowDownloadPopup] = useState(false);

  const handleRowClick = (id: string) => {
    navigate("/employees/detail/" + id);
  };

  if (checkIsMobile()) {
    return (
      <BookingStyled>
        <div className="booking-header-div flex flex-row justify-between items-center gap-2">
          <div className="flex gap-2 items-center flex-wrap">
            <CommonSearchBox
              onSearch={(value) => {
                setFilters((pre) => {
                  return {
                    ...pre,
                    searchText: value,
                  };
                });
              }}
              className="w-[100px]"
              searchText={filters?.searchText}
              placeHolder="Search Bookings"
            />
            <div className="date-range-picker">
              <DatePicker.RangePicker
                className="w-[200px]"
                format="DD/MM/YYYY"
                placeholder={["Start Date", "End Date"]}
                onChange={(dates) => {
                  if (dates && dates[0] && dates[1]) {
                    setFilters((prevFilters) => ({
                      ...prevFilters,
                      dateRange: {
                        start_date: dates?.[0]?.format("YYYY-MM-DD") ?? "",
                        end_date: dates?.[1]?.format("YYYY-MM-DD") ?? "",
                      },
                    }));
                  } else {
                    setFilters((prevFilters) => ({
                      ...prevFilters,
                      dateRange: null,
                    }));
                  }
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button
              className="download-btn !ml-0"
              onClick={() => setShowDownloadPopup(true)}
            >
              <RiDownloadLine size={20} />
            </button>
            {showDownloadPopup && (
              <DownloadForm sectionType="bookings" sessionName="bookings" />
            )}
            <button
              className="filter"
              onClick={() => setIsFIlterOpen((pre) => !pre)}
            >
              <span>
                <img
                  src={
                    isFilterOpen
                      ? "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741429137408.png"
                      : "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741244655183.png"
                  }
                  className="filter"
                  alt="filter-icon"
                />
              </span>
              Filters
            </button>
          </div>
          <div className="booking-create"></div>
        </div>
        {isFilterOpen && (
          <MobileFilter
            filters={filterState.options.map((item) => ({
              key: item.type,
              label: item.label,
            }))}
            selectedFilters={filterState.selectedFilters}
            handleChange={handleMobileFilter}
          />
        )}
        <div className="booking-mobile-body-div">
          {(data?.data?.bookings?.length ?? 0) > 0
            ? data?.data?.bookings?.map?.((row: any) => {
                const date = moment(
                  row?.collection_1_date ?? row?.collection_2_date,
                  "DD/MM/YYYY"
                );
                return (
                  <div className="booking-mobile-div-card" key={row.id}>
                    <div className="flex justify-between gap-[2px]">
                      <div className="booking-mobile-card-details">
                        <div className="calender-box-mobile">
                          <span className="date-number-span">
                            {date?.isValid() ? date.date() : "N/A"}
                          </span>
                          <span className="date-month-name">
                            {date?.isValid()
                              ? date.format("MMM").toUpperCase()
                              : "N/A"}
                          </span>
                          <span className="booking-type">
                            {date?.isValid()
                              ? date.format("YYYY").toUpperCase()
                              : "N/A"}
                          </span>
                        </div>
                        <div className="booking-details-mobile">
                          <p
                            title={`${row?.user?.first_name ?? ""} ${
                              row?.user?.last_name ?? ""
                            }`}
                            onClick={() =>
                              instituteAction("booking_details", row)
                            }
                            className="booking-details-name cursor-pointer"
                          >{`${row?.user?.first_name ?? ""} ${
                            row?.user?.last_name ?? ""
                          }`}</p>
                          <p
                            title={
                              row?.collection_1_slot ??
                              row?.collection_2_slot ??
                              "N/A"
                            }
                            className="booking-details-slot"
                          >
                            {row?.collection_1_slot ??
                              row?.collection_2_slot ??
                              "N/A"}
                          </p>
                          <p
                            title={formatStatus(row?.type ?? "N/A")}
                            className="booking-details-type"
                          >
                            {formatStatus(row?.type ?? "N/A")}
                          </p>
                        </div>
                      </div>
                      <div className="status-mobile-div">
                        <BookingStatus
                          data={row}
                          time={time}
                          instituteAction={instituteAction}
                        />
                      </div>
                    </div>
                    <div>
                      <hr className="my-1" />
                      <BookingAction data={row} />
                    </div>
                  </div>
                );
              })
            : !loading && (
                <p className="my-5  text-center text-red-500">
                  No bookings available
                </p>
              )}
        </div>
        <div className="load-more-btn-div">
          {loading ? (
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
            />
          ) : (
            <SecoundaryButton
              disabled={(data?.data?.totalCount ?? 0) < pageSize || loading}
              onClick={() => setPageSize((pre) => pre + 10)}
            >
              Load More
            </SecoundaryButton>
          )}
        </div>
      </BookingStyled>
    );
  }

  return (
    <BookingStyled>
      <div className="booking-container">
        <div className="heading">
          <h2>My Bookings</h2>
          <p>
            My Bookings &gt; {filterState.selectedFilter.label}{" "}
            {Number(searchTerm?.length) > 0 ? <>&gt; {searchTerm}</> : ""}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 items-end lg:items-center justify-between mb-[15.5px]">
          <div className="flex gap-2 items-center">
            <CommonSearchBox
              onSearch={(value) => {
                setFilters((pre) => {
                  return {
                    ...pre,
                    searchText: value,
                  };
                });
              }}
              className="w-[100px]"
              searchText={filters?.searchText}
              placeHolder="Search Bookings"
            />
            <div className="sort-dropdown">
              <div className="select-wrapper">
                <Select
                  maxTagCount={1}
                  value={filters.status}
                  mode="multiple"
                  maxTagPlaceholder={() => "..."}
                  popupMatchSelectWidth={false}
                  placeholder="Status"
                  className="min-w-[100px]"
                  onChange={(_, options: any) => {
                    setFilters((prev) => ({
                      ...prev,
                      status: options?.map?.((item: any) => item.value),
                    }));
                  }}
                  allowClear={true}
                  options={[
                    { value: "open", label: "Open" },
                    { value: "reports_delivered", label: "Reports Delivered" },
                    { value: "completed", label: "Completed" },
                    { value: "booking_scheduled", label: "Booking Scheduled" },
                    {
                      value: "awaiting_lab_confirmation",
                      label: "Awaiting Lab Confirmation",
                    },
                    { value: "cancelled", label: "Cancelled" },
                    {
                      value: "sample_collected",
                      label: "Sample Collected",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="date-range-picker">
              <DatePicker.RangePicker
                className="w-[200px]"
                format="DD/MM/YYYY"
                placeholder={["Start Date", "End Date"]}
                onChange={(dates) => {
                  if (dates && dates[0] && dates[1]) {
                    setFilters((prevFilters) => ({
                      ...prevFilters,
                      dateRange: {
                        start_date: dates?.[0]?.format("YYYY-MM-DD") ?? "",
                        end_date: dates?.[1]?.format("YYYY-MM-DD") ?? "",
                      },
                    }));
                  } else {
                    setFilters((prevFilters) => ({
                      ...prevFilters,
                      dateRange: null,
                    }));
                  }
                }}
              />
            </div>
            {searchParams.get("clientOrderId") && (
              <div>
                <ClearFilterButton
                  onClearButton={() => {
                    setSearchParams((pre) => {
                      pre.delete("clientOrderId");
                      return pre;
                    });
                  }}
                >
                  Order Id:{searchParams.get("clientOrderId")}
                </ClearFilterButton>
              </div>
            )}
          </div>
          <div className="pd-container">
            <DownloadForm sectionType="bookings" sessionName="bookings" />
          </div>
        </div>
        <div>
          <CustomTable
            columns={[
              {
                label: "Serial No",
                key: "Serial No",
                dataIndex: "id",
                render: (value, row) => {
                  return (
                    <p
                      onClick={() => instituteAction("booking_details", row)}
                      className="text-center m-0 !text-blue-600 cursor-pointer"
                    >
                      {value}
                    </p>
                  );
                },
              },
              {
                label: "Name",
                key: "Name",
                dataIndex: "user",
                render: (value, row) => {
                  return (
                    <span
                      onClick={() =>
                        pushModal("customerDetails", { selectedCustomer: row })
                      }
                      className="name !text-blue-600 cursor-pointer"
                    >
                      {getName(value?.first_name, value?.last_name)}
                    </span>
                  );
                },
              },
              {
                label: "Age & Sex",
                key: "Age & Sex",
                dataIndex: "user",
                render: (value) => {
                  return (
                    <p className="m-0">{`${value?.age ?? "N/A"}/${
                      value?.gender?.[0]?.toUpperCase() ?? "N/A"
                    }`}</p>
                  );
                },
              },
              {
                label: "Date & Time",
                key: "Date & Time",
                dataIndex: "collection_1_date",
                render: (value, row) => {
                  return (
                    <p className="m-0">
                      {parseAllDateFormats(value ?? row?.collection_2_date)}
                      {" / "}
                      {row?.collection_1_slot ??
                        row?.collection_w_slot ??
                        "N/A"}
                    </p>
                  );
                },
              },
              {
                label: "Visit Type",
                key: "Visit Type",
                dataIndex: "type",
                render: (value) => {
                  return <p className="m-0">{formatStatus(value) ?? "N/A"}</p>;
                },
              },
              {
                label: "Status",
                key: "Status",
                dataIndex: "type",
                render: (_, row) => {
                  return formatStatus(row?.status) ?? "N/A";
                },
              },
              {
                label: "Actions",
                key: "Actions",
                dataIndex: "actions",
                render: (_, row) => {
                  return <BookingAction data={row} />;
                },
              },
            ]}
            data={data?.data?.bookings || []}
            showingName={
              searchParams.get("clientOrderId")
                ? `bookings for order:${searchParams.get("clientOrderId")}`
                : "bookings"
            }
            isLoading={loading}
            page={page}
            pageSize={pageSize}
            pagination={true}
            onPageChange={(page, pageSize) => {
              setPage(page);
              setPageSize(pageSize);
            }}
            total={data?.data?.totalCount ?? 0}
          />
        </div>
      </div>
      <CustomModalRenderer
        modals={[
          {
            type: "booking_details",
            component: (
              <ViewBookingDetails
                open={true}
                handleModalClose={() => popModal("booking_details")}
                selectedbooking={modalData?.selectedbooking}
              />
            ),
          },
          {
            type: "customerDetails",
            component: (
              <CustomModal
                title="Customer Details"
                open={true}
                handleClose={() => popModal("customerDetails")}
              >
                <CustomModal.Body>
                  <BookingCustomerDetails
                    bookingDetails={modalData?.selectedCustomer}
                  />
                </CustomModal.Body>
              </CustomModal>
            ),
          },
        ]}
        activeTypes={activeTypes}
        data={modalData}
      />
    </BookingStyled>
  );
};

export default Booking;
