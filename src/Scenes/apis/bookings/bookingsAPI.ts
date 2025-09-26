import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put } from "@/lib/helpers";
import { BookingQueryParams, getAttachmentSignedUrlAPIPayload, GetBkReportPresignedAPIPayload, GetBkReportUploadVerifyAPIPayload, getBookingByIdParams, UpdateBookingStatusApiPayload } from "./bookingsAPI.types";

export const getAllBookingsAPI = (
  queryParams: BookingQueryParams,
  options?: { signal?: AbortSignal }
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
    options
  );
};

export const getBookingByIdAPI = (
  { id }: getBookingByIdParams,
  options?: { signal?: AbortSignal }
) => {
  return get(`${SERVER_IP}/api/v1/booking/getBookingById/${id}`, options);
};


export const updateBookingStatusAPI = async (
  body: UpdateBookingStatusApiPayload,
  options?: { signal?: AbortSignal }
) =>
  await patch(
    `${SERVER_IP}/api/v1/booking/status/vendor?marketplace_name=raphacure`,
    body,
    options
  );

  export const getBkReportPresignedAPI = (
    body: GetBkReportPresignedAPIPayload,
    options?: { signal?: AbortSignal }
  ) => {
    return put(`${SERVER_IP}/api/v1/booking/${body?.id}/presign`, body?.payload,options)
  }

  export const getBkReportUploadVerifyAPI = (
    body: GetBkReportUploadVerifyAPIPayload,
    options?: { signal?: AbortSignal }
  ) => {
    return put(`${SERVER_IP}/api/v1/booking/attachment/${body?.id}/verify`,undefined,options);
  }

  export const getAttachmentSignedUrlAPI = ({id}:getAttachmentSignedUrlAPIPayload)=>{
    return get(`${SERVER_IP}/api/v1/booking/attachment/${id}/signed`);
  }