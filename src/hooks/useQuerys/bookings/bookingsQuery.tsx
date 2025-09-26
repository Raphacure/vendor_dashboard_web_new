import { getAllBookingsAPI, getBookingByIdAPI } from "@/Scenes/apis/bookings/bookingsAPI";
import { BookingQueryParams, getBookingByIdApiResponse, getBookingByIdApiResponseError, getBookingByIdParams, GetBookingsApiResponse, GetBookingsApiResponseError } from "@/Scenes/apis/bookings/bookingsAPI.types";
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
    placeholderData: (prev) => prev,
  });

  useEffect(() => {
    if (bookingQuery.isError) {
      toast.error(bookingQuery.error?.message);
      console.log("error", bookingQuery.error?.message);
    }
  }, [bookingQuery.error, bookingQuery.isError]);

  return bookingQuery;
};


export const useGetBookingsById = (
  queryParams: getBookingByIdParams
): UseQueryResult<getBookingByIdApiResponse, getBookingByIdApiResponseError> => {
  const bookingQuery = useQuery<
    getBookingByIdApiResponse,
    getBookingByIdApiResponseError
  >({
    queryKey: ["bookingsbyid", queryParams?.id],
    queryFn: ({ signal }) =>
      getBookingByIdAPI(queryParams,{signal}),
    enabled: !!queryParams.id,
    staleTime: 2000,
    retry: false,
    placeholderData: (prev) => prev,
  });

  useEffect(() => {
    if (bookingQuery.isError) {
      toast.error(bookingQuery.error?.message);
      console.log("error", bookingQuery.error?.message);
    }
  }, [bookingQuery.error, bookingQuery.isError]);

  return bookingQuery;
};


