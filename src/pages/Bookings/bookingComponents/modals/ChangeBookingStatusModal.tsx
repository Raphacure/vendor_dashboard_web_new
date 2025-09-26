import PrimaryButton from "@/components/custom/button/PrimaryButton";
import SecoundaryButton from "@/components/custom/button/SecoundaryButton";
import CustomModal from "@/components/custom/modal/CustomModal/CustomModal";
import { formatStatus } from "@/lib/common";
import { updateBookingStatusAPI } from "@/Scenes/apis/bookings/bookingsAPI";
import { UpdateBookingStatusApiPayload } from "@/Scenes/apis/bookings/bookingsAPI.types";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const ChangeBookingStatus = ({
  open,
  handleClose,
  selectedBooking,
  statusTo,
  confirmText
}: {
  open: boolean;
  handleClose: () => void;
  selectedBooking: any;
  statusTo: string;
  confirmText?:string
}) => {
  const bookingStatusMutation = useMutation({
    mutationFn: ({ payload }: { payload: UpdateBookingStatusApiPayload }) =>
      updateBookingStatusAPI(payload),
    onSuccess: () => {
      toast.success("Booking status updated successfully");
      handleClose();
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to update booking status");
    },
  });

  const handleStatusChange = () => {
    if (selectedBooking?.id && statusTo) {
      bookingStatusMutation.mutate({
        payload: {
          bookingIds: [String(selectedBooking?.id)],
          status: statusTo,
        },
      });
    }
  };

  return (
    <CustomModal
      open={open}
      handleClose={handleClose}
      title="Accept Booking"
      width="600px"
      bodyClass="p-4"
    >
      <CustomModal.Body>
        <div className="space-y-4">
          <p>
            Are you sure you want to {confirmText || `Change Booking Status to ${formatStatus(statusTo)}`} with booking id:{" "}
            {selectedBooking?.id}?
          </p>
        </div>
      </CustomModal.Body>
      <CustomModal.Footer>
        <div className="flex justify-end gap-2">
          <SecoundaryButton onClick={handleClose}>close</SecoundaryButton>
          <PrimaryButton onClick={handleStatusChange}>
            {confirmText || `Change Booking Status to ${formatStatus(statusTo)}`}
          </PrimaryButton>
        </div>
      </CustomModal.Footer>
    </CustomModal>
  );
};

export default ChangeBookingStatus;
