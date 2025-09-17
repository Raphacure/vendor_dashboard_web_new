import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put } from "@/lib/helpers";
import { getClientOrders } from "@/graphql/graphqlConfig";
import { ClientOrderResponse } from "./order.types";

export const getClientOrdersAPI = createAsyncThunk<
  ClientOrderResponse,
  { searchText: string; count: number; page: number }
>(
  "auth/getClientOrdersAPI",
  async (body) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getClientOrders(body.searchText, body.count, body.page))
    )
);

export const getClientOrdersWithoutStateAPI = createAsyncThunk<
  ClientOrderResponse,
  { searchText: string; count: number; page: number }
>(
  "auth/getClientOrdersWithoutStateAPI",
  async (body) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getClientOrders(body.searchText, body.count, body.page))
    )
);

export const createOrderAPI = createAsyncThunk(
  "auth/createOrderAPI",
  async (obj: any) => await post(`${SERVER_IP}/api/v1/order`, obj)
);

export const createBulkOrderAPI = createAsyncThunk(
  "auth/createBulkOrderAPI",
  async (obj: any) => await post(`${SERVER_IP}/api/v1/order/bulk-orders`, obj)
);

export const createNewOrderAPI = createAsyncThunk(
  "auth/createBulkOrderAPI",
  async (obj: any) => await post(`${SERVER_IP}/api/v1/order/create-order`, obj)
);
