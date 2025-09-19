import { createAsyncThunk } from "@reduxjs/toolkit";
import { patch, post } from "@/lib/helpers";
import { SERVER_IP } from "@/lib/config";
import axios from "axios";
import { LoginResponseApi } from "@/types/api/authapi.types";

export const loginUser = createAsyncThunk<LoginResponseApi,{
      email: string;
      password: string;
      role: string;
    }>(
  "auth/loginUser",
  async (
    payload,
    thunkAPI
  ) => {
    try {
      return await post(`${SERVER_IP}/api/v1/auth/login`, payload,{signal:thunkAPI.signal})
    } catch (error) {
      if(axios.isCancel(error)){
        return thunkAPI.rejectWithValue("Request aborted");
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getS3PresignedUrl = createAsyncThunk(
  "auth/getS3PresignedUrl",
  async (body: any) => await patch(`${SERVER_IP}/api/v1/config/presign`, body)
);
