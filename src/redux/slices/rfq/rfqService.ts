import { SERVER_IP } from "@/lib/config";
import { put, post } from "@/lib/helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "@/lib/helpers";


export const getAllRfqs = createAsyncThunk(
  "rfq/getAllRfqs",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/rfq?count=${body?.count ?? 10}&searchText=${
        body?.searchText ?? ""
      }&page=${body?.page ?? 1}&isSubscription=${
        body?.isSubscription
      }&clientId=${body?.clientId ?? ""}`
    )
);

export const getRfqById = createAsyncThunk(
  "rfq/getRfqById",
  async (id: any) => await get(`${SERVER_IP}/api/v1/rfq/${id}`)
);

export const toggleRfqStatus = createAsyncThunk(
  "rfq/toggleRfqStatus",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/rfq/${body?.id}/toggle/`, body?.data)
);

export const negotiateRfqStatus = createAsyncThunk(
  "rfq/negotiateRfqStatus",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/rfq/${body?.id}/negotiate/`, body?.data)
);

export const getRFQTestsListAPI = createAsyncThunk(
  "rfq/getRFQTestsListAPI",
  async () => await get(`${SERVER_IP}/api/v1/rfq/service`)
);
export const createNewRFQAPI = createAsyncThunk(
  "rfq/createNewRFQAPI",
  async (newRFQ: any) => await post(`${SERVER_IP}/api/v1/rfq`, newRFQ)
);
export const WellnesSubscriptionRFQAPI = createAsyncThunk(
  "rfq/WellnesSubscriptionRFQAPI",
  async (newRFQ: any) =>
    await post(`${SERVER_IP}/api/v1/rfq/create-wellness-subscriptions`, newRFQ)
);
