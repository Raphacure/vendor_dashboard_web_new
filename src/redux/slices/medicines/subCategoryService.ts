import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { post, put, get, del } from "@/lib/helpers";

export const getAllSubCategoriesAPI = createAsyncThunk(
  "subCategory/getAllSubCategoriesAPI",
  async () => await get(`${SERVER_IP}/api/v1/medicines`)
);

export const addSubCategoryAPI = createAsyncThunk(
  "subCategory/addSubCategoryAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/category/subcategory`, body)
);

export const deleteSubCategoryAPI = createAsyncThunk(
  "subCategory/deleteSubCategoryAPI",
  async (id: any) => await del(`${SERVER_IP}/api/v1/category/subCategory/${id}`)
);

export const updateSubCategoryAPI = createAsyncThunk(
  "subCategory/updateSubCategoryAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/category/subcategory/${body?.id}`, body?.payload)
);

export const toggleStatusAPI = createAsyncThunk(
  "subCategory/toggleStatusAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/subCategory/${body?.id}/toggle`, body?.payload)
);
