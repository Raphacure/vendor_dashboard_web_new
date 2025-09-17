import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, post, put } from "@/lib/helpers";

export const getAllTickets = createAsyncThunk(
  "reports/getAllTickets",
  async (body: any) => await post(`${SERVER_IP}/api/v1/tickets/get-all`, {filters: body})
);

export const createTickets = createAsyncThunk(
  "reports/createTickets",
  async (body: any) => await post(`${SERVER_IP}/api/v1/tickets/create`,  body)
);

export const updateTickets = createAsyncThunk(
  "reports/updateTickets",
  async (body: any) => await put(`${SERVER_IP}/api/v1/tickets/update/${body?.id || ""}`,  body?.body)
);
