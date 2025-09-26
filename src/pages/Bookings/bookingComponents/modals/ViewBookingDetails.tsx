import { toast } from "react-toastify";
import CustomModal from "../../../../components/custom/modal/CustomModal/CustomModal";
import { Button } from "antd";
import { formatStatus } from "@/lib/common";
import { useGetBookingsById } from "@/hooks/useQuerys/bookings/bookingsQuery";
import { useMutation } from "@tanstack/react-query";
import { UpdateBookingStatusApiPayload } from "@/Scenes/apis/bookings/bookingsAPI.types";
import { updateBookingStatusAPI } from "@/Scenes/apis/bookings/bookingsAPI";
import UploadReports from "../components/UploadReports";
import {
  CalendarIcon,
  ClockIcon,
} from "lucide-react";
import BookingCustomerDetails from "../components/BookingCustomerDetails";

const ViewBookingDetails = ({
  open,
  handleModalClose,
  selectedbooking,
}: any) => {
  const {
    data: bookingByIdData,
    isFetching: bookingByIdLoading,
    refetch: fetchBookingDetails,
  } = useGetBookingsById({
    id: selectedbooking?.id,
  });
  const bookingDetails = bookingByIdData?.data?.booking;

  const bookingStatusMutation = useMutation({
    mutationFn: ({ payload }: { payload: UpdateBookingStatusApiPayload }) =>
      updateBookingStatusAPI(payload),
    onSuccess: () => {
      toast.success("Booking status updated successfully");
      fetchBookingDetails();
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to update booking status");
    },
  });

  const handleStatusChange = (status: string) => {
    if (bookingDetails?.id) {
      bookingStatusMutation.mutate({
        payload: {
          bookingIds: [String(bookingDetails?.id)],
          status: status,
        },
      });
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: {
        color: "bg-green-100 text-green-800",
        icon: "🟢",
        text: "Completed",
      },
      rejected: {
        color: "bg-red-100 text-red-800",
        icon: "🔴",
        text: "Rejected",
      },
      open: {
        color: "bg-yellow-100 text-yellow-800",
        icon: "🟡",
        text: "Open",
      },
      booking_scheduled: {
        color: "bg-blue-100 text-blue-800",
        icon: "📅",
        text: "Scheduled",
      },
      sample_collected: {
        color: "bg-purple-100 text-purple-800",
        icon: "🧪",
        text: "Sample Collected",
      },
    };

    const config =
      statusConfig[status as keyof typeof statusConfig] || statusConfig.open;
    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${config.color}`}
      >
        <span className="mr-1">{config.icon}</span>
        {config.text}
      </span>
    );
  };

  return (
    <>
      <CustomModal
        open={open}
        handleClose={handleModalClose}
        title="Booking Details"
        width="calc(100% - 30%)"
      >
        <CustomModal.Body>
          <div className="p-2 space-y-6 min-h-full">
            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Booking #{bookingDetails?.id}
                  </h2>
                  <div className="flex items-center text-sm text-gray-600">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    Order placed on {
                      bookingDetails?.created_at?.split("T")[0]
                    }{" "}
                    at {bookingDetails?.created_at?.split("T")[1]?.slice(0, 5)}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  {getStatusBadge(bookingDetails?.status || "")}
                  {bookingDetails?.status === "booking_scheduled" && (
                    <Button
                      type="primary"
                      disabled={bookingByIdLoading}
                      onClick={() => handleStatusChange("sample_collected")}
                      loading={bookingByIdLoading}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Mark as Sample Collected
                    </Button>
                  )}
                  {bookingDetails?.status === "sample_collected" && (
                    <Button
                      disabled={bookingByIdLoading}
                      onClick={() => handleStatusChange("resample")}
                      loading={bookingByIdLoading}
                      className="border-orange-500 text-orange-600 hover:bg-orange-50"
                    >
                      Resample
                    </Button>
                  )}
                </div>
              </div>
            </div>

            {/* Status Timeline */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Order Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Current Status:</span>
                  <span className="font-semibold text-lg text-gray-900">
                    {formatStatus(bookingDetails?.status)}
                  </span>
                </div>
              </div>
            </div>

            {/* Scheduled Date and Time */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <ClockIcon className="w-5 h-5 mr-2 text-blue-600" />
                Scheduled Date and Time
              </h3>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-lg font-semibold text-blue-900">
                  {bookingDetails?.collection_1_date} at{" "}
                  {bookingDetails?.collection_1_slot}
                </p>
              </div>
            </div>

            <UploadReports
              selectedbooking={bookingDetails}
              reload={fetchBookingDetails}
            />

            {/* Customer Information */}
            <BookingCustomerDetails bookingDetails={bookingDetails} />
          </div>
        </CustomModal.Body>
      </CustomModal>
    </>
  );
};

export default ViewBookingDetails;
