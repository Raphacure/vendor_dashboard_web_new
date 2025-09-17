import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, post } from "@/lib/helpers";
import { ReportsSummaryResponse } from "./reports.types";

export const clientWalletReportsAPI = createAsyncThunk(
  "reports/clientWalletReportsAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/client/client-wallets-reports?page=1&count=500&client_id=${body.clientId}`
    )
);

export const clientRecentTransationsAPI = createAsyncThunk(
  "reports/clientRecentTransations",
  async (body: { clientId: string | number; page: number; count: number ; type?:string}) =>
    await get(
      `${SERVER_IP}/api/v1/statistics/latest-wallet-bookings?client_id=${body?.clientId}&type=${body?.type ?? ""}&page=${body?.page}&count=${body?.count}`
    )
);

export const clientServiceReportsAPI = createAsyncThunk(
  "reports/clientServiceReportsAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/statistics/booking-metrics?page=1&count=500&client_id=${body.clientId}`
    )
);

export const clientEmployeeStatisticsAPI = createAsyncThunk(
  "reports/employeeStatisticsAPI",
  async (body: { client_id: string | number }) =>
    await get(
      `${SERVER_IP}/api/v1/statistics/employee-engagement?client_id=${body?.client_id}`
    )
);

export const typeWiseReportsAPI = createAsyncThunk(
  "reports/typeWiseReportsAPI",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/wallet/type-wise-reports?page=1&count=500&client_id=${body.clientId}`
    )
);
export const healthMetricsAPI = createAsyncThunk(
  "reports/healthMetricsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/statistics/health-metrics`, body)
);

// /api/v1/statistics/active-clients-vendors
// /api/v1/statistics/gender-age
// /api/v1/statistics/pincode
// /api/v1/statistics/revenue

export const activeClientsVendorsAPI = createAsyncThunk(
  "reports/activeClientsVendorsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/statistics/active-clients-vendors`, body)
);

export const genderAgeAPI = createAsyncThunk(
  "reports/genderAgeAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/statistics/gender-age`, body)
);
export const pincodeReportsAPI = createAsyncThunk(
  "reports/pincodeReportsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/statistics/pincode`, body)
);
export const revenueReportsAPI = createAsyncThunk(
  "reports/revenueReportsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/statistics/revenue`, body)
);

export const roiAnalysisServicesSavingsAPI = createAsyncThunk(
  "reports/roiAnalysisServicesSavings",
  async (body: {clientId:string}):Promise<ReportsSummaryResponse> =>
    await get(`${SERVER_IP}/api/v1/statistics/roi-analysis?client_id=${body?.clientId}`)
);



// export const healthMetricsAPI = createAsyncThunk(
//   "reports/healthMetricsAPI",
//   async (body: any) => await post(`${SERVER_IP}/api/v1/statistics/health-metrics`, body)
// );
