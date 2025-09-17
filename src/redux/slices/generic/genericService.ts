import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put } from "@/lib/helpers";
import {
  getEyeHospitalsQuery,
  getEyeCategoriesQuery,
  getGymCategoriesQuery,
  getGymVendorsQuery,
} from "@/graphql/graphqlConfig";

export const getEyeCategoriesAPI = createAsyncThunk(
  "auth/getEyeCategoriesAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getEyeCategoriesQuery(body))
    )
);

export const getRfqById = createAsyncThunk(
  "rfq/getRfqById",
  async (id: any) => await get(`${SERVER_IP}/api/v1/rfq/${id}`)
);

export const getRFQListAPI = createAsyncThunk(
  "auth/getRFQListAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/rfq?searchText=${body?.searchText || ""}&count=${
        body?.count
      }&page=${body?.page}`
    )
);

export const getEyeHospitalsAPI = createAsyncThunk(
  "auth/getEyeHospitalsAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getEyeHospitalsQuery(body))
    )
);

export const getAmbulanceList = createAsyncThunk(
  "auth/getAmbulanceList",
  async (body: any) => await patch(`${SERVER_IP}/api/v1/test/ambulance`, body)
);
export const getGymVendorsAPI = createAsyncThunk(
  "auth/getGymVendorsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(getGymVendorsQuery(body)))
);
export const getCategoriesAPI = createAsyncThunk(
  "auth/getCategoriesAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getGymCategoriesQuery(body))
    )
);

export const getUniversalSearchData = createAsyncThunk(
  "auth/getUniversalSearchData",
  async (body: any) => {
    let url = `${SERVER_IP}/api/v1/config/search`;
    if (body?.type) {
      url += `?type=${body?.type}`;
      const payload = {
        searchText: body?.searchText,
      };
      return await post(url, payload);
    } else {
      return await post(url, body);
    }
  }
);

export const getReportOrderAPI = createAsyncThunk(
  "auth/getReportOrderAPI",
  async (bookingId: any) =>
    await get(`${SERVER_IP}/api/v1/booking/${bookingId}/additional`)
);

export const negotiateRFQAPI = createAsyncThunk(
  "Profile/negotiateRFQAPI",
  async (negotiateObj: any) =>
    await put(
      `${SERVER_IP}/api/v1/rfq/${negotiateObj?.id}/negotiate`,
      negotiateObj
    )
);

export const toggleRfqStatus = createAsyncThunk(
  "rfq/toggleRfqStatus",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/rfq/${body?.id}/toggle/`, body?.data)
);

export const WellnesSubscriptionRFQAPI = createAsyncThunk(
  "rfq/WellnesSubscriptionRFQAPI",
  async (newRFQ: any) =>
    await post(`${SERVER_IP}/api/v1/rfq/create-wellness-subscriptions`, newRFQ)
);

export const createNewRFQAPI = createAsyncThunk(
  "Profile/createNewRFQAPI",
  async (newRFQ: any) => await post(`${SERVER_IP}/api/v1/rfq`, newRFQ)
);

export const getRFQTestsListAPI = createAsyncThunk(
  "auth/getRFQTestsListAPI",
  async () => await get(`${SERVER_IP}/api/v1/rfq/service`)
);