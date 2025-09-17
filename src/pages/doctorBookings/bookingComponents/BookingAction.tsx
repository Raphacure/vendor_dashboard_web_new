import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import {
  getAttachmentSignedUrl,
  getBkInvoiceAPI,
} from "@/redux/slices/bookingScreen/bookingScreenService";
import { doctorInstantCallAPI } from "@/redux/slices/doctor/doctorService";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import InvoiceModal from "../InvoiceModal";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { Mail, Phone, X } from "lucide-react";
import { RiDownloadLine } from "react-icons/ri";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import { Tooltip } from "antd";
import useCustomModalRenderer from "@/components/custom/ModalRenderer/useCustomModalRenderer";
import CustomModalRenderer from "@/components/custom/ModalRenderer/CustomModalRenderer";

const BookingAction = ({ data, time, instituteAction }: any) => {
  const dispatch = useDispatch() as any;
  const { pop, push, activeTypes } = useCustomModalRenderer([
    "reports_download",
  ]);
  const [showCallConfirmation, setShowCallConfirmation] = useState(false);
  const [invoiceDetails, setInvoiceDetails] = useState<any>(null);
  const [invoiceData, setInvoiceData] = useState({});
  const [showDownloadInvoiceModal, setShowDownloadInvoiceModal] =
    useState(false);
  const userName = data?.doctor?.name || "";
  const userNumber =
    JSON.parse(localStorage.getItem("user") || JSON.stringify({}))?.phone || "";
  const patientName = `${data?.user?.first_name || ""} ${
    data?.user?.last_name || ""
  }`;
  const patientNumber = data?.user?.phone || data?.user?.parent?.phone || "";

  const initiateCall = async () => {
    const result = await dispatch(
      doctorInstantCallAPI({
        patient_name: patientName,
        doctor_name: userName,
        patient_number: patientNumber,
        doctor_number: userNumber,
        booking_id: data?.id,
      })
    );
    if (result?.error) {
      toast.error(result?.error?.message || "Something went wrong");
      return;
    }
    toast.success("Call initiated successfully");
    setShowCallConfirmation(false);
  };

  const handleCall = () => {
    console.log("data : ", data);

    setShowCallConfirmation(true);
  };

  const handleCancel = () => {
    setShowCallConfirmation(false);
  };

  const handleEmail = () => {
    const email = data?.user?.email;
    if (email) {
      window.location.href = `mailto:${email}`;
    } else {
      toast.error("No email address found for this patient");
    }
  };

  const handleInvoiceClick = async (item: any) => {
    setInvoiceDetails(item);

    if (!item?.id) {
      toast.error("Booking ID Not found");
      return;
    }
    const res = (await dispatch(getBkInvoiceAPI(item?.id))) as any;
    if (res?.error) {
      toast.error(res?.error?.data?.message);
    } else {
      console.log("handleInvoiceClick res : ", res?.payload);
      setInvoiceData(res?.payload || {});
      setShowDownloadInvoiceModal(true);
    }
  };

  const handleReportClick = async (attachmentId: any) => {
    if (!attachmentId) return;
    const res = (await dispatch(getAttachmentSignedUrl(attachmentId))) as any;
    const url = res?.payload?.url;
    if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
      // Open in new tab with small delay to avoid popup blocking
      setTimeout(() => {
        window.open(url, "_blank");
      }, 300);
    } else {
      toast.error("Could not retrieve file URL.");
    }
  };

  const renderStatusSpecificActions = () => {
    // return null
    // if (data?.doctor_id !== linkableId) {
    //   return null;
    // }
    switch (data?.status) {
      // case "booking_scheduled": {
      //   const dateMoment = moment(
      //     data?.collection_1_date ?? data?.collection_2_date,
      //     "DD/MM/YYYY"
      //   );
      //   const dateTimeMoment = moment(
      //     `${dateMoment.format("YYYY-MM-DD")} ${
      //       data?.collection_1_slot ?? data?.collection_2_slot
      //     }`,
      //     "YYYY-MM-DD h:mm a"
      //   );
      //   const timeState = moment(time);
      //   const diffInMs = dateTimeMoment.diff(timeState);
      //   const duration = moment.duration(diffInMs);
      //   const minutes = Math.floor(duration.asMinutes());
      //   const disabled = minutes > 30 || minutes < -10;

      //   if (data?.type === "opd_consultation") {
      //     return null;
      //   }

      //   if (data?.type === "virtual_consultation") {
      //     return (
      //       <>
      //         <>
      //           {data?.virtual_type === "chat" && (
      //             <SecoundaryButton
      //               disabled={true}
      //               className="action-btns-virtual text-nowrap"
      //             >
      //               <img
      //                 src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741861104170.png"
      //                 alt="chat-icon"
      //               />
      //               Chat
      //             </SecoundaryButton>
      //           )}
      //           {data?.virtual_type === "video" && (
      //             <SecoundaryButton
      //               className="action-btns-virtual !text-nowrap"
      //               onClick={() => navigate(`/VideoCall?roomID=${data?.id}`)}
      //               disabled={disabled || data?.type !== "virtual_consultation"}
      //             >
      //               <img
      //                 src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741861178449.png"
      //                 alt="video-icon"
      //               />
      //               Video
      //             </SecoundaryButton>
      //           )}
      //           {data?.virtual_type === "call" && (
      //             <SecoundaryButton
      //               className="action-btns-virtual text-nowrap"
      //               disabled={disabled}
      //             >
      //               <img
      //                 src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741861229534.png"
      //                 alt="phone-icon"
      //               />
      //               Audio
      //             </SecoundaryButton>
      //           )}
      //         </>
      //       </>
      //     );
      //   }

      //   return null;
      // }
      // case "consultation_rescheduled": {
      //   if (data?.type === "opd_consultation") {
      //     return null;
      //   }
      //   if (data?.type === "virtual_consultation") {
      //     const dateMoment = moment(
      //       data?.collection_1_date ?? data?.collection_2_date,
      //       "DD/MM/YYYY"
      //     );
      //     const dateTimeMoment = moment(
      //       `${dateMoment.format("YYYY-MM-DD")} ${
      //         data?.collection_1_slot ?? data?.collection_2_slot
      //       }`,
      //       "YYYY-MM-DD h:mm a"
      //     );
      //     const timeState = moment(time);
      //     const diffInMs = dateTimeMoment.diff(timeState);
      //     const duration = moment.duration(diffInMs);
      //     const minutes = Math.floor(duration.asMinutes());
      //     const disabled = minutes > 30 || minutes < -10;

      //     return (
      //       <>
      //         <>
      //           {data?.virtual_type === "chat" && (
      //             <SecoundaryButton
      //               disabled={true}
      //               className="action-btns-virtual text-nowrap"
      //             >
      //               <img
      //                 src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741861104170.png"
      //                 alt="chat-icon"
      //               />
      //               Chat
      //             </SecoundaryButton>
      //           )}
      //           {data?.virtual_type === "video" && (
      //             <SecoundaryButton
      //               className="action-btns-virtual !text-nowrap"
      //               onClick={() => navigate(`/VideoCall?roomID=${data?.id}`)}
      //               disabled={disabled || data?.type !== "virtual_consultation"}
      //             >
      //               <img
      //                 src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741861178449.png"
      //                 alt="video-icon"
      //               />
      //               Video
      //             </SecoundaryButton>
      //           )}
      //           {data?.virtual_type === "call" && (
      //             <SecoundaryButton
      //               className="action-btns-virtual text-nowrap"
      //               disabled={disabled}
      //             >
      //               <img
      //                 src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/106435-1741861229534.png"
      //                 alt="phone-icon"
      //               />
      //               Audio
      //             </SecoundaryButton>
      //           )}
      //         </>
      //       </>
      //     );
      //   }
      //   return null;
      // }
      case "open": {
        return (
          <>
            {/* {[
              "opd_consultation",
              "virtual_consultation",
              "test_booking",
              "package_booking",
            ].includes(data?.type) &&
              !["instant"].includes(data?.virtual_type) && (
                <SecoundaryButton
                  className="action-btns-virtual text-nowrap"
                  onClick={() => {
                    instituteAction("reschedule", data);
                  }}
                >
                  Reschedule
                </SecoundaryButton>
              )} */}
            {/* <SecoundaryButton
              className="action-btns-virtual text-nowrap"
              onClick={() => {
                instituteAction("reject", data);
              }}
            >
              Reject
            </SecoundaryButton>
            <SecoundaryButton
              className="action-btns-virtual text-nowrap"
              onClick={() => {
                instituteAction("approve", data);
              }}
              disabled={moment(
                `${data?.collection_1_date ?? data?.collection_2_date} ${
                  data?.collection_1_slot ?? data?.collection_2_slot
                }`,
                "DD/MM/YYYY h:mm a"
              ).isBefore(moment(time))}
            >
              Accept
            </SecoundaryButton> */}
          </>
        );
      }
      case "reports_delivered": {
        return (
          <>
            {data?.attachments?.length > 0 && (
              <PrimaryButton
                className="action-btns-virtual text-nowrap"
                onClick={() => push("reports_download")}
              >
                <RiDownloadLine size={20} className="!mr-1" />
                Download Reports
              </PrimaryButton>
            )}
          </>
        );
      }
      default: {
        return null;
      }
    }
  };

  return (
    <div className="action-div">
      {/* <InvoiceModal
        show={showDownloadInvoiceModal}
        onClose={() => {
          setShowDownloadInvoiceModal(false);
        }}
        invoiceData={invoiceDetails}
      /> */}

      <CustomModal
        title="Confirm Call"
        open={showCallConfirmation}
        handleClose={handleCancel}
        width="420px"
        headerClassName="bg-blue-50 border-b border-blue-100 !px-2 rounded-t-2xl"
        bodyClass="px-6 py-4"
      >
        <CustomModal.Body>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <p className="text-xs text-gray-500 mb-1">Calling from:</p>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-base">
                  {userName}
                </span>
                <span className="text-gray-600 text-sm">{userNumber}</span>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Calling to:</p>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-base">
                  {patientName}
                </span>
                <span className="text-gray-600 text-sm">{patientNumber}</span>
              </div>
            </div>
          </div>
        </CustomModal.Body>
        <CustomModal.Footer>
          <div className="flex justify-between w-full gap-4">
            <SecoundaryButton
              key="cancel"
              onClick={handleCancel}
              className="w-1/2 py-2 text-base"
            >
              Cancel
            </SecoundaryButton>
            <PrimaryButton
              key="call"
              onClick={initiateCall}
              className="w-1/2 py-2 text-base flex items-center justify-center"
            >
              <Phone size={18} className="mr-2" />
              Call Now
            </PrimaryButton>
          </div>
        </CustomModal.Footer>
      </CustomModal>
      <>
        {data?.attachments?.length > 0 && (
          <PrimaryButton
            className="action-btns-virtual text-nowrap"
            onClick={() => push("reports_download")}
          >
            <RiDownloadLine size={20} className="!mr-1" />
            Download Reports
          </PrimaryButton>
        )}
      </>

      {/* {renderStatusSpecificActions()} */}
      <SecoundaryButton className="text-nowrap " onClick={handleEmail}>
        <Mail size={20} className="!mr-1" />
        Email
      </SecoundaryButton>
      {/* {data.final_amount >= 0 &&
        !["payment_pending", "failed_payment"].includes(data?.status) && (
          <SecoundaryButton
            className="action-btns-virtual text-nowrap"
            onClick={(e: any) => {
              e.stopPropagation();
              e.preventDefault();
              handleInvoiceClick(data);
            }}
          >
            <RiDownloadLine size={20} className="!mr-1" />
            Invoice
          </SecoundaryButton>
        )} */}
      <CustomModalRenderer
        activeTypes={activeTypes}
        modals={[
          {
            type: "reports_download",
            component: (
              <>
                <CustomModal
                  open={true}
                  handleClose={() => pop("reports_download")}
                  title="Reports Download"
                  width="500px"
                  headerClassName="bg-blue-50 border-b border-blue-100 !px-2 rounded-t-2xl"
                  bodyClass="p-4"
                >
                  <CustomModal.Body>
                    <div className="space-y-4">
                      {data?.attachments
                        ?.filter(
                          (item: any) => item?.active_status === "active"
                        )
                        ?.map((attachment: any, index: number) => (
                          <div
                            key={index}
                            className="flex items-center justify-between border-b pb-3"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-gray-600">
                                {attachment.url || `Report ${index + 1}`}
                              </span>
                            </div>
                            <PrimaryButton
                              onClick={() => handleReportClick(attachment.id)}
                              className="text-sm py-1.5"
                            >
                              <RiDownloadLine size={18} className="mr-1" />
                              Download
                            </PrimaryButton>
                          </div>
                        ))}
                    </div>
                  </CustomModal.Body>
                </CustomModal>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default BookingAction;
