import React from "react";
import { DoctorCardStyled } from "./DoctorCard.styled";
import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router";
import EductIcon from "@/assets/icons/educIcon.svg";
import { getNextSlotTime } from "@/lib/common";
import TimeSlot from "@/assets/icons/timeSlt.svg";

const defaultDoctImage =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/1732785725785EMTYDOCTORIMAGE.png-1732785730293.png";
type DoctorCardModuleProp = {
  origin?: string;
  DoctorBookingReviewProp: any;
  DoctorChatProp: any;
  DoctorBookConsultProp: any;
  item: any;
  selectedBooking?: any;
};

const Banner = ({ rating }: any) => {
  return (
    <DoctorCardStyled>
      <div className="bannerWrapper">
        <div className="rectangle">
          <IoIosStar fill="#252B61" className="me-2 " /> {Math.round(rating)}
        </div>
        <div className="triangle"></div>
      </div>
    </DoctorCardStyled>
  );
};

const DoctorCardModule = ({
  origin = "",
  DoctorBookingReviewProp,
  DoctorChatProp,
  item,
  DoctorBookConsultProp,
  selectedBooking = {},
}: DoctorCardModuleProp) => {
  const navigate = useNavigate();
  const appointment = item;

  return (
    <DoctorCardStyled>
      <div className="detail-card">
        <div className="appointment-card" key={appointment?.id}>
          <div
            className="left-middle flex-col sm:flex-row"
            onClick={() => {
              // history.push(`/doctor/doctordetails/${appointment?.id}`)
            }}
          >
            <div className="card-left">
              <Banner rating={appointment?.rating || 0} />
              <div className="doctor-image-mobile-view">
                <img
                  className="w-full"
                  src={appointment?.image || defaultDoctImage}
                  alt={appointment?.name}
                />
              </div>
              {/* <div className="doctor-title-mobile-view">
                <p className="doctor-title">{appointment?.name}</p>
                <p className="specelization-text">{appointment?.specialization}</p>
              </div> */}
            </div>
            <div className="card-right">
              <div className="d-flex justify-content-between align-items-center">
                <div className="doctor-title-web-view">
                  <p className="doctor-title">{appointment?.name}</p>
                  <p className="specelization-text">
                    {appointment?.specialization}
                  </p>
                </div>

                {item?.available_in_90 && (
                  <div className="sec-banner-div">
                    <img
                      src=" https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736249754401.png"
                      alt=""
                      className="me-3 ms-2"
                    />
                    <p>In 90 Seconds</p>
                  </div>
                )}
              </div>
              {appointment?.highest_education && (
                <p className="eduction-details">
                  {/* <EductIcon /> */}
                  <span className="education-span">
                    {" "}
                    {appointment?.highest_education}
                  </span>
                </p>
              )}

              <div className="d-flex333 align-items-center exp-div">
                {appointment?.work_experience_years && (
                  <div className=" Experience-div ">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245306125.png"
                      alt=""
                      className="me-2"
                    />
                    <p className="eduction-details">
                      <span className="divv">
                        {" "}
                        {appointment?.work_experience_years}+ Year Experience
                      </span>
                    </p>
                  </div>
                )}
                {appointment?.languages && (
                  <div className=" Experience-div ">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245349025.png"
                      alt=""
                      className="me-2"
                    />
                    <p className="eduction-details">
                      <span className="languages-span">
                        {appointment?.languages}
                      </span>
                    </p>
                  </div>
                )}
                {appointment?.virtual_consultation_cost && (
                  <p className="eduction-details">
                    {/* <TimeSlot /> */}
                    <span> Virtual Cons Cost : </span>
                    <span className="">
                      ₹{appointment?.virtual_consultation_cost}
                    </span>
                  </p>
                )}
              </div>
              <p className="eduction-details">
                {/* <TimeSlot /> */}
                <span> Next Slot: </span>
                <span className="next-slot-time-sec">
                  {getNextSlotTime(item?.availabilites)}
                </span>
              </p>
            </div>
          </div>
          <div className="main-contect-div">
            {origin === "self" && selectedBooking?.virtual_type && (
              <div className="contect-div">
                <p
                  className="contect-text d-flex"
                  onClick={() => DoctorChatProp(appointment)}
                >
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736245537447.png"
                    alt=" chat"
                    className="me-2"
                  />
                  <span className="languages-span">
                    Virtual Type : {selectedBooking?.virtual_type}
                  </span>
                </p>
              </div>
            )}

            {origin !== "self" && (
              <div className="contect-book-btn-div p-2 ml-auto">
                <button
                  className="btn contect-book-btn p-2 h-full"
                  onClick={() => DoctorBookConsultProp(appointment)}
                >
                  Book Consult
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </DoctorCardStyled>
  );
};

export default DoctorCardModule;
