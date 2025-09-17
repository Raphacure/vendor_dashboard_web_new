import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, post, put, del, patch} from "@/lib/helpers";
import { getAllVendorsApiQueryInVenders, getAllVendorsByApiQueryInVenders } from "@/graphql/graphqlConfig";

export const getAllVendorsAPI = createAsyncThunk(
  "vendor/getAllVendorsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, getAllVendorsApiQueryInVenders(body))
);

export const getAllClinicsVendorsAPI = createAsyncThunk(
  "doctor/getAllClinicsVendorsAPI",
  async ({ id, search, pincode, city, type }: any) =>
    await get(
      `${SERVER_IP}/api/v1/doctor/clinics/${id}?search=${
        search || ""
      }&pincode=${pincode || ""}&city=${city || ""}&type=${type || ""}`
    )
);

export const getAllAddressByUserId = createAsyncThunk(
  "vendor/getAllAddressByUserId",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/user/userAddresses?user_id=${id}`)
);

export const getAllCommonVendorsAPI = createAsyncThunk(
  "vendor/getAllCommonVendorsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/vendor/get-vendors`, body)
);

export const getAllVendorsRestAPI = createAsyncThunk(
  "vendor/getAllVendorsRestAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/vendor/get-all-vendors?marketplace_name=raphacure`, body)
);



export const getAllUniqueCity = createAsyncThunk(
  "vendor/getAllUniqueCity",
  async () => await get(`${SERVER_IP}/api/v1/vendor/all-cities`)
);

export const addVendorAPI = createAsyncThunk(
  "vendor/addVendorAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/vendor`, body)
);

export const getVendorDetailsByIdAPI = createAsyncThunk(
  "vendor/getVendorDetailsByIdAPI",
  async (id: any) =>
    await post(`${SERVER_IP}/graphql`, getAllVendorsByApiQueryInVenders(id))
);

export const updateVendorAPI = createAsyncThunk(
  "vendor/updateVendorAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/vendor/${body?.id}`, body?.payload)
);

export const updateSpocContactDetails = createAsyncThunk(
  "vendor/updateSpocContactDetails",
  async ({ body, id }: { id: any; body: any }) =>
    await put(`${SERVER_IP}/api/v1/vendor/${id}/spoc-contact-details`, body)
);

export const getVendorHistoryByIdAPI = createAsyncThunk(
  "vendor/getVendorHistoryByIdAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/history?id=${body?.id}&type=${body?.section_name}`
    )
);

export const bulkUpdatePackageVendor = createAsyncThunk(
  "vendor/bulkUpdatePackageVendor",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/package/${body?.id}/bulk-update-vendors`, body?.payload)
);

export const bulkUpdateTestVendor = createAsyncThunk(
  "vendor/bulkUpdateTestVendor",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/test/${body?.id}/bulk-update-vendors`, body?.payload)
);


export const getVendorTimeSlots = createAsyncThunk(
  "vendor/getVendorTimeSlots",
  async({date,vendorId}:any)=>{
    return await patch(`${SERVER_IP}/api/v1/timeslot/vendor`,{date,vendorId})
  }
)