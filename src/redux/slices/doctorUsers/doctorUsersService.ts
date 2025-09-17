import { getAllDoctorsQuery } from "@/graphql/graphqlConfig";
import { SERVER_IP } from "@/lib/config";
import { del, get, post, put } from "@/lib/helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllAdmins = createAsyncThunk(
  "doctorUsers/getAllAdmins",
  async ({
    search,
    subRole,
    count,
    page,
  }: {
    search?: string | null;
    subRole?: string | null;
    count?: number;
    page?: number;
  }) =>
    await get(
      `${SERVER_IP}/api/v1/user/get-admins?subRole=${subRole ?? ""}&search=${
        search ?? ""
      }&count=${count}&page=${page}`
    )
);

export const getAllClientAssiocatedDoctors = createAsyncThunk(
  "doctorUsers/getClientAssiocatedDoctors",
  async ({
    clientId,
  }: {
    clientId: string;
  }) =>
    await get(
      `${SERVER_IP}/api/v1/client/${clientId}/associated-doctors?marketplace_name=raphacure`
    )
);

export const getDoctorUserDetailsAPI = createAsyncThunk(
  "doctorUsers/getadminDetails",
  async ({ id }: any) =>
    await get(`${SERVER_IP}/api/v1/user/getUser?user_id=${id}`)
);

export const softDeleteUserAPI = createAsyncThunk(
  "doctorUsers/softdeleteuser",
  async ({ id, payload }: any) =>
    await put(`${SERVER_IP}/api/v1/user/toggleStatus/${id}`, payload)
);

export const updateAdminUserAPI = createAsyncThunk(
  "doctorUsers/updateAdmin",
  async ({ id, payload }: any) => {
    await put(`${SERVER_IP}/api/v1/user/updateUserRole/${id}`, payload);
  }
);

export const getAllDoctors = createAsyncThunk(
  "Profile/getAllDoctors",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, getAllDoctorsQuery(body))
);

export const getDoctorDetailsByIdAPI = createAsyncThunk(
  "doctor/getDoctorDetailsByIdAPI",
  async (body: any) => {
    return await post(
      `${SERVER_IP}/api/v1/doctor/getAllDoctors?doctorId=${body?.id}`,
      body?.payload
    );
  }
);

export const getAllRaphaDoctorsAPI = createAsyncThunk(
  "doctor/getAllRaphaDoctorsAPI",
  async (body: any) => {
    return await post(`${SERVER_IP}/api/v1/doctor/getAllDoctors`, body);
  }
);

export const reassignDoctor = createAsyncThunk(
  "doctor/reassignDoctor",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/booking/${body?.bkId}/doctor`, body?.payload)
);
