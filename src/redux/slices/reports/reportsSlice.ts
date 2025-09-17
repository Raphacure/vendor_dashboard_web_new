import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  clientWalletReportsAPI,
  typeWiseReportsAPI,
  healthMetricsAPI,
  activeClientsVendorsAPI,
  genderAgeAPI,
  pincodeReportsAPI,
  revenueReportsAPI,
  clientServiceReportsAPI,
  clientEmployeeStatisticsAPI,
  clientRecentTransationsAPI,
  roiAnalysisServicesSavingsAPI,
} from "./reportsService";
import { ReportsSummaryResponse } from "./reports.types";

export interface reportsDataState {
  loading: boolean;
  error: any;
  clientWalletsInfo: any;
  clientServiceReportsInfo: any;
  typeWiseReportInfo: any;
  healthMetricsInfo: any;
  activeClientsVendorsInfo?: any;
  genderAgeInfo?: any;
  pincodeReportsInfo?: any;
  revenueReportsInfo?: any;
  detailedServiceReport: {
    loading: boolean;
    error: any;
    data: any;
  };
  employeeStatisticsData: {
    loading: boolean;
    error: any;
    data: any;
  };
  recentTransactions: {
    loading: boolean;
    error: any;
    data: any;
  };
  roiAnalysisServicesSavings: {
    loading: boolean;
    error: any;
    data: ReportsSummaryResponse["data"];
  };
}

const initialState: reportsDataState = {
  loading: false,
  error: null,
  clientWalletsInfo: {},
  clientServiceReportsInfo: {},
  typeWiseReportInfo: {},
  healthMetricsInfo: {},
  activeClientsVendorsInfo: {},
  genderAgeInfo: {},
  pincodeReportsInfo: {},
  revenueReportsInfo: {},
  detailedServiceReport: {
    loading: false,
    error: null,
    data: {},
  },
  employeeStatisticsData: {
    loading: false,
    error: null,
    data: {},
  },
  recentTransactions: {
    loading: false,
    error: null,
    data: {},
  },
  roiAnalysisServicesSavings: {
    loading: false,
    error: null,
    data: {
      totalTimeSaving: 0,
      totalBokingsCount: 0,
      totalSavingAmoount: 0,
      virtualSavingsAmount: 0,
      virtualBookings: 0,
      virtualSavingTime: 0,
      homeVisitLabTestsCount: 0,
      homeVisitLabTestSavingAmount: 0,
      homeVisitLabTestSavingTime: 0,
    },
  },
};

export const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {
    setLoading: (state: reportsDataState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateErrorMessage: (
      state: reportsDataState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(
      clientWalletReportsAPI.pending,
      (state: reportsDataState) => {
        state.loading = true;
        state.error = null;
      }
    );
    builder.addCase(
      clientWalletReportsAPI.fulfilled,
      (state: reportsDataState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.clientWalletsInfo = action.payload?.data;
      }
    );
    builder.addCase(
      clientWalletReportsAPI.rejected,
      (state: reportsDataState, action: any) => {
        state.loading = false;
        state.clientWalletsInfo = {};
        state.error = action?.error?.message ?? "Something went wrong";
      }
    );
    // clientServiceReportsAPI
    builder.addCase(
      clientServiceReportsAPI.pending,
      (state: reportsDataState) => {
        state.loading = true;
        state.error = null;
        state.detailedServiceReport.loading = true;
        state.detailedServiceReport.error = null;
      }
    );
    builder.addCase(
      clientServiceReportsAPI.fulfilled,
      (state: reportsDataState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.clientServiceReportsInfo = action.payload?.data;
        state.detailedServiceReport.loading = false;
        state.detailedServiceReport.error = null;
        state.detailedServiceReport.data = action.payload?.data;
      }
    );
    builder.addCase(
      clientServiceReportsAPI.rejected,
      (state: reportsDataState, action: any) => {
        state.loading = false;
        state.clientServiceReportsInfo = {};
        state.error = action?.error?.message ?? "Something went wrong";
        state.detailedServiceReport.loading = false;
        state.detailedServiceReport.error =
          action?.error?.message ?? "Something went wrong";
        state.detailedServiceReport.data = {};
      }
    );

    builder.addCase(
      typeWiseReportsAPI.fulfilled,
      (state: reportsDataState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.typeWiseReportInfo = action.payload?.data;
      }
    );
    //healthMetricsAPI
    builder.addCase(
      healthMetricsAPI.fulfilled,
      (state: reportsDataState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.healthMetricsInfo = action.payload?.data;
      }
    );
    builder.addCase(
      activeClientsVendorsAPI.fulfilled,
      (state: reportsDataState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.activeClientsVendorsInfo = action.payload?.data;
      }
    );
    builder.addCase(
      genderAgeAPI.fulfilled,
      (state: reportsDataState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.genderAgeInfo = action.payload?.data;
      }
    );
    builder.addCase(
      pincodeReportsAPI.fulfilled,
      (state: reportsDataState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.pincodeReportsInfo = action.payload?.data;
      }
    );
    builder.addCase(
      revenueReportsAPI.fulfilled,
      (state: reportsDataState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.revenueReportsInfo = action.payload?.data;
      }
    );
    //

    //clientEmployeeStatisticsAPI
    builder.addCase(
      clientEmployeeStatisticsAPI.pending,
      (state: reportsDataState) => {
        state.employeeStatisticsData.loading = true;
        state.employeeStatisticsData.error = null;
      }
    );
    builder.addCase(
      clientEmployeeStatisticsAPI.fulfilled,
      (state: reportsDataState, action: PayloadAction<any>) => {
        state.employeeStatisticsData.loading = false;
        state.employeeStatisticsData.error = null;
        state.employeeStatisticsData.data = action.payload?.data;
      }
    );
    builder.addCase(
      clientEmployeeStatisticsAPI.rejected,
      (state: reportsDataState, action: any) => {
        state.employeeStatisticsData.loading = false;
        state.employeeStatisticsData.error =
          action?.error?.message ?? "Something went wrong";
        state.employeeStatisticsData.data = {};
      }
    );
    //

    //recentTransactions
    builder.addCase(
      clientRecentTransationsAPI.pending,
      (state: reportsDataState) => {
        state.recentTransactions.loading = true;
        state.recentTransactions.error = null;
      }
    );
    builder.addCase(
      clientRecentTransationsAPI.fulfilled,
      (state: reportsDataState, action: PayloadAction<any>) => {
        state.recentTransactions.loading = false;
        state.recentTransactions.error = null;
        state.recentTransactions.data = action.payload?.data?.data;
      }
    );
    builder.addCase(
      clientRecentTransationsAPI.rejected,
      (state: reportsDataState, action: any) => {
        state.recentTransactions.loading = false;
        state.recentTransactions.error =
          action?.error?.message ?? "Something went wrong";
        state.recentTransactions.data = {};
      }
    );

    //roiAnalysisServicesSavings
    builder.addCase(
      roiAnalysisServicesSavingsAPI.pending,
      (state: reportsDataState) => {
        state.roiAnalysisServicesSavings.loading = true;
        state.roiAnalysisServicesSavings.error = null;
      }
    );
    builder.addCase(
      roiAnalysisServicesSavingsAPI.fulfilled,
      (
        state: reportsDataState,
        action: PayloadAction<ReportsSummaryResponse>
      ) => {
        state.roiAnalysisServicesSavings.loading = false;
        state.roiAnalysisServicesSavings.error = null;
        state.roiAnalysisServicesSavings.data = action.payload?.data;
      }
    );
    builder.addCase(
      roiAnalysisServicesSavingsAPI.rejected,
      (
        state: reportsDataState,
        action: PayloadAction<ReportsSummaryResponse>
      ) => {
        state.roiAnalysisServicesSavings.loading = false;
        state.roiAnalysisServicesSavings.error =
          action?.payload?.message ?? "Something went wrong";
        state.roiAnalysisServicesSavings.data = {
          totalTimeSaving: 0,
          totalBokingsCount: 0,
          totalSavingAmoount: 0,
          virtualSavingsAmount: 0,
          virtualBookings: 0,
          virtualSavingTime: 0,
          homeVisitLabTestsCount: 0,
          homeVisitLabTestSavingAmount: 0,
          homeVisitLabTestSavingTime: 0,
        };
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = reportsSlice.actions;

export default reportsSlice.reducer;
