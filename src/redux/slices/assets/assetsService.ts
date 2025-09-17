import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put , del } from "@/lib/helpers";

export const getAssets = createAsyncThunk(
  "assets/getAssets",
  async (body: any) => await post(`${SERVER_IP}/api/v1/assets/get`, body)
);

export const createAssets = createAsyncThunk(
  "assets/createAssets",
  async (body: any) => await post(`${SERVER_IP}/api/v1/assets/`, body)
);

export const updateAssets = createAsyncThunk(
  "assets/updateAssets",
  async (body: any) => await put(`${SERVER_IP}/api/v1/assets/${body?.id}`, body?.body)
);

export const deleteAssets = createAsyncThunk(
  "assets/deleteAssets",
  async (id: any) => await del(`${SERVER_IP}/api/v1/assets/${id}`)
);

export const createOrderAssets = createAsyncThunk(
  "assets/createAssets",
  async (body: any) => await post(`${SERVER_IP}/api/v1/assets/order`, body)
);

export const updateOrderAssets = createAsyncThunk(
  "assets/updateAssets",
  async (body: any) => await put(`${SERVER_IP}/api/v1/assets/order/${body?.id}`, body?.body)
);