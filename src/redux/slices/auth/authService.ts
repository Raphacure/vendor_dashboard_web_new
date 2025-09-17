import { createAsyncThunk } from "@reduxjs/toolkit";
import { post, put, get, patch } from "@/lib/helpers";
import { SERVER_IP } from "@/lib/config";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  // async (body:any) => {
  //   return await post(`${SERVER_IP}/auth/login`, body);
  // }
  async (body: any) => await post(`${SERVER_IP}/api/v1/auth/login`, body)
);

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (body: any) => await post(`${SERVER_IP}/auth/register`, body)
);
export const updateUserDetails = createAsyncThunk(
  "auth/updateUserDetails",
  async (body: any) => await put(`${SERVER_IP}/user/update`, body)
);
export const requestOtpAPI = createAsyncThunk(
  "auth/requestOtpAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/auth/otp/request`, body)
);

export const validateOtpAPI = createAsyncThunk(
  "auth/validateOtpAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/auth/otp/verify`, body)
);
export const validateOtpNewAPI = createAsyncThunk(
  "auth/validateOtpNewAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/auth/otp/verify`, body)
);
export const checkSocialUserAPI = createAsyncThunk(
  "auth/checkSocialUserAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/auth/google`, body)
);
export const getStoreDetails = createAsyncThunk(
  "auth/getStoreDetails",
  async () => await get(`${SERVER_IP}/api/v1/auth/otp/verify`)
);
export const getSignedUrlApi = createAsyncThunk(
  "auth/getSignedUrlApi",
  async () => await get(`${SERVER_IP}/api/v1/auth/getSignedUrl`)
);
export const getSubDomainLoginDetails = createAsyncThunk(
  "auth/getSubDomainLoginDetails",
  async (body: any) =>
    await patch(
      `${SERVER_IP}/api/v1/auth/${body?.subDomain}/signon`,
      body?.data
    )
);

export const s3PresignAPI = createAsyncThunk(
  "auth/s3PresignAPI",
  async (body: any) => await patch(`${SERVER_IP}/api/v1/config/presign`, body)
);
export const getS3PresignedUrl = createAsyncThunk(
  "auth/getS3PresignedUrl",
  async (body: any) => await patch(`${SERVER_IP}/api/v1/config/presign`, body)
);