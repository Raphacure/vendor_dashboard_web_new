import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put } from "@/lib/helpers";
import {
  getAllAttachments,
  getAllMedicinesQuery,
  getAllTestsQuery,
} from "@/graphql/graphqlConfig";

export const getAllMedicinesAPI = createAsyncThunk(
  "auth/getAllMedicinesAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(getAllMedicinesQuery))
);

export const getAllTestsAPI = createAsyncThunk(
  "auth/getAllTestsAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(getAllTestsQuery))
);

export const getPrescriptionDataAPI = createAsyncThunk(
  "auth/getPrescriptionDataAPI",
  async (id: any) =>
    await get(
      `${SERVER_IP}/api/v1/prescription/getPrescription?bookingId=${id}`
    )
);

export const googleSearchAPI = createAsyncThunk(
  "auth/googleSearchAPI",
  async (query: any) =>
    await get(`${SERVER_IP}/api/v1/filter/suggestions/?q=${query}`)
);

export const googleTranslateAPI = createAsyncThunk(
  "auth/googleTranslateAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/filter/googleTranslation?q=${body?.query}&tl=${body?.targetLang}`
    )
);

export const uploadPdfPrescription = createAsyncThunk(
  "auth/uploadPdfPrescription",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/prescription/uploadPrescription`, body)
);

export const generateDietPlan = createAsyncThunk(
  "openai/generateDietPlan",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/openAi/generate-diet-plan`, body)
);

export const createBkDiet = createAsyncThunk(
  "diet/createBkDiet",
  async (body: any) => await post(`${SERVER_IP}/api/v1/diet`, body)
);

export const getBkDiet = createAsyncThunk(
  "diet/getBkDiet",
  async (id: any) => await get(`${SERVER_IP}/api/v1/diet/${id}`)
);

export const getAllMedicinesNewAPI = createAsyncThunk(
  "medicine/getmedicines",
  async({searchText,count=10,page=1}:{searchText:string,count:number,page:number})=>{
    return post(`${SERVER_IP}/api/v1/medicine/getmedicines?marketplace_name=raphacure`,{
      filters:{
        status:"active",
        searchText,
        count:count,
        page:page
      }
    })
  }
)

export const getAllPrescriptionsAPI = createAsyncThunk(
  "auth/getAllPrescriptionsAPI",
  async ({
    endDate,
    searchText,
    startDate,
    isDoctorUploaded,
  }: {
    searchText: any;
    startDate?: any;
    endDate?: any;
    isDoctorUploaded?: any;
  }) =>
    await post(
      `${SERVER_IP}/graphql`,
      getAllAttachments(searchText, true, startDate, endDate, isDoctorUploaded)
    )
);

export const getBkReportPresignedAPI = createAsyncThunk(
  "auth/getBkReportPresignedAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/booking/${body?.id}/presign`, body?.payload)
);

export const getBkReportUploadVerifyAPI = createAsyncThunk(
  "auth/getBkReportUploadVerifyAPI",
  async (id: any) =>
    await put(`${SERVER_IP}/api/v1/booking/attachment/${id}/verify`)
);