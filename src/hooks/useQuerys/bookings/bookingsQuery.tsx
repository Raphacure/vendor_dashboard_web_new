import { getAllBookingsAPI } from "@/Scenes/apis/bookings/bookingsAPI";
import { BookingQueryParams, GetBookingsApiResponse, GetBookingsApiResponseError } from "@/Scenes/apis/bookings/bookingsAPI.types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";



export const useGetBookings = (
  queryParams: BookingQueryParams
): UseQueryResult<GetBookingsApiResponse, GetBookingsApiResponseError> => {
  const bookingQuery = useQuery<
    GetBookingsApiResponse,
    GetBookingsApiResponseError
  >({
    queryKey: ["bookings", queryParams],
    queryFn: ({ signal }) =>
      getAllBookingsAPI(queryParams,{signal}),
    enabled: !!queryParams.id,
    staleTime: 2000,
    retry: false,
  });

  useEffect(() => {
    if (bookingQuery.isError) {
      toast.error(bookingQuery.error?.message);
      console.log("error", bookingQuery.error?.message);
    }
  }, [bookingQuery.error, bookingQuery.isError]);

  return bookingQuery;
};