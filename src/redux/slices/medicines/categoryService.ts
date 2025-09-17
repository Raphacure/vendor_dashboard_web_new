import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { post, put, get } from "@/lib/helpers";

export const getAllCategoriesAPI = createAsyncThunk(
  "category/getAllCategoriesAPI",
  async () => await get(`${SERVER_IP}/api/v1/category`)
);

export const getAllCategoriesNewAPI = createAsyncThunk(
  "category/getAllCategoriesNewAPI",
  async (prop: { page?: number; count?: number; section_name: any }) =>
    await get(
      `${SERVER_IP}/api/v1/category?page=${prop?.page ?? 1}&count=${
        prop?.count || 10
      }&section_name=${prop?.section_name || null}`
    )
);

export const addCategoryAPI = createAsyncThunk(
  "category/addCategoryAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/category`, body)
);

export const deleteCategoryAPI = createAsyncThunk(
  "category/deleteCategoryAPI",
  async (id: any) => await put(`${SERVER_IP}/api/v1/category/delete/${id}`)
);

export const updateCategoryAPI = createAsyncThunk(
  "category/updateCategoryAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/category/${body?.id}`, body?.payload)
);

export const toggleStatusAPI = createAsyncThunk(
  "category/toggleStatusAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/category/${body?.id}/toggle`, body?.payload)
);
