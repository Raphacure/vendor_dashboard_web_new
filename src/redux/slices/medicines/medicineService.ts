import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { post, put, get, del } from "@/lib/helpers";
import {
  getAllMediciness,
  getAllVendorsApiQuery,
} from "@/graphql/graphqlConfig";
export const getAllMedicinesAPI = createAsyncThunk(
  "medicine/getAllMedicinesAPI",
  async (body: any) =>
    // await post(`${SERVER_IP}/graphql`, getAllMediciness(body))
    await post(`${SERVER_IP}/api/v1/medicine/getmedicines`, body)
);


export const raphaAssuredSimilarMedicineAPI = createAsyncThunk(
  "medicine/raphaAssuredSimilarMedicineAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/api/v1/medicine/raphaAssured-similar-medicines`,
      body
    )
);

export const addMedicineAPI = createAsyncThunk(
  "medicine/addMedicineAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/medicine`, body)
);

export const deleteMedicineAPI = createAsyncThunk(
  "medicine/deleteMedicineAPI",
  async (id: any) => await put(`${SERVER_IP}/api/v1/medicine/delete/${id}`)
);

export const updateMedicineAPI = createAsyncThunk(
  "medicine/updateMedicineAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/medicine/${body?.id}`, body?.payload)
);

export const toggleStatusAPI = createAsyncThunk(
  "medicine/toggleStatusAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/medicine/${body?.id}/toggle`, body?.payload)
);

export const getAllCategoriesAPI = createAsyncThunk(
  "category/getAllCategoriesAPI",
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
  async (id: any) => await del(`${SERVER_IP}/api/v1/category/${id}`)
);

export const updateCategoryAPI = createAsyncThunk(
  "category/updateCategoryAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/category/${body?.id}`, body?.payload)
);

export const getAllSubCategoriesAPI = createAsyncThunk(
  "subCategory/getAllSubCategoriesAPI",
  async (prop: { page?: number; count?: number; section_name: any }) =>
    await get(
      `${SERVER_IP}/api/v1/category/allsubcategory?page=${prop?.page}&count=${prop?.count}&section_name=${prop?.section_name}`
    )
);

export const getAllSubCategoriesByCateIDAPI = createAsyncThunk(
  "subCategory/getAllSubCategoriesByCateIDAPI",
  async (cID: any) =>
    await get(
      `${SERVER_IP}/api/v1/category/subcategory?categoryids=${cID?.toString()}`
    )
);

export const addSubCategoryAPI = createAsyncThunk(
  "subCategory/addSubCategoryAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/category/subcategory`, body)
);

export const deleteSubCategoryAPI = createAsyncThunk(
  "subCategory/deleteSubCategoryAPI",
  async (id: any) => await del(`${SERVER_IP}/api/v1/category/subCategory/${id}`)
);

export const updateSubCategoryAPI = createAsyncThunk(
  "subCategory/updateSubCategoryAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/category/subcategory/${body?.id}`,
      body?.payload
    )
);
export const updateCategoryAndSubCattoMedicine = createAsyncThunk(
  "subCategory/updateCategoryAndSubCattoMedicine",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/medicine/${body?.service_code}`,
      body?.payload
    )
);

export const getAllVendorsAPI = createAsyncThunk(
  "vendor/getAllVendorsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, getAllVendorsApiQuery(body))
);

export const getAllUniqueCategorySubCategoryAPI = createAsyncThunk(
  "uniqueCategorySubCategory/getAllUniqueCategorySubCategoryAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/category/getActiveCategories${
        body?.section_name ? `?section_name=${body?.section_name}` : ""
      }`
    )
);
export const getAllSpecializationCategoryAPI = createAsyncThunk(
  "uniqueCategorySubCategory/getAllSpecializationCategoryAPI",
  async (prop: { page?: number; count?: number; section_name: any; searchText?: any }) =>
    await get(
      `${SERVER_IP}/api/v1/category/getActiveCategories?page=${
        prop?.page ?? 1
      }&count=${prop?.count || 100}&section_name=${prop?.section_name || null}&searchText=${prop?.searchText || ""}`
    )
);

export const getAllManufacturerAPI = createAsyncThunk(
  "uniqueManufacture/getAllManufacturer",
  async () => await post(`${SERVER_IP}/api/v1/medicine/brands`, { filters: {} })
);

export const bulkUploadMedicine = createAsyncThunk(
  "medicine/bulkUploadMedicine",
  async (body: any) => await post(`${SERVER_IP}/api/v1/medicine/bulk`, body)
);
