import { createAsyncThunk } from "@reduxjs/toolkit";
import { patch, post } from "@/lib/helpers";
import { SERVER_IP } from "@/lib/config";
import axios from "axios";
import {
  LoginResponseApi,
  userLoginPayload,
} from "@/Scenes/apis/auth/authAPI.types";
import { loginUserAPI } from "@/Scenes/apis/auth/authAPI";

export const loginUser = createAsyncThunk<LoginResponseApi, userLoginPayload>(
  "auth/loginUser",
  async (payload, thunkAPI) => {
    try {
      return await loginUserAPI(payload, { signal: thunkAPI.signal });
    } catch (error) {
      if (axios.isCancel(error)) {
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
