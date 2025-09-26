import toast from "react-hot-toast";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import { RiDownloadLine } from "react-icons/ri";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import useCustomModalRenderer from "@/components/custom/ModalRenderer/useCustomModalRenderer";
import CustomModalRenderer from "@/components/custom/ModalRenderer/CustomModalRenderer";
import { ViewReports } from "./UploadReports";
import { useMemo } from "react";
import { Dropdown } from "antd";
import ChangeBookingStatus from "../modals/ChangeBookingStatusModal";
import SharePopup from "@/components/custom/SharePopup/SharePopup";

const BookingAction = ({ data }: { data: any }) => {
  const { pop, push, activeTypes } = useCustomModalRenderer([
    "reports_download",
    "reject_booking",
    "accept_booking",
  ]);

  const modals = useMemo(() => {
    return [
      {
        type: "reports_download",
        component: (
          <CustomModal
            open={true}
            handleClose={() => pop("reports_download")}
            title="Reports Download"
            width="600px"
            bodyClass="p-4"
          >
            <CustomModal.Body>
              <div className="space-y-4">
                <ViewReports pdfLinks={data?.attachments} />
              </div>
            </CustomModal.Body>
          </CustomModal>
        ),
      },
      {
        type: "reject_booking",
        component: (
          <ChangeBookingStatus
            open={true}
            handleClose={() => pop("reject_booking")}
            selectedBooking={data}
            statusTo="cancelled"
            confirmText="Reject Booking"
          />
        ),
      },
      {
        type: "accept_booking",
        component: (
          <ChangeBookingStatus
            open={true}
            handleClose={() => pop("accept_booking")}
            selectedBooking={data}
            statusTo="booking_scheduled"
            confirmText="Accept Booking"
          />
        ),
      },
    ];
  }, [data, pop]);

  const dropdownActions = useMemo(() => {
    const actions = [
      {
        key: "accept",
        label: "Accept Booking",
        onClick: () => {
          push("accept_booking");
        },
        allowedStatus: ["open", "awaiting_lab_confirmation"],
      },
      {
        key: "reject",
        label: "Reject Booking",
        onClick: () => {
          push("reject_booking");
        },
        allowedStatus: ["open", "awaiting_lab_confirmation"],
      },
    ];

    return actions.filter((action) =>
      action.allowedStatus.includes(data?.status)
    );
  }, [data, push]);

  return (
    <div className="action-div">
      {data?.attachments?.length > 0 && (
        <PrimaryButton onClick={() => push("reports_download")}>
          <RiDownloadLine size={20} className="!mr-1" />
          Download Reports
        </PrimaryButton>
      )}

      {
        dropdownActions.length > 0 &&
        <Dropdown
          placement="topLeft"
          menu={{
            items: dropdownActions,
          }}
        >
          <span className="text-4xl leading-none">...</span>
        </Dropdown>
      }

      <SharePopup
        data={{
          id: data?.id,
          email: data?.user?.email,
          phone: data?.user?.phone,
          firstName: data?.user?.first_name,
          lastName: data?.user?.last_name,
          title: "Appointment Details",
          message: `Check out this appointment details for ${data?.user?.first_name || 'patient'}:\n${window.location.href}`
        }}
      />

      <CustomModalRenderer activeTypes={activeTypes} modals={modals} />
    </div>
  );
};

export default BookingAction;
