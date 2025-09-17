import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllRfqs,
  getRfqById,
  negotiateRfqStatus,
  toggleRfqStatus,
  getRFQTestsListAPI,
} from "./rfqService";

export interface ExtensionDashboardState {
  loading: boolean;
  error: any;
  rfqList: any;
  rfqTotalRecord: any;
  allRFQTestsList: any;
}

const initialState: ExtensionDashboardState = {
  loading: false,
  error: null,
  rfqList: [],
  allRFQTestsList: [],
  rfqTotalRecord: 0,
  // dailyRevenueInfo: [],
};

export const dashboardSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (
      state: ExtensionDashboardState,
      action: PayloadAction<boolean>
    ) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: ExtensionDashboardState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getAllRfqs.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllRfqs.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        console.log(action.payload?.data?.rfqs);

        state.rfqList = action.payload?.data?.rfqs ?? [];
        state.rfqTotalRecord = action.payload?.data?.RfqCount ?? 0;
      }
    );
    builder.addCase(
      getAllRfqs.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );

    // toggle
    builder.addCase(toggleRfqStatus.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      toggleRfqStatus.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
      }
    );
    builder.addCase(
      toggleRfqStatus.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );

    // nagotiate
    builder.addCase(negotiateRfqStatus.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      negotiateRfqStatus.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
      }
    );
    builder.addCase(
      negotiateRfqStatus.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );

    // rfq by id
    builder.addCase(getRfqById.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getRfqById.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
      }
    );
    builder.addCase(
      getRfqById.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );

    // grtRFQTestsListAPI
    builder.addCase(getRFQTestsListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getRFQTestsListAPI.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allRFQTestsList = action.payload.services;
      }
    );
    builder.addCase(
      getRFQTestsListAPI.rejected,
      (state: ExtensionDashboardState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
        state.allRFQTestsList = [];
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = dashboardSlice.actions;

export default dashboardSlice.reducer;
