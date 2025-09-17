import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put } from "@/lib/helpers";

export const getConfigInfoAPI = createAsyncThunk(
  "auth/getConfigInfoAPI",
  async () => await get(`${SERVER_IP}/api/v1/config`)
);
 
export const getSubdomainNames = createAsyncThunk(
  "auth/getSubdomainNames",
  async (sname:any) => await get(`${SERVER_IP}/api/v1/client/subdomain/${sname}`)
);
 