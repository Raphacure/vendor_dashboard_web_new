import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, post, put } from "@/lib/helpers";

import {
  constructAllAppointmentsQuery,
  constructAllBookingQuery,
  getBookingIdDetails,
} from "@/graphql/graphqlConfig";
import { DashboardResponse } from "./dashboard.types";

export const getDashboardInfo = createAsyncThunk(
  "auth/getDashboardInfo",
  async ({ clientId }: { clientId: string }): Promise<DashboardResponse> =>
    await get(`${SERVER_IP}/api/v1/dashboard/hr?client_id=${clientId}`)
);

// export const getMyBookingsAPI = createAsyncThunk(
//   "auth/getMyBookingsAPI",
//   async (count: any) =>
//     await post(
//       `${SERVER_IP}/graphql`,
//       JSON.stringify(constructBookingQuery(count))
//     )
// );

export const getAllBookingListAPI = createAsyncThunk(
  "auth/getAllBookingListAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructAllBookingQuery(body.count, body.status))
    )
);

export const getAllAppointmentsListAPI = createAsyncThunk(
  "auth/getAllAppointmentsListAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructAllAppointmentsQuery(body))
    )
);

export const getBookingDetailsAPI = createAsyncThunk(
  "auth/getBookingDetailsAPI",
  async (bookingId: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getBookingIdDetails(bookingId))
    )
);

export const getBookingWithFiltersAPI = createAsyncThunk(
  "booking/filters",
  async (body: any) => {
    const limited_fields = body?.limited_fields
    delete body?.limited_fields
    return await post(`${SERVER_IP}/api/v1/booking/getBookings?limited_fields=${!limited_fields ? "true" : "false"}`, body);
  }
);

// export const signUpUser = createAsyncThunk(
//   "auth/signUpUser",
//   async (body: any) => await post(`${SERVER_IP}/auth/register`, body)
// );
// export const updateUserDetails = createAsyncThunk(
//   "auth/updateUserDetails",
//   async (body: any) => await put(`${SERVER_IP}/user/update`, body)
// );
// export const getAllSubscriptions = createAsyncThunk(
//   "auth/getAllSubscriptions",
//   async () => await get(`${SERVER_IP}/api/v1/wallet`)
// );

// export const getMyPackageDetailsAPI = createAsyncThunk(
//   "auth/getMyPackageDetailsAPI",
//   async () => await post(`${SERVER_IP}/graphql`, JSON.stringify(getMyPackageDetailsQuery()))
// );

export const startRecordingAPI = createAsyncThunk(
  "auth/startRecordingAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/zegocloud/startRecording`, body)
);

export const getBookingStatusAPI = createAsyncThunk(
  "auth/getBookingStatusAPI",
  async (type: any) =>
    await get(`${SERVER_IP}/api/v1/config/bookingstatuses?type=${type}`)
);

export const updateBookingStatusAPI = createAsyncThunk(
  "auth/updateBookingStatusAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/bookingStatus/${body?.id}`,
      body?.bookingObj
    )
);
