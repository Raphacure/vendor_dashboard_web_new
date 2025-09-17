import React from "react";
import { useDispatch } from "react-redux";
import {
  getAllBookingListAPI,
  updateBookingStatusAPI,
} from "../../../redux/slices/dashboard/dashboardService";
import { toast } from "react-hot-toast";
import { BookingModalstyled } from "./BookingModals.styled";
import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import BookingDetailsModal from "./modals/bookingDetailsModal/BookingDetailsModal";
import ResheduleBooking from "./modals/resheduleBookinModal/ResheduleBooking";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";

interface ModalComponentProps {
  selectedAction: string;
  modalData: any;
  handleClose: () => void;
  handleOpen: () => void;
  handleSoftClose: () => void;
}

interface ModalAction {
  type: "reject" | "approve" | "reschedule" | "booking_details";
  Component: React.FC<ModalComponentProps>;
}

const modalActions: ModalAction[] = [
  {
    type: "reject",
    Component({
      selectedAction,
      modalData,
      handleClose,
      handleOpen,
      handleSoftClose,
    }) {
      const dispatch = useDispatch() as any;
      const handleReject = async () => {
        const updateObj = {
          id: modalData?.id,
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
          handleClose();
        }
      };
      return (
        <>
          <CustomModal
            handleClose={handleClose}
            open={true}
            title="Reject Booking"
          >
            <CustomModal.Body>
              <div className="reject-modal-body">
                <p>
                  Are you sure you want to reject the booking {modalData?.id}
                </p>
              </div>
            </CustomModal.Body>
            <CustomModal.Footer>
              <div className="flex justify-end gap-2">
                <SecoundaryButton onClick={handleSoftClose}>
                  cancel
                </SecoundaryButton>
                <PrimaryButton onClick={handleReject}>Reject</PrimaryButton>
              </div>
            </CustomModal.Footer>
          </CustomModal>
        </>
      );
    },
  },
  {
    type: "approve",
    Component({
      selectedAction,
      modalData,
      handleClose,
      handleOpen,
      handleSoftClose,
    }) {
      const dispatch = useDispatch() as any;
      const handleApprove = async () => {
        const updateObj = {
          id: modalData?.id,
          bookingObj: {
            status: "booking_scheduled",
          },
        };
        const res = await dispatch(updateBookingStatusAPI(updateObj));
        const resJson = JSON.parse(JSON.stringify(res));
        if (resJson?.error) {
          toast.error(resJson?.error?.message ?? "unknown error occured");
          return;
        } else {
          toast.success("Status updated successfully");
          handleClose();
        }
      };
      return (
        <>
          <CustomModal
            handleClose={handleClose}
            open={true}
            title="Approve Booking"
          >
            <CustomModal.Body>
              <div className="reject-modal-body">
                <p>
                  Are you sure you want to Approve the booking {modalData?.id}
                </p>
              </div>
            </CustomModal.Body>
            <CustomModal.Footer>
              <div className="flex justify-end gap-2">
                <SecoundaryButton onClick={handleSoftClose}>
                  cancel
                </SecoundaryButton>
                <PrimaryButton onClick={handleApprove}>Approve</PrimaryButton>
              </div>
            </CustomModal.Footer>
          </CustomModal>
        </>
      );
    },
  },
  {
    type: "reschedule",
    Component({
      selectedAction,
      modalData,
      handleClose,
      handleOpen,
      handleSoftClose,
    }) {
      return (
        <>
          <CustomModal
            handleClose={handleSoftClose}
            open={true}
            title="Reshedule Booking"
          >
            <ResheduleBooking
              handleSoftClose={handleSoftClose}
              handleClose={handleClose}
              data={modalData}
            />
          </CustomModal>
        </>
      );
    },
  },

  {
    type: "booking_details",
    Component(props: any) {
      return <BookingDetailsModal {...props} />;
    },
  },
];

const BookingModals: React.FC<ModalComponentProps & { open: boolean }> = ({
  selectedAction,
  modalData,
  handleClose,
  handleOpen,
  open,
  handleSoftClose,
}) => {
  const action = modalActions?.find((item) => item?.type === selectedAction);
  return (
    <>
      <BookingModalstyled>
        {open && action && (
          <action.Component
            selectedAction={selectedAction}
            modalData={modalData}
            handleClose={handleClose}
            handleOpen={handleOpen}
            handleSoftClose={handleSoftClose}
          />
        )}
      </BookingModalstyled>
    </>
  );
};

export default BookingModals;
