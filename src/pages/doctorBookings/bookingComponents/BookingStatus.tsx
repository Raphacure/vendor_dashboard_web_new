import { checkIsMobile, formatStatus } from "@/lib/common";
import { doctorInstantCallAPI } from "@/redux/slices/doctor/doctorService";
import { Menu,Dropdown } from "antd";
import moment from "moment";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const BookingStatus = ({ data, instituteAction, time }: any) => {
    const dispatch = useDispatch() as any;
    const navigate = useNavigate();
    switch (data?.status) {
      case "booking_scheduled": {
        const dateMoment = moment(
          data?.collection_1_date ?? data?.collection_2_date,
          "DD/MM/YYYY"
        );
        const dateTimeMoment = moment(
          `${dateMoment.format("YYYY-MM-DD")} ${
            data?.collection_1_slot ?? data?.collection_2_slot
          }`,
          "YYYY-MM-DD h:mm a"
        );
        const timeState = moment(time);
        const diffInMs = dateTimeMoment.diff(timeState);
        const duration = moment.duration(diffInMs);
        const minutes = Math.floor(duration.asMinutes());
        const seconds = duration.seconds();
        const formattedDiff = `${minutes}:${Math.abs(
          Number(seconds.toString().padStart(2, "0"))
        )}`;
  
        const handleMenuClick = async (e: any) => {
          if (e.key === "call") {
            const result = await dispatch(
              doctorInstantCallAPI({
                patient_name: `${data?.user?.first_name} ${data?.user?.last_name}`,
                doctor_name: data?.doctor?.name,
                patient_number: data?.user?.phone ?? data?.user?.parent?.phone,
                doctor_number: JSON.parse(
                  localStorage.getItem("user") || JSON.stringify({})
                )?.phone,
                booking_id: data?.id,
              })
            );
          } else if (e.key === "video") {
            navigate(`/VideoCall?roomID=${data?.id}`);
          } else if (e.key === "chat") {
            console.log("chat");
          }
        };
  
        const menu = (
          <Menu onClick={handleMenuClick}>
            <Menu.Item key="call">call</Menu.Item>
            <Menu.Item key="video">video</Menu.Item>
            <Menu.Item key="chat">chat</Menu.Item>
          </Menu>
        );
  
        if (minutes < 30 && minutes > -10) {
          if (checkIsMobile()) {
            return (
              // <Dropdown overlay={menu} trigger={["click"]}>
                <span
                  className={`status-btns ${
                    minutes < 10 ? "red-call" : "yellow-call"
                  }`}
                >
                  <FaPhone /> {formattedDiff}
                </span>
              // </Dropdown>
            );
          }
          return (
            <>
              <div className="next-text">Next {formattedDiff} min</div>
            </>
          );
        } else {
          if (checkIsMobile()) {
            return (
              <span className="mobile-upcoming-status status-btns text-green-600">
                <img
                  className="label-img"
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740997677616.png"
                  alt="upcoming"
                />
                upcoming
              </span>
            );
          }
          return (
            <>
              <div className="upcoming-text table-status-div text-green-600">
                <img
                  className="label-img"
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740997677616.png"
                  alt="upcoming"
                />
                Upcoming
              </div>
            </>
          );
        }
      }
  
      case "open": {
        const handleMenuClick = (e: any) => {
          if (e.key === "reshedule") {
            console.log("reshedule");
          } else if (e.key === "reject") {
            instituteAction("reject", data);
          } else if (e.key === "accept") {
            instituteAction("approve", data);
          }
        };
        const menu = (
          <Menu onClick={handleMenuClick}>
            <Menu.Item key="reshedule">Reshedule</Menu.Item>
            <Menu.Item key="reject">Reject</Menu.Item>
            <Menu.Item key="accept">Accept</Menu.Item>
          </Menu>
        );
        if (checkIsMobile()) {
          return (
            // <Dropdown overlay={menu} trigger={["click"]}>
              <span className="status-btns pending-status-mobile">
                pending
              </span>
            // </Dropdown>
          );
        }
        return (
          <>
            <div className="table-status-div pending-text">
              <img
                className="label-img"
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740999025608.png"
                alt="upcoming"
              />
              Pending
            </div>
          </>
        );
      }
      case "completed": {
        if (checkIsMobile()) {
          return (
            <span className="status-btns completed-status-mobile whole-center">
              <FaRegCheckCircle color="green" />
              Completed
            </span>
          );
        }
        return (
          <>
            <div className="table-status-div completed-status">
              <FaRegCheckCircle color="green" />
              Completed
            </div>
          </>
        );
      }
      case "cancelled": {
        if (checkIsMobile()) {
          return (
            <span className="status-btns rejected-status-mobile">
              <img
                className="label-img"
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741429137408.png"
                alt="upcoming"
              />
              Rejected
            </span>
          );
        }
        return (
          <>
            <div className="table-status-div rejected-text">
              <img
                className="label-img"
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1740999287595.png"
                alt="upcoming"
              />
              Rejected
            </div>
          </>
        );
      }
      default: {
        return (
          <span title={data?.status} className=" status-btns other-status-mobile">
            {formatStatus(data?.status)}
          </span>
        );
      }
    }
  };


  export default BookingStatus;