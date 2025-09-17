import { useCallback, useEffect, useState } from "react";
import { DashboardMobileStyled, DashboardStyled } from "./Dashboard.styled";
import { IoStarSharp } from "react-icons/io5";
import AddPatientForm from "../DoctorPatient/AddPatientForm/AddPatientForm";
import Orange from "../../assets/icons/orange.svg?react";
import Purple from "../../assets/icons/purple.svg?react";
import Red from "../../assets/icons/red.svg?react";
import Doc from "../../assets/icons/docicon.svg?react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { FaPencil } from "react-icons/fa6";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookingWithFiltersAPI,
  getDashboardInfo,
  updateBookingStatusAPI,
} from "../../redux/slices/dashboard/dashboardService";
import PiCharts from "@/components/Charts/PiChart/PiCharts";
import moment from "moment";
import { RootState } from "../../redux/store";
import { toast } from "react-hot-toast";
import { Skeleton, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { AiOutlineClose } from "react-icons/ai";
import SecoundaryButton from "../../components/custom/button/SecoundaryButton";
import { checkIsMobile, formatDate, getName } from "@/lib/common";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { formatStatus } from "@/lib/common";
import BookingModals from "../doctorBookings/bookingModals/BookingModals";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import Community from "../Community/Community";
import useClientDetails from "@/hooks/auth/useClientDetails";
const antIcon = <LoadingOutlined style={{ fontSize: 34 }} spin />;
const antIcon2 = <LoadingOutlined style={{ fontSize: 20 }} spin />;

const navBox = [
  {
    name: "Quick Links",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1743505603326.png",
    nav: "/quick-links",
    state: { name: "Quick Links" },
  },
  {
    name: "Orders",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741258207943.png",
    nav: "/orders",
    state: { name: "Orders" },
  },
  {
    name: "Bookings",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741258207943.png",
    nav: "/bookings",
    state: { name: "Bookings" },
  },
  // {
  //   name: "Create Appoitments",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741258241441.png",
  //   nav: "/bookings/addAppointment",
  //   state: { name: "Create Appointment", noRender: { footer: true } },
  // },
  // {
  //   name: "Prescription",
  //   img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741258478811.png",
  //   nav: "/prescription",
  //   state: { name: "Prescription" },
  // },
  {
    name: "My Calender",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741240520356.png",
    nav: "/calendar",
    state: { name: "My Calender" },
  },
  {
    name: "My Employee",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741258597115.png",
    nav: "/employees",
    state: { name: "My Employee" },
  },
];

const favList = [
  {
    name: "Clients",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419622833.png",
    nav: "/MyClients",
    state: { name: "My Clients" },
  },
  {
    name: "Community",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1750419792542.png",
    nav: "/communities",
    state: { name: "Community" },
  },
];

const Dashboard = () => {
  const dispatch = useDispatch() as any;
  const navigate = useNavigate() as any;
  const { clientDetails, linkableId: clientId } = useClientDetails();
  const [openedSlot, setOpenedSlot] = useState<
    "COMPLETED" | "UPCOMING" | "CANCELED" | null
  >("UPCOMING");
  const [isEdit, setIsEdit] = useState(false);
  const [editSelected, setEditSelected] = useState([]) as any;
  const [dates, setDates] = useState(generateDates(moment()));
  const [calenderBookingsLoading, setCalenderBookingsLoading] = useState(false);
  const [recentBookings, setRecentBookings] = useState({}) as any;
  const [recentBookingsLoading, setRecentBookingsLoading] = useState(true);
  const [doctorDetails, setDoctorDetails] = useState({}) as any;
  const [doctorDetailsLoading, setDoctorDetailsLoading] = useState(false);

  const {
    data: dashboardInfo,
    error: dashboardInfoError,
    loading: dashboardInfoLoading,
  } = useSelector((store: RootState) => store.dashboard.dashboardInfo);

  // modal

  const [modalData, setModalData] = useState(null);
  const [selectedModalAction, setSelectedModalAction] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalData(null);
    setSelectedModalAction("");
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalSoftCLose = () => {
    setIsModalOpen(false);
    setModalData(null);
    setSelectedModalAction("");
  };

  const instituteAction = useCallback((action: string, data: any = {}) => {
    const allowedActions = ["booking_details"];
    if (allowedActions.includes(action)) {
      setSelectedModalAction(action);
      setModalData(data);
      setIsModalOpen(true);
    }
  }, []);

  //

  //dates

  function generateDates(centerDate: any) {
    return [
      centerDate.clone().subtract(2, "days"),
      centerDate.clone().subtract(1, "day"),
      centerDate.clone(),
      centerDate.clone().add(1, "day"),
      centerDate.clone().add(2, "days"),
    ];
  }

  const incrementDate = () => {
    setDates((prevDates) =>
      generateDates(prevDates[2].clone().add(1, "month"))
    );
  };

  const decrementDate = () => {
    setDates((prevDates) =>
      generateDates(prevDates[2].clone().subtract(1, "month"))
    );
  };

  //

  // calender bookings

  const [calenderBookings, setCalenderBookings] = useState({}) as any;

  const { user } = useSelector(
    (ReduxState: RootState) => ReduxState.auth
  );

  const getAllBookings = async () => {
    if (!clientId) {
      toast.error("Client Id not found");
      return;
    }
    try {
      // setCalenderBookingsLoading(true);

      const filters = {
        from: "hr",
        id: clientId,
        type: null,
        dateRange: {
          dateType: "scheduled",
          from: dates[2]?.format("YYYY-MM-DD"),
          to: dates[2]?.format("YYYY-MM-DD"),
        },
      };

      // Execute all API calls in parallel
      const [
        bookingScheduledResult,
        bookingCancelledResult,
        bookingCompletedResult,
      ] = (await Promise.allSettled([
        dispatch(
          getBookingWithFiltersAPI({
            filters: { ...filters, status: "booking_scheduled" },
          })
        ),
        dispatch(
          getBookingWithFiltersAPI({
            filters: { ...filters, status: "cancelled" },
          })
        ),
        dispatch(
          getBookingWithFiltersAPI({
            filters: { ...filters, status: "completed" },
          })
        ),
      ])) as any;

      // Process results after all promises are resolved
      const updatedBookings: any = {};

      if (bookingCancelledResult?.value?.meta?.requestStatus === "fulfilled") {
        updatedBookings.CANCELED = bookingCancelledResult?.value?.payload?.data;
      } else if (
        bookingCancelledResult?.value?.meta?.requestStatus === "rejected"
      ) {
        toast.error(
          bookingCancelledResult?.value?.error?.message ??
            "Unknown Error Occured"
        );
      }

      if (bookingCompletedResult?.value?.meta?.requestStatus === "fulfilled") {
        updatedBookings.COMPLETED =
          bookingCompletedResult?.value?.payload?.data;
      } else if (
        bookingCompletedResult?.value?.meta?.requestStatus === "rejected"
      ) {
        toast.error(
          bookingCompletedResult?.value?.error?.message ??
            "Unknown Error Occured"
        );
      }

      if (bookingScheduledResult?.value?.meta?.requestStatus === "fulfilled") {
        updatedBookings.UPCOMING = bookingScheduledResult?.value?.payload?.data;
      } else if (
        bookingScheduledResult?.value?.meta?.requestStatus === "rejected"
      ) {
        toast.error(
          bookingScheduledResult?.value?.error?.message ??
            "Unknown Error Occured"
        );
      }

      console.log("updatedBookings", updatedBookings);

      setCalenderBookings((prev: any) => ({
        ...prev,
        ...updatedBookings,
      }));
    } catch (error) {
      toast.error("Unexpected error");
    } finally {
      setCalenderBookingsLoading(false);
    }
  };

  useEffect(() => {
    getAllBookings();
  }, [user, dates, dispatch, clientId]);

  //

  // recent bookings

  useEffect(() => {
    const getRecentBookings = async () => {
      if (!clientId) {
        toast.error("Client Id not found");
        return;
      }
      try {
        setRecentBookingsLoading(true);
        const res = (await dispatch(
          getBookingWithFiltersAPI({
            filters: {
              from: "hr",
              id: clientId,
              type: null,
              count: 5,
              status: "completed",
            },
          })
        )) as any;
        if (res?.error) {
          toast.error(res?.error?.message || "Unknown Error Occured");
          return;
        }
        setRecentBookings(res?.payload?.data);
      } catch (error) {
        toast.error("Failed to get Bookings");
      } finally {
        setRecentBookingsLoading(false);
      }
    };
    getRecentBookings();
  }, [clientId]);

  //

  // get doctor details

  //

  useEffect(() => {
    if (!clientId) {
      toast.error("Client Id not found");
    }
    dispatch(getDashboardInfo({ clientId: clientId }));
  }, [clientId, dispatch]);

  const changeOpenSlot = (status: "COMPLETED" | "UPCOMING" | "CANCELED") => {
    if (openedSlot === status) {
      setOpenedSlot(null);
      return;
    }
    setOpenedSlot(status);
  };

  const [showForm, setShowForm] = useState(false);
  const [showCreateAppointmentForm, setShowCreateAppointmentForm] =
    useState(false);

  const handleRowClick = () => {
    navigate("/mypatients/detail");
  };

  const viewAllClick = () => {
    navigate("/bookings?tab=all");
  };

  const handleViewAllClick = () => {
    navigate("/bookings?tab=all");
  };

  // edit logic
  const handleEdit = () => {
    setIsEdit((pre) => !pre);
    setEditSelected([]);
  };

  if (isEdit && (openedSlot === "COMPLETED" || openedSlot === "CANCELED")) {
    handleEdit();
  }

  const handleEditBooking = (id: any) => {
    setEditSelected((pre: any) => {
      if (pre.includes(id)) {
        return pre.filter((item: any) => item !== id);
      } else {
        return [...pre, id];
      }
    });
  };

  const handleReject = async (id: any) => {
    const updateObj = {
      id,
      bookingObj: {
        status: "cancelled",
      },
    };
    const res = await dispatch(updateBookingStatusAPI(updateObj));
    const resJson = JSON.parse(JSON.stringify(res));
    if (resJson?.error) {
      toast.error(resJson?.error?.message ?? "unknown error occured");
      return;
    } else {
      toast.success("Status updated successfully");
    }
  };

  const handleEditReject = async () => {
    if (editSelected?.length > 0) {
      await Promise.all(
        editSelected.map((id: string | number) => handleReject(id))
      );
      getAllBookings();
    }
  };

  console.log("edit", editSelected);

  //

  //mobile functions

  const navigateFunction = (direction: string, state: any) => {
    navigate(direction, { state: state });
  };

  // favorite logic

  const [showSelectFavorite, setShowSelectFavorite] = useState(false);

  useEffect(() => {
    if (showSelectFavorite) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [showSelectFavorite]);

  const [favorite, setFavorites] = useState<any>(() => {
    const storedFavorites = localStorage.getItem("dashboard-favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const [selected, setSelected] = useState<any>([]);

  useEffect(() => {
    localStorage.setItem("dashboard-favorites", JSON.stringify(favorite));
  }, [favorite]);

  const addFavorite = (list: any) => {
    const selectedFav = favList.filter((item) => list.includes(item?.name));
    setFavorites(selectedFav);
  };

  useEffect(() => {
    setSelected(favorite.map((item: any) => item.name)); // Ensure names are stored
  }, []);

  useEffect(() => {
    addFavorite(selected);
  }, [selected]);

  const handleSelect = (value: any) => {
    setSelected((prev: any) =>
      prev.includes(value)
        ? prev.filter((item: any) => item !== value)
        : prev.length < 3
        ? [...prev, value]
        : prev
    );
  };

  //

  if (checkIsMobile()) {
    return (
      <DashboardMobileStyled>
        <div className="nav-box-container">
          {[...navBox, ...(Array.isArray(favorite) ? favorite : [])].map(
            (item) => {
              return (
                <div className="nav-box">
                  <div
                    className="nav-box-div"
                    onClick={() => navigateFunction(item?.nav, item?.state)}
                  >
                    <img src={item?.img} alt={item?.name} />
                  </div>
                  <p
                    onClick={() => navigateFunction(item?.nav, item?.state)}
                    className="nav-box-p"
                  >
                    {item.name}
                  </p>
                </div>
              );
            }
          )}
          <div className="nav-box">
            <div
              onClick={() => setShowSelectFavorite(true)}
              className="nav-box-div"
            >
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741258656062.png"
                alt="Add Favorite"
              />
            </div>
            <p
              className="nav-box-p"
              onClick={() => setShowSelectFavorite(true)}
            >
              {selected.length < 3 ? "Add Favorite" : "Remove Favorite"}
            </p>
          </div>
        </div>
        {showSelectFavorite && (
          <div className="add-favorite-div">
            <div className="fav-header">
              <h3>Add Your Favorite</h3>
              <MdClose onClick={() => setShowSelectFavorite(false)} />
            </div>
            <p>You Can Add Up To 2</p>
            <div className="fav-list-options">
              {favList.map((option, index) => (
                <label className="fav-list-options-div" key={index}>
                  <input
                    type="checkbox"
                    checked={selected.includes(option?.name)}
                    onChange={() => handleSelect(option?.name)}
                  />
                  {option.name}

                  <div className="fav-radio-outer">
                    <div
                      className={`fav-radio-inner ${
                        selected.includes(option?.name) ? "fav-radio-sel" : ""
                      }`}
                    ></div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}
        <div className="view-patient-ask-div">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741260345922.png"
            alt="doctor-head"
          />{" "}
          View your employees details here.{" "}
          <BiRightArrowAlt onClick={() => navigate("/employees")} size={40} />
        </div>
        <DashboardStyled>
          <div className="cards-container">
            {/* allowed */}

            <div className="infoDiv">
              <div className="info-card">
                <div className="info-card-main grow-1">
                  <div className="middle">
                    <div className="overview-left grow-1" key={44}>
                      <div className="patient-overview h-full">
                        <h4>Employee Overview</h4>
                        <p className="overview-icon">
                          {" "}
                          <PiCharts data={dashboardInfo?.genderCounts} />{" "}
                        </p>
                        <p className="num">
                          {dashboardInfo?.genderCounts?.reduce(
                            (total, gender) => total + Number(gender?.total),
                            0
                          ) || 0}
                        </p>
                        <p className="totpat">Total Employee's</p>

                        <div className="grid grid-cols-2 place-items-center">
                          {dashboardInfo?.genderCounts?.map((gender, index) => {
                            const colors = [<Orange />, <Red />, <Purple />];
                            return (
                              <p key={index}>
                                {colors[index]} {formatStatus(gender?.gender)}{" "}
                                <span>{gender?.total || 0}</span>
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div onClick={() => navigate("/employees")} className="footer">
                  <p className="footer-text">
                    Total{" "}
                    {dashboardInfo?.genderCounts?.reduce(
                      (total, gender) => total + Number(gender?.total),
                      0
                    ) || 0}{" "}
                    Employees{" "}
                  </p>
                  <IoIosArrowDroprightCircle className="arrow-icon" />
                </div>
              </div>

              <div className="overview-right">
                <div
                  className="consult"
                  onClick={() => {
                    navigate("/bookings");
                  }}
                >
                  {/* <p className="percentage">
                  {"65%"} <Greenarrow />
                </p> */}
                  <p className="icon-svg">
                    <Doc />
                  </p>
                  <p className="totnumber">
                    {dashboardInfo?.bookings?.reduce(
                      (totalBookings, bookingStatusData) => {
                        return totalBookings + Number(bookingStatusData?.count);
                      },
                      0
                    ) || 0}
                  </p>
                  <p>
                    Total <br />
                    Consultation
                  </p>
                </div>

                {dashboardInfo?.bookings
                  ?.slice(0, 3)
                  ?.map((bookingStatusInfo, index) => {
                    return (
                      <div
                        key={index}
                        className="consult"
                        onClick={() => {
                          navigate("/bookings");
                        }}
                      >
                        <p className="icon-svg">
                          <Doc />
                        </p>
                        <p className="totnumber">
                          {bookingStatusInfo?.count || 880}{" "}
                        </p>
                        <p>
                          {(() => {
                            const status =
                              bookingStatusInfo?.status?.split?.("_");
                            return (
                              <>
                                {status?.[0] ?? ""}
                                {status?.[1] && (
                                  <>
                                    <br /> {status?.[1]}
                                  </>
                                )}
                              </>
                            );
                          })()}
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* <div className="info-card ratingCard">
                  <div className="info-card-third">
                    <div className="top-heading">
                      <p>Rating</p>
                    </div>
                    <div className="rating-content">
                      <p className="rating-number">
                        <span className="star-icon">★</span>
                        {doctorDetails?.doctorDetails?.rating?.toFixed(2) ??
                          "N/A"}
                      </p>
                    </div>
                  </div>
                  <div
                    className="footer-three"
                    onClick={() => navigate("/profile")}
                  >
                    <p className="footer-text">Reviews</p>
                    <IoIosArrowDroprightCircle className="arrow-icon" />
                  </div>
                </div> */}
          </div>
        </DashboardStyled>
      </DashboardMobileStyled>
    );
  }

  return (
    <DashboardStyled>
      <div className="dashboard-container">
        <div className="left-side">
          <div className="dashboard">
            <div className="heading">
              <div className="dashboard-header">
                {doctorDetailsLoading ? (
                  <>
                    <Skeleton />
                  </>
                ) : (
                  <>
                    <div className="name">
                      <h3 className="doctor-name">
                        {/* Dr. {doctorDetails?.doctorDetails?.name} */}
                      </h3>
                      <div>
                        <img
                          className="main-img-name-sec !w-[200px]"
                          src={clientDetails?.logo_url}
                        />
                      </div>
                      {doctorDetails?.doctorDetails?.rating !== null &&
                        doctorDetails?.doctorDetails?.rating !== undefined && (
                          <span className="rating">
                            <IoStarSharp className="star" />{" "}
                            {doctorDetails?.doctorDetails?.rating?.toFixed(2)}
                          </span>
                        )}
                    </div>

                    <p className="welcome-text">
                      {/* Hi Doctor, */}
                      let's review today's Employee schedule.
                    </p>
                  </>
                )}
              </div>
              <div className="pd-container">
                  <button
                    className="add-patient"
                    onClick={() => setShowForm(true)}
                  >
                    Add Employee
                  </button>
                {showForm && (
                  <CustomModal
                    headerClassName="!px-2"
                    open={showForm}
                    title="Add Employee"
                    handleClose={() => setShowForm(false)}
                  >
                    <AddPatientForm closeForm={() => setShowForm(false)} />
                  </CustomModal>
                )}
                {/* <button
                  className="add-patient"
                  onClick={() => setShowCreateAppointmentForm(true)}
                >
                  Create Appointment
                </button> */}
                {/* {showCreateAppointmentForm && (
                  <CreateAppointmentForm
                    closeForm={() => setShowCreateAppointmentForm(false)}
                    reload={() => {}}
                  />
                )} */}
              </div>
            </div>

            <div className="cards-container">
              {/* allowed */}

              <div className="infoDiv">
                <div className="info-card">
                  <div className="info-card-main grow-1">
                    <div className="middle">
                      <div className="overview-left grow-1" key={44}>
                        <div className="patient-overview h-full">
                          <h4>Employee Overview</h4>
                          <p className="overview-icon">
                            {" "}
                            <PiCharts data={dashboardInfo?.genderCounts} />{" "}
                          </p>
                          <p className="num">
                            {dashboardInfo?.genderCounts?.reduce(
                              (total, gender) => total + Number(gender?.total),
                              0
                            ) || 0}
                          </p>
                          <p className="totpat">Total Employee's</p>

                          <div className="grid grid-cols-2 place-items-center">
                            {dashboardInfo?.genderCounts?.map(
                              (gender, index) => {
                                const colors = [
                                  <Orange />,
                                  <Red />,
                                  <Purple />,
                                ];
                                return (
                                  <p key={index}>
                                    {colors[index]}{" "}
                                    {formatStatus(gender?.gender)}{" "}
                                    <span>{gender?.total || 0}</span>
                                  </p>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    onClick={() => navigate("/employees")}
                    className="footer"
                  >
                    <p className="footer-text">
                      Total{" "}
                      {dashboardInfo?.genderCounts?.reduce(
                        (total, gender) => total + Number(gender?.total),
                        0
                      ) || 0}{" "}
                      Employees{" "}
                    </p>
                    <IoIosArrowDroprightCircle className="arrow-icon" />
                  </div>
                </div>

                <div className="overview-right">
                  <div
                    className="consult"
                    onClick={() => {
                      navigate("/bookings");
                    }}
                  >
                    {/* <p className="percentage">
                {"65%"} <Greenarrow />
              </p> */}
                    <p className="icon-svg">
                      <Doc />
                    </p>
                    <p className="totnumber">
                      {dashboardInfo?.bookings?.reduce(
                        (totalBookings, bookingStatusData) => {
                          return (
                            totalBookings + Number(bookingStatusData?.count)
                          );
                        },
                        0
                      ) || 0}
                    </p>
                    <p>
                      Total <br />
                      Consultation
                    </p>
                  </div>

                  {dashboardInfo?.bookings
                    ?.slice(0, 3)
                    ?.map((bookingStatusInfo, index) => {
                      return (
                        <div
                          key={index}
                          className="consult"
                          onClick={() => {
                            navigate("/bookings");
                          }}
                        >
                          <p className="icon-svg">
                            <Doc />
                          </p>
                          <p className="totnumber">
                            {bookingStatusInfo?.count || 880}{" "}
                          </p>
                          <p>
                            {(() => {
                              const status =
                                bookingStatusInfo?.status?.split?.("_");
                              return (
                                <>
                                  {status?.[0] ?? ""}
                                  {status?.[1] && (
                                    <>
                                      <br /> {status?.[1]}
                                    </>
                                  )}
                                </>
                              );
                            })()}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </div>

              {/* <div className="info-card ratingCard">
                <div className="info-card-third">
                  <div className="top-heading">
                    <p>Rating</p>
                  </div>
                  <div className="rating-content">
                    <p className="rating-number">
                      <span className="star-icon">★</span>
                      {doctorDetails?.doctorDetails?.rating?.toFixed(2) ??
                        "N/A"}
                    </p>
                  </div>
                </div>
                <div
                  className="footer-three"
                  onClick={() => navigate("/profile")}
                >
                  <p className="footer-text">Reviews</p>
                  <IoIosArrowDroprightCircle className="arrow-icon" />
                </div>
              </div> */}
            </div>

            <div className="patient-table">
              <div className="header">
                <h2>Recent Employee History</h2>
                <button className="view-all" onClick={viewAllClick}>
                  View All
                </button>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Serial No</th>
                      <th>Name</th>
                      <th>Age & Sex</th>
                      <th>Date & Time</th>
                      <th>Visit Type</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentBookings?.bookings?.length > 0 ? (
                      recentBookings?.bookings?.map?.((patient: any) => (
                        <tr key={patient?.id}>
                          <td
                            className="!text-blue-600 underline cursor-pointer"
                            onClick={() =>
                              instituteAction("booking_details", patient)
                            }
                          >
                            {patient?.id}
                          </td>
                          <td className="Prescription">
                            <Link to={`/patients/detail/${patient?.user?.id}`}>
                              {getName(
                                patient?.user?.first_name,
                                patient?.user?.last_name
                              )}
                            </Link>
                          </td>
                          <td>{`${patient?.user?.age}, ${patient?.user?.gender}`}</td>
                          <td>{`${formatDate(patient?.collection_1_date)} / ${
                            patient.collection_1_slot || "N/A"
                          }`}</td>
                          <td>{formatStatus(patient?.type)}</td>
                          <td
                            className="actions"
                            onClick={() =>
                              navigate(`/employees/detail/${patient?.user?.id}`)
                            }
                          >
                            <IoIosArrowDroprightCircle
                              size={24}
                              className="forward"
                            />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <td className="td-no-booking" colSpan={7}>
                        No Bookings Available
                      </td>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Community />
        </div>
        <div className="right-side">
          <div className="calender">
            <div className="container">
              <div className="calender-header">
                <div className="header">
                  <button
                    onClick={decrementDate}
                    disabled={isEdit}
                    className="nav-button"
                  >
                    <IoIosArrowBack size={22} />
                  </button>
                  <h2 className="month-title">
                    {dates[2]?.format("MMMM YYYY")}
                  </h2>
                  <button
                    onClick={incrementDate}
                    disabled={isEdit}
                    className="nav-button"
                  >
                    <IoIosArrowForward size={22} />
                  </button>
                </div>
                <div className="edit-button">
                  <button onClick={handleEdit} className="edit">
                    {isEdit ? (
                      <>
                        <AiOutlineClose className="cancel-btn" />
                        Cancel
                      </>
                    ) : (
                      <>
                        <FaPencil />
                        Edit
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="calender-footer">
                <div className="calendar">
                  {dates?.map((day: any, index: any) => (
                    <div
                      onClick={() =>
                        !isEdit && setDates(generateDates(day.clone()))
                      } // Ensure day is a Moment object
                      key={index}
                      className={`date ${
                        index === 2 ? "active-date" : "inactive-date"
                      }`}
                    >
                      {day.format("DD")} {/* Only the day */}
                    </div>
                  ))}
                </div>

                <div className="section-upcoming">
                  <div
                    className="heading-upcoming"
                    onClick={() => changeOpenSlot("UPCOMING")}
                  >
                    <h3 className="section-title-upcoming">
                      Upcoming{" "}
                      <span>
                        (
                        {calenderBookingsLoading ? (
                          <Spin indicator={antIcon2} />
                        ) : (
                          calenderBookings?.["UPCOMING"]?.totalCount ?? 0
                        )}
                        )
                      </span>
                    </h3>
                    <span className="icon">
                      {openedSlot === "UPCOMING" ? (
                        <IoIosArrowUp size={22} />
                      ) : (
                        <IoIosArrowDown size={22} />
                      )}
                    </span>
                  </div>
                  {openedSlot === "UPCOMING" &&
                    (calenderBookingsLoading ? (
                      <div className="loading-center">
                        <Spin indicator={antIcon} />
                      </div>
                    ) : calenderBookings?.["UPCOMING"]?.totalCount ? (
                      <div className="appointment-list">
                        {calenderBookings?.["UPCOMING"]?.bookings?.map(
                          (booking: any, i: number) => {
                            const date = moment(
                              booking?.collection_1_date ??
                                booking?.collection_2_date,
                            );
                            return (
                              <div key={i} className="appointment">
                                <div className="date-section">
                                  <p className="date-card">{date.date()}</p>
                                  <p className="month-card">
                                    {date.format("MMM")}
                                  </p>
                                  <p className="type-card">ONLINE</p>
                                </div>
                                <div className="details-section">
                                  <p className="name-card">
                                    {booking?.user?.name}
                                  </p>
                                  <p className="time-card">
                                    {booking?.collection_1_slot ??
                                      booking?.collection_2_slot}
                                  </p>
                                  {/* <p className="location-card">
                                    Cosmetic Dental Clinic
                                  </p> */}
                                </div>
                                {!isEdit ? (
                                  <button
                                    className="forward-button"
                                    onClick={() => navigate("/bookings")}
                                  >
                                    <IoIosArrowDroprightCircle
                                      onClick={() => navigate("/bookings")}
                                      className="forward"
                                      size={27}
                                    />
                                  </button>
                                ) : (
                                  <input
                                    onClick={() => {
                                      handleEditBooking(booking?.id);
                                    }}
                                    checked={editSelected.includes(booking?.id)}
                                    className="edit-select-box"
                                    type="checkbox"
                                  />
                                )}
                              </div>
                            );
                          }
                        )}
                      </div>
                    ) : (
                      <div className="no-bookings loading-center">
                        No bookings available
                      </div>
                    ))}
                </div>

                <div className="section-completed">
                  <div
                    className="heading-completed"
                    onClick={() => changeOpenSlot("COMPLETED")}
                  >
                    <h3 className="section-title-completed">
                      Completed{" "}
                      <span>
                        (
                        {calenderBookingsLoading ? (
                          <Spin indicator={antIcon2} />
                        ) : (
                          calenderBookings?.["COMPLETED"]?.totalCount ?? 0
                        )}
                        )
                      </span>
                    </h3>
                    <span className="icon">
                      {openedSlot === "COMPLETED" ? (
                        <IoIosArrowUp size={22} />
                      ) : (
                        <IoIosArrowDown size={22} />
                      )}
                    </span>
                  </div>
                  {openedSlot === "COMPLETED" &&
                    (calenderBookingsLoading ? (
                      <div className="loading-center">
                        <Spin indicator={antIcon} />
                      </div>
                    ) : calenderBookings?.["COMPLETED"]?.totalCount ? (
                      <div className="appointment-list">
                        {calenderBookings?.["COMPLETED"]?.bookings?.map(
                          (booking: any, i: number) => {
                            const date = moment(
                              booking?.collection_1_date ??
                                booking?.collection_2_date,
                              "DD/MM/YYYY"
                            );
                            return (
                              <div key={i} className="appointment">
                                <div className="date-section">
                                  <p className="date-card">{date.date()}</p>
                                  <p className="month-card">
                                    {date.format("MMM")}
                                  </p>
                                  <p className="type-card">ONLINE</p>
                                </div>
                                <div className="details-section">
                                  <p className="name-card">
                                    {booking?.user?.name}
                                  </p>
                                  <p className="time-card">
                                    {booking?.collection_1_slot ??
                                      booking?.collection_2_slot}
                                  </p>
                                </div>
                                <button className="forward-button">
                                  <IoIosArrowDroprightCircle
                                    onClick={() => navigate("/bookings")}
                                    className="forward"
                                    size={24}
                                  />
                                </button>
                              </div>
                            );
                          }
                        )}
                      </div>
                    ) : (
                      <div className="no-bookings loading-center">
                        No bookings available
                      </div>
                    ))}
                </div>

                <div className="section-canceled">
                  <div
                    className="heading-canceled"
                    onClick={() => changeOpenSlot("CANCELED")}
                  >
                    <h3 className="section-title-canceled">
                      Canceled{" "}
                      <span>
                        (
                        {calenderBookingsLoading ? (
                          <Spin indicator={antIcon2} />
                        ) : (
                          calenderBookings?.["CANCELED"]?.totalCount ?? 0
                        )}
                        )
                      </span>
                    </h3>
                    <span className="icon">
                      {openedSlot === "CANCELED" ? (
                        <IoIosArrowUp size={22} />
                      ) : (
                        <IoIosArrowDown size={22} />
                      )}
                    </span>
                  </div>
                  {openedSlot === "CANCELED" &&
                    (calenderBookingsLoading ? (
                      <div className="loading-center">
                        <Spin indicator={antIcon} />
                      </div>
                    ) : calenderBookings?.["CANCELED"]?.totalCount ? (
                      <div className="appointment-list">
                        {calenderBookings?.["CANCELED"]?.bookings?.map(
                          (booking: any, i: number) => {
                            const date = moment(
                              booking?.collection_1_date ??
                                booking?.collection_2_date,
                              "DD/MM/YYYY"
                            );
                            return (
                              <div key={i} className="appointment">
                                <div className="date-section">
                                  <p className="date-card">{date.date()}</p>
                                  <p className="month-card">
                                    {date.format("MMM")}
                                  </p>
                                  <p className="type-card">ONLINE</p>
                                </div>
                                <div className="details-section">
                                  <p className="name-card">
                                    {booking?.user?.name}
                                  </p>
                                  <p className="time-card">
                                    {booking?.collection_1_slot ??
                                      booking?.collection_2_slot}
                                  </p>
                                  <p className="location-card">
                                    Cosmetic Dental Clinic
                                  </p>
                                </div>
                                <button className="forward-button">
                                  <IoIosArrowDroprightCircle
                                    onClick={() => navigate("/bookings")}
                                    className="forward"
                                    size={24}
                                  />
                                </button>
                              </div>
                            );
                          }
                        )}
                      </div>
                    ) : (
                      <div className="no-bookings loading-center">
                        No bookings available
                      </div>
                    ))}
                </div>
                <div className="view-all-buttons">
                  {isEdit ? (
                    <div className="edit-btns-div">
                      <SecoundaryButton
                        onClick={() => handleEditReject()}
                        disabled={editSelected.length === 0}
                      >
                        Reject
                      </SecoundaryButton>
                      <SecoundaryButton disabled={true}>
                        Re-Schedule
                      </SecoundaryButton>
                    </div>
                  ) : (
                    <button
                      className="view-all-button"
                      onClick={handleViewAllClick}
                    >
                      View All
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookingModals
        modalData={modalData}
        selectedAction={selectedModalAction}
        open={isModalOpen}
        handleClose={handleModalClose}
        handleOpen={handleModalOpen}
        handleSoftClose={handleModalSoftCLose}
      />
    </DashboardStyled>
  );
};

export default Dashboard;
