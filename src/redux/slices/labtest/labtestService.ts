import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put } from "@/lib/helpers";
import {
  healthCategories,
  labtestPackages,
  pharmacyCategories,
  getAllAssignedVendors,
} from "@/graphql/graphqlConfig";

export const getHealthCategoriesAPI = createAsyncThunk(
  "auth/getHealthCategoriesAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(healthCategories))
);

export const getAllSingleTests = createAsyncThunk(
  "package/getAllSingleTests",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/test/get-all-tests`, body)
);

export const getHealthPackagesAPI = createAsyncThunk(
  "auth/getHealthPackagesAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(labtestPackages))
);
export const getAllTestsAPI = createAsyncThunk(
  "auth/getAllTestsAPI",
  async (body: any) => {
    let query;
    if (body?.searchText) {
      query = `tests( type: "${body?.type}" , searchText:"${body?.searchText}")`;
    } else {
      query = `tests( type: "${body?.type}")`;
    }

    const response = await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify({
        query: `{
            ${query}{
              service_code,
              service_name,
              fasting,
              type
              price {
                actual_cost
                discount_percentage
                discounted_price
              },
              visit_type
            },
        }`,
      })
    );
    return {
      ...response,
    };
  }
);

export const getPharmacyCategoriesAPI = createAsyncThunk(
  "auth/getPharmacyCategoriesAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(pharmacyCategories))
);

export const getAllTests = createAsyncThunk(
  "Test/getAllTests",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/test/get-all-tests`, body)
);

export const updateTestsStatusCall = createAsyncThunk(
  "Test/updateTestsStatusCall",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/test/${body?.id}/toggle`, {
      active_status: body?.status,
    })
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

export const assignVendorsApi = createAsyncThunk(
  "vendor/assignVendorsApi",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/test/${body?.id}/vendors`, body?.payload)
);

export const createTestsCall = createAsyncThunk(
  "Test/createTestsCall",
  async (body: any) => await post(`${SERVER_IP}/api/v1/test`, body)
);

export const updateTestsCall = createAsyncThunk(
  "Test/updateTestsCall",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/test/${body?.id}`, body?.payload)
);

export const getAllAssignedVendorDetails = createAsyncThunk(
  "vendor/getAllAssignedVendorDetails",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, getAllAssignedVendors(body))
);

export const linkedPackageOfVendor = createAsyncThunk(
  "vendor/linkedPackageOfVendor",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/package/get-vendors-by-package/${id}`)
);