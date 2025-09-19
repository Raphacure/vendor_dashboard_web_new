import { SERVER_IP } from "@/lib/config";
import { post } from "@/lib/helpers";
import {
  GetBookingsApiResponse,
  GetBookingsApiResponseError,
} from "@/types/api/bookingsApi.types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { useEffect } from "react";
import toast from "react-hot-toast";

export interface BookingQueryParams {
  dateRange?:
    | {
        dateType: string;
        from: string;
        to: string;
      }
    | undefined;
  from: string;
  page: number;
  pageSize: number;
  status: string;
  id: string;
  searchText: string;
}

export const useGetBookings = (
  queryParams: BookingQueryParams
): UseQueryResult<GetBookingsApiResponse, GetBookingsApiResponseError> => {
  const bookingQuery = useQuery<
    GetBookingsApiResponse,
    GetBookingsApiResponseError
  >({
    queryKey: ["bookings", queryParams],
    queryFn: ({ signal }) =>
      post(
        `${SERVER_IP}/api/v1/booking/getBookings?marketplace_name=raphacure`,
        {
          filters: {
            searchText: queryParams.searchText,
            from: queryParams.from,
            count: queryParams.pageSize,
            page: queryParams.page,
            id: queryParams.id,
            status: queryParams.status,
            ...(queryParams.dateRange
              ? { dateRange: queryParams.dateRange }
              : {}),
          },
        },
        { signal }
      ),
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
