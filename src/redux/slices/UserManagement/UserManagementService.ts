import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { post, put, get, del, patch } from "@/lib/helpers";
export const createUserAPI = createAsyncThunk(
  "reports/createUserAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/user/create`, body)
);
export const getUserDetailsAPI = createAsyncThunk(
  "reports/getUserDetailsAPI",
  async (iID: any) => await get(`${SERVER_IP}/api/v1/user/${iID}`)
);

export const updateUserDetailsAPI = createAsyncThunk(
  "reports/updateUserDetailsAPI",
  async ({ body, id }: { body: any; id: number }) =>
    await put(`${SERVER_IP}/api/v1/user/update/${id}`, body)
);
export const getAllUsers = createAsyncThunk(
  "reports/getAllUsers",
  async (body: getAllUserDto) =>
    await get(
      `${SERVER_IP}/api/v1/user/get-all?limit=${body?.limit ?? 10}&page=${
        Number(body?.page ?? 1) - 1
      }&search=${body?.search}${body?.role ? `&role=${body?.role}` : ""}`
    )
);

export const deleteUser = createAsyncThunk(
  "reports/deleteUser",
  async (id: any) => await del(`${SERVER_IP}/api/v1/user/${id}`)
);

export const getUserSubRolesAPI = createAsyncThunk(
  "user/getUserSubRoles",
  async () => await get(`${SERVER_IP}/api/v1/filter/subRoles`)
);

export const getAllAdmins = createAsyncThunk(
  "reports/getAllAdmins",
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

export const addNewAdmin = createAsyncThunk(
  "reports/addNewAdmin",
  async (body: any) => await post(`${SERVER_IP}/api/v1/user/create`, body)
);

export const updateAdmin = createAsyncThunk(
  "reports/updateAdmin",
  async (body: any) => {
    const id = body?.id;
    delete body?.id;
    await put(`${SERVER_IP}/api/v1/user/updateUserRole/${id}`, body);
  }
);

export const deleteAdmin = createAsyncThunk(
  "reports/deleteAdmin",
  async (body: any) =>
    await del(`${SERVER_IP}/api/v1/user/adminRole/${body?.id}`)
);

export const updatePasswordAdmin = createAsyncThunk(
  "reports/updatePasswordAdmin",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/user/updatePassword`, body)
);

export const createBulkPromotionalDataAPI = createAsyncThunk(
  "auth/createBulkPromotionalDataAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/promotions`, body)
);

export const allBulkPromotionalDataAPI = createAsyncThunk(
  "auth/allBulkPromotionalDataAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/promotions?page=${body?.pageNo}&count=${body?.pageSize}`
    )
);

type getAllUserDto = {
  limit?: number;
  page?: number;
  search?: string;
  role?: string;
};
