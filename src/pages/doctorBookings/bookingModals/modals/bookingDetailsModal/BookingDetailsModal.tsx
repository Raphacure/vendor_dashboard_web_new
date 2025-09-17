import { useCallback, useEffect, useState } from "react";
import { BookingDetailsModalStyled } from "./BookingDetailsModal.styled";
import { Col, Row, Form } from "react-bootstrap";
import { Radio, Select } from "antd";
import { getBookingStatusAPI } from "@/redux/slices/dashboard/dashboardService";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { getPrescriptionDataAPI } from "@/redux/slices/prescription/prescriptionService";
import { FiMinus, FiPlus } from "react-icons/fi";
import { checkIsMobile, formatStatus, getName } from "@/lib/common";
import { useNavigate } from "react-router";
import { FaUser } from "react-icons/fa6";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import BookingDetails from "@/components/Bookings/BookingDetails";
import BookingDetailsV2 from "./tabs/BookingDetails/BookingDetails";
import { PrescriptionDetailsStyled } from "./PrescriptionDetails.styled";
import {
  getAllAppointmentsDetailsAPI,
  getAllBkStatusAPI,
  getBkAdditionalInfo,
  getBookingByIdAPI,
  updateBookingPaymentMethodsAPI,
  updateBulkBkStatusAPI,
} from "@/redux/slices/bookingScreen/bookingScreenService";
import CommunicationLogs from "@/pages/doctorBookings/bookingModals/modals/bookingDetailsModal/tabs/CommunicationLogs/CommunicationLogs";
import { Tabs, TabsProps } from "antd"; // Import Tabs and TabsProps from antd
import BookingRCS from "./tabs/RCA/RCA";
import AdminEPrescription from "./tabs/AdminEPrescription/AdminEPrescription";
import useClientLinkableId from "@/hooks/auth/useClientLinkableId";
import { FormDataType } from "./types";
import CustomTab from "@/components/custom/Tab/CustomTab";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";

interface ModalComponentProps {
  selectedAction?: string;
  modalData: {
    id: string;
    [key: string]: any;
  };
  handleClose: () => void;
  handleOpen?: () => void;
  handleSoftClose: () => void;
}

const BookingDetailsModal = (props: ModalComponentProps) => {
  const dispatch = useDispatch() as any;
  const [bookingDetails, setBookingDetails] = useState(props?.modalData) as any;

  const [additionalInfo, setAdditionalInfo] = useState();

  const [prescriptionData, setPrescriptionData] = useState() as any;
  const [activeTab, setActiveTab] = useState("details");

  const [formData, setFormData] = useState<FormDataType>({
    selectedStatus: bookingDetails?.status,
    paymentMethod: bookingDetails?.payment_note || "",
    paymentSource: bookingDetails?.payment_source || "",
  });

  const fetchCurrentBookingDetails = useCallback(
    async (bkId: string = props?.modalData?.id) => {
      if (!bkId) {
        toast.error("Booking ID is required");
        return;
      }
      const res = await dispatch(getBookingByIdAPI(bkId));
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occured");
        return;
      }
      setBookingDetails(res?.payload?.data?.booking);
    },
    [dispatch]
  );

  useEffect(() => {
    fetchCurrentBookingDetails();
  }, [fetchCurrentBookingDetails]);

  useEffect(() => {
    const fetchPrescriptionData = async () => {
      try {
        const result = (await dispatch(
          getPrescriptionDataAPI(props.modalData?.id)
        )) as any;
        if (result?.error) {
          toast.error(result?.error?.message ?? "unknown error occured");
          return;
        }
        setPrescriptionData(result?.payload);
      } catch (error) {
        toast.error("unexpected error");
      }
    };

    fetchPrescriptionData();
  }, []);

  const updatePaymentMethods = async () => {
    if (!props?.modalData?.id) {
      toast.error("Booking ID is required");
      return;
    }
    const requestBody = {
      booking_id: props?.modalData?.id,
      payment_note: formData.paymentMethod,
      payment_source: formData.paymentSource,
    };
    const res = await dispatch(updateBookingPaymentMethodsAPI(requestBody));
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
      return;
    }
    toast.success("Payment methods updated successfully");
  };

  const handleSaveStatus = async () => {
    try {
      const payload = {
        status: formData.selectedStatus,
        bookingIds: [`${props.modalData.id}`],
      };
      const res = await dispatch(updateBulkBkStatusAPI(payload));
      if (res?.error) {
        toast.error(res?.error?.message ?? "unknown error occured");
        return;
      }
      toast.success("Booking status updated successfully");
      props.handleClose();
    } catch (error) {
      toast.error("Failed to update booking status");
    }
  };

  const handleUpdateData = () => {
    if (formData.selectedStatus !== bookingDetails?.status) {
      handleSaveStatus();
    }
    if (
      formData.paymentMethod !== bookingDetails?.payment_note ||
      formData.paymentSource !== bookingDetails?.payment_source
    ) {
      updatePaymentMethods();
    }
    props.handleClose();
  };

  useEffect(() => {
    getMoreBkInfo();
  }, [props?.modalData?.id, dispatch]);

  const getMoreBkInfo = async () => {
    console.log("bookingId : ", props?.modalData?.id);

    if (!props?.modalData?.id) {
      return;
    }
    const res = (await dispatch(
      getBkAdditionalInfo(props?.modalData?.id)
    )) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
      return;
    } else {
      console.log(res?.payload?.data);
      setAdditionalInfo(res?.payload?.data);
    }
  };

  const items = [
    {
      value: "details",
      label: "Booking Details",
      children: (
        <BookingDetailsV2
          formData={formData}
          setFormData={setFormData}
          modalData={bookingDetails}
        />
      ),
    },
    {
      value: "history",
      label: "Employee History",
      children: (
        <BookingDetails
          bkDetails={bookingDetails}
          additionalInfo={additionalInfo}
          fetchBookingDetails={fetchCurrentBookingDetails}
          selectedBooking={props?.modalData}
          fetchBookingAdditionalDetails={getMoreBkInfo}
          onClose={() => {
            dispatch(getAllBkStatusAPI({ type: "" }));
            props?.handleClose();
          }}
        />
      ),
    },
    {
      value: "notes",
      label: "Communication Logs",
      children: <CommunicationLogs additionalInfo={additionalInfo} />,
    },
    {
      value: "3",
      label: "RCA",
      children: <BookingRCS additionalInfo={additionalInfo} />,
    },
    ...(bookingDetails?.attachments?.length > 0
      ? [
          {
            value: "4",
            label: "Prescription",
            children: (
              <AdminEPrescription
                bkDetails={bookingDetails}
                selectedBooking={props?.modalData}
              />
            ),
          },
        ]
      : []),
  ];

  return (
    <CustomModal
      title={"Booking Details" + ` (${props?.modalData?.id})`}
      open={true}
      handleClose={props.handleClose}
    >
      <CustomModal.Body>
        <BookingDetailsModalStyled>
          <div className="main-container ">
            <div className="booking-details-container rounded-[20px] p-4">
              <div className="patient-info max-[500px]:flex-col">
                <div className="flex gap-4 items-center max-[675px]:flex-col">
                  <div className="patient-photo">
                    {props?.modalData?.user?.image ? (
                      <img
                        className="w-[100px] h-[100px] rounded-full"
                        src={props?.modalData?.user?.image}
                        alt="Patient"
                      />
                    ) : (
                      <FaUser className="w-[100px] h-[100px] text-gray-400 rounded-full" />
                    )}
                  </div>
                  <div className="patient-details">
                    <h2 className="patient-name">
                      Mr.{" "}
                      {getName(
                        props?.modalData?.user?.first_name,
                        props?.modalData?.user?.last_name
                      )}
                    </h2>
                    <div className="flex gap-10 max-[1000px]:flex-col">
                      <div>
                        <p>Employee ID: #{prescriptionData?.user?.id}</p>
                        <p>
                          Age/Sex: {prescriptionData?.user?.age ?? "N/A"}
                          <b>/</b>
                          {prescriptionData?.user?.gender ?? "N/A"}
                        </p>
                        <p>Ph No: {prescriptionData?.user?.phone ?? "N/A"}</p>
                      </div>
                      <div>
                        <p>E-mail: {prescriptionData?.user?.email ?? "N/A"}</p>
                        <p>
                          Booking status:{" "}
                          {formatStatus(props?.modalData?.status) || "N/A"}
                        </p>
                        <p>
                          Payment status:{" "}
                          {formatStatus(props?.modalData?.payment_status) ||
                            "N/A"}
                        </p>
                        {[
                          "opd_consultation",
                          "virtual_consultation",
                          "sec_opinion_booking",
                        ].includes(props?.modalData?.type) && (
                          <p>
                            Doctor Name:{" "}
                            {prescriptionData?.doctor?.name ?? "N/A"}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="booking-status">
                  <span
                    className={`status ${props?.modalData?.status?.toLowerCase()}`}
                  >
                    {formatStatus(props?.modalData?.status) || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            <CustomTab
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={items}
            />
          </div>
        </BookingDetailsModalStyled>
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex !justify-end bg-white">
          <button
            className="text-gray-500 px-4 py-2 rounded-2xl mr-2"
            onClick={props.handleClose}
          >
            Cancel
          </button>
          <PrimaryButton onClick={handleUpdateData}>Save</PrimaryButton>
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );
};

export default BookingDetailsModal;
