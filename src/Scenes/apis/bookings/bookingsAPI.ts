import { SERVER_IP } from "@/lib/config";
import { post } from "@/lib/helpers";
import { BookingQueryParams } from "./bookingsAPI.types";

export const getAllBookingsAPI = (
  queryParams: BookingQueryParams,
  { signal }: { signal?: AbortSignal } 
) => {
  return post(
    `${SERVER_IP}/api/v1/booking/getBookings?marketplace_name=raphacure`,
    {
      filters: {
        searchText: queryParams.searchText,
        from: queryParams.from,
        count: queryParams.pageSize,
        page: queryParams.page,
        id: queryParams.id,
        status: queryParams.status,
        ...(queryParams.dateRange ? { dateRange: queryParams.dateRange } : {}),
      },
    },
    { signal }
  );
};
