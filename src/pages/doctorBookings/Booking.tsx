import { useCallback, useEffect, useMemo, useState } from "react";
import { BookingStyled } from "./Booking.styled";
import { RiDownloadLine } from "react-icons/ri";
import DownloadForm from "@/components/custom/DownloadForm/DownloadForm";
import {
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router";
import { useDispatch } from "react-redux";
import { getBookingWithFiltersAPI } from "@/redux/slices/dashboard/dashboardService";
import moment from "moment";
import BookingModals from "./bookingModals/BookingModals";
import { toast } from "react-hot-toast";
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
import BookingAction from "./bookingComponents/BookingAction";
import BookingStatus from "./bookingComponents/BookingStatus";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import CreateOrder from "./CreateOrderForm/CreateOrder";
import CommonSearchBox from "@/components/custom/search/CommonSearchBox";
import CustomTable from "@/components/custom/Table/CustomTable/CustomTable";
import ClearFilterButton from "@/components/custom/button/ClearFilterButton";

const Booking = () => {
  const navigate = useNavigate() as any;
  const { linkableId } = useClientLinkableId();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("globalsearch");
  const bookingTab = searchParams.get("tab");
  const dispatch = useDispatch() as any;
  const [bookingList, setBookingList] = useState(null) as any;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { section } = useParams();
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
    let initialSelection;
    if (section) {
      initialSelection =
        filterOptions.find((item: any) => item.type === section) ||
        filterOptions[0];
    } else if (bookingTab) {
      initialSelection =
        filterOptions.find((item: any) => item.type === bookingTab) ||
        filterOptions[0];
    } else {
      initialSelection = filterOptions[0]; // Default to "All Bookings"
    }

    return {
      options: filterOptions,
      // For desktop: single selected filter
      selectedFilter: initialSelection,
      // For mobile: array of selected filter keys
      selectedFilters: [initialSelection.key],
    };
  });

  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {}, [filterState]);

  // Helper function to get current filter key based on device
  const getCurrentFilterKey = () => {
    if (checkIsMobile()) {
      return [
        ...new Set(
          filterState.options
            .filter((item: any) =>
              filterState.selectedFilters.includes(item.type)
            )
            .map((item: any) => item.key)
        ),
      ].join(",");
    } else {
      return filterState.selectedFilter.key;
    }
  };

  // Helper function to get current filter label
  const getCurrentFilterLabel = () => {
    if (checkIsMobile()) {
      if (filterState.selectedFilters.includes("")) {
        return "All Bookings";
      }
      // Return the first selected filter's label for mobile
      const firstSelectedKey = filterState.selectedFilters[0];
      const selectedOption = filterState.options.find(
        (opt) => opt.key === firstSelectedKey
      );
      return selectedOption?.label || "All Bookings";
    } else {
      return filterState.selectedFilter.label;
    }
  };

  useMemo(() => {
    if (searchTerm && searchTerm?.length > 0) {
      const allBookingsOption = filterState.options.find(
        (opt) => opt.key === ""
      );
      if (allBookingsOption) {
        setFilterState((prev) => ({
          ...prev,
          selectedFilter: allBookingsOption,
          selectedFilters: [""],
        }));
      }
    }
  }, [searchTerm]);

  useEffect(() => {
    setFilters((pre) => {
      return {
        ...pre,
        searchText: searchTerm || "",
      };
    });
  }, [searchTerm]);

  const getAllBookings = async () => {
    if (!linkableId) {
      return;
    }
    try {
      setLoading(true);
      const currentFilterKey = getCurrentFilterKey();
      const currentFilterLabel = getCurrentFilterLabel();

      const result = (await dispatch(
        getBookingWithFiltersAPI({
          limited_fields: true,
          filters: {
            from: "hr",
            ...(searchParams.get("clientOrderId")
              ? { clientOrderId: searchParams.get("clientOrderId") }
              : {}),
            page: page,
            count: pageSize,
            status: checkIsMobile()
              ? currentFilterKey
              : filters.status.join(","),
            type: null,
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
          },
        })
      )) as any;

      if (result?.error) {
        toast.error(result?.error?.message || "Unknown Error Occured");
        return;
      }

      setBookingList(result?.payload?.data);
    } catch (error) {
      toast.error("unknown error occured");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (linkableId) {
        getAllBookings();
      }
    }, 300);
    return () => clearTimeout(debounce);
  }, [
    page,
    dispatch,
    filterState.selectedFilter.label,
    filterState.selectedFilters,
    pageSize,
    searchTerm,
    linkableId,
    filters,
  ]);

  const [isFilterOpen, setIsFIlterOpen] = useState(false);

  console.log("filterState", filterState);

  // Combined handler for mobile filters
  const handleMobileFilter = (type: any, filters: any) => {
    if (Number(searchTerm?.length) > 0) {
      navigate("/bookings", { replace: true });
    }

    setFilterState((prev) => {
      let newSelectedFilters;

      if (type === "all") {
        // If "All Bookings" is selected, remove all other filters and only keep "All Bookings"
        newSelectedFilters = ["all"];
      } else {
        // If any other filter is selected
        if (prev.selectedFilters.includes(type)) {
          // Deselect the filter if already selected
          newSelectedFilters = prev.selectedFilters.filter(
            (filterType: any) => filterType !== type
          );

          // If no filters are left after deselecting, default to "All Bookings"
          if (newSelectedFilters.length === 0) {
            newSelectedFilters = ["all"];
          }
        } else {
          // Select the new filter
          // Remove "All Bookings" if it exists, then add the new filter
          newSelectedFilters = prev.selectedFilters.filter(
            (filterType: any) => filterType !== "all"
          );
          newSelectedFilters = [...newSelectedFilters, type];
        }
      }

      // Update desktop selection to match the first mobile selection
      const firstSelectedType = newSelectedFilters[0] || "all";
      const correspondingDesktopFilter =
        prev.options.find((opt) => opt.type === firstSelectedType) ||
        prev.options[0];

      return {
        ...prev,
        selectedFilters: newSelectedFilters,
        selectedFilter: correspondingDesktopFilter,
      };
    });
  };

  //modal logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [selectedModalAction, setSelectedModalAction] = useState("");

  const instituteAction = useCallback((action: string, data: any = {}) => {
    const allowedActions = [
      "reject",
      "approve",
      "booking_details",
      "reschedule",
    ];
    if (allowedActions.includes(action)) {
      setSelectedModalAction(action);
      setModalData(data);
      setIsModalOpen(true);
    }
  }, []);

  const handleModalSoftCLose = () => {
    setIsModalOpen(false);
    setModalData(null);
    setSelectedModalAction("");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalData(null);
    setSelectedModalAction("");
    if (linkableId) {
      getAllBookings();
    }
  };

  const [showCreateAppointmentForm, setShowCreateAppointmentForm] =
    useState(false);
  const [showCreateOrderForm, setShowCreateOrderForm] = useState(false);
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
              <DownloadForm
                sectionType="bookings"
                closeForm={() => setShowDownloadPopup(false)}
              />
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
          <div className="booking-create">
            {/* <button
              className="add-patient"
              onClick={() =>
                navigate("/bookings/addPatient", {
                  state: { name: "Add Patient", noRender: { footer: true } },
                })
              }
            >
              + Employee
            </button> */}
          </div>
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
          {bookingList?.bookings?.length > 0
            ? bookingList?.bookings?.map?.((row: any, index: any) => {
                const date = moment(
                  row?.collection_1_date ?? row?.collection_2_date,
                  "DD/MM/YYYY"
                );
                return (
                  <>
                    <div className="booking-mobile-div-card">
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
                        <BookingAction
                          instituteAction={instituteAction}
                          time={time}
                          data={row}
                        />
                      </div>
                    </div>
                  </>
                );
              })
            : !loading && (
                <p className="my-5  text-center text-red-500">
                  No bookings available
                </p>
              )}
        </div>
        {showCreateOrderForm && (
          <CreateOrder
            visible={showCreateOrderForm}
            reload={getAllBookings}
            onCancel={() => setShowCreateOrderForm(false)}
          />
        )}
        <div className="load-more-btn-div">
          {loading ? (
            <>
              <Spin
                indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
              />
            </>
          ) : (
            <SecoundaryButton
              disabled={bookingList?.totalCount < pageSize || loading}
              onClick={() => setPageSize((pre) => pre + 10)}
            >
              Load More
            </SecoundaryButton>
          )}
        </div>
        <BookingModals
          modalData={modalData}
          selectedAction={selectedModalAction}
          open={isModalOpen}
          handleClose={handleModalClose}
          handleOpen={handleModalOpen}
          handleSoftClose={handleModalSoftCLose}
        />
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
                  options={[
                    "booking_scheduled",
                    "consultation_rescheduled",
                    "open",
                    "payment_pending",
                    "prescription_sent_successfully",
                    "reports_delivered",
                    "completed",
                    "cancelled",
                  ].map((item) => {
                    return {
                      value: item,
                      label: formatStatus(item),
                    };
                  })}
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
            {/* <button
              className="add-patient"
              onClick={() => setShowCreateOrderForm(true)}
            >
              Create Order
            </button> */}

            {/* {showCreateOrderForm && (
              <CreateOrderForm
                visible={showCreateOrderForm}
                reload={getAllBookings}
                onCancel={() => setShowCreateOrderForm(false)}
                refreshBookingList={getAllBookings}
              />
            )} */}
            {showCreateOrderForm && (
              <CreateOrder
                visible={showCreateOrderForm}
                reload={getAllBookings}
                onCancel={() => setShowCreateOrderForm(false)}
              />
            )}

            <button
              className="download-btn"
              onClick={() => setShowDownloadPopup(true)}
            >
              <RiDownloadLine size={20} />
            </button>
            {showDownloadPopup && (
              <DownloadForm
                sectionType="bookings"
                closeForm={() => setShowDownloadPopup(false)}
              />
            )}
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
                    <p
                      onClick={() => handleRowClick(row?.user?.id)}
                      className="name !text-blue-600 cursor-pointer"
                    >
                      {getName(value?.first_name, value?.last_name)}
                    </p>
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
                  return (
                    // <BookingStatus
                    //   data={row}
                    //   time={time}
                    //   instituteAction={instituteAction}
                    // />
                    formatStatus(row?.status) ?? "N/A"
                  );
                },
              },
              {
                label: "Actions",
                key: "Actions",
                dataIndex: "actions",
                render: (_, row) => {
                  return (
                    <BookingAction
                      instituteAction={instituteAction}
                      time={time}
                      data={row}
                    />
                  );
                },
              },
            ]}
            data={bookingList?.bookings || []}
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
            total={bookingList?.totalCount}
          />
        </div>
      </div>

      {/* modal */}
      <BookingModals
        modalData={modalData}
        selectedAction={selectedModalAction}
        open={isModalOpen}
        handleClose={handleModalClose}
        handleOpen={handleModalOpen}
        handleSoftClose={handleModalSoftCLose}
      />
      {/* // */}
    </BookingStyled>
  );
};

export default Booking;
