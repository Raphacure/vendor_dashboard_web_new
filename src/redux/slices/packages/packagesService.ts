import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { patch, post, put, get } from "@/lib/helpers";
import {
  constructgetPackageDetailsQuery,
  getAllClients,
  getAllTests,
} from "@/graphql/graphqlConfig";

export const getAllPackages = createAsyncThunk(
  "package/getAllPackages",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/package/getPackages`, body)
);

export const getPackageDetailsAPI = createAsyncThunk(
  "package/getPackageDetails",
  async (filters:any) => await post(`${SERVER_IP}/api/v1/package/getPackageDetails?marketplace_name=raphacure`,filters)
);

export const getAllPackagesOfVendors = createAsyncThunk(
  "package/getAllPackagesOfVendors",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/package/getPackages`, body)
);

export const getAllClientsAPI = createAsyncThunk(
  "package/getAllClientsAPI",
  async () => await post(`${SERVER_IP}/graphql`, getAllClients)
);

export const addPackageAPI = createAsyncThunk(
  "package/addPackageAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/package`, body)
);

export const updatePackageAPI = createAsyncThunk(
  "package/updatePackageAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/package/${body?.id}`, body?.payload)
);

export const getAllTestsAPI = createAsyncThunk(
  "package/getAllTestsAPI",
  async (body: any) => await post(`${SERVER_IP}/graphql`, getAllTests(body))
);

export const assignTestsForPackageApi = createAsyncThunk(
  "vendor/assignTestsApi",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/package/${body?.id}/tests`, body?.payload)
);

export const assignVendorsForPackageApi = createAsyncThunk(
  "vendor/assignVendorsApi",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/package/${body?.id}/vendors`, body?.payload)
);

export const unlinkPackageOfVendor = createAsyncThunk(
  "vendor/unlinkPackageOfVendor",
  async (body: any) =>
    await patch(`${SERVER_IP}/api/v1/package/${body?.id}/unlink`, body?.payload)
);

export const linkedPackageOfVendor = createAsyncThunk(
  "vendor/linkedPackageOfVendor",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/package/get-vendors-by-package/${id}`)
);

export const togglePackageStatus = createAsyncThunk(
  "vendor/togglePackageStatus",
  async ({ body, id }: { id: any; body: any }) =>
    await put(`${SERVER_IP}/api/v1/package/${id}/toggle`, body)
);

export const getPackageInfoAPI = createAsyncThunk(
  "package/getPackageInfoAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, constructgetPackageDetailsQuery(body))
);

export const getPackageDetailsQueryAPI = createAsyncThunk(
  "package/getPackageDetailsQueryAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, constructgetPackageDetailsQuery(body))
);

export const getSimilarTest = createAsyncThunk(
  "labtest/getSimilarTest",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/test/similar?test_code=${body?.id}&section_name=${body?.section}`
    )
);

export const getSimilarMedicineAPI = createAsyncThunk(
  "labtest/getSimilarMedicineAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/medicine/get-similar-medicines?service_code=${body?.id}&count=${body?.count}`
    )
);

export const getSuggestedPackageAPI = createAsyncThunk(
  "package/getSuggestedPackageAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/package/suggested-packages`, body)
);

export const linkPackages = createAsyncThunk(
  "vendor/linkPackages",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/vendor/${body?.id}/link-packages/`, body?.payload)
);

export const linkTests = createAsyncThunk(
  "vendor/linkTests",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/vendor/${body?.id}/link-tests/`, body?.payload)
);

export const linkedTests = createAsyncThunk(
  "vendor/linkedTests",
  async ({id, testType} : {id: any, testType: any}) =>
    await get(`${SERVER_IP}/api/v1/vendor/${id}/linked-tests?testType=${testType}`)
);

export const linkedPackages = createAsyncThunk(
  "vendor/linkedPackages",
  async (id : any) =>
    await get(`${SERVER_IP}/api/v1/vendor/${id}/linked-packages/`)
);