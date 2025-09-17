import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getDashboardInfo,
  // getMyBookingsAPI,
  getAllBookingListAPI,
  getAllAppointmentsListAPI,
} from "./dashboardService";
import { DashboardData, DashboardResponse } from "./dashboard.types";

export interface DashboardState {
  loading: boolean;
  error: any;
  myBookings: any;
  dashboardInfo: {
    loading: boolean;
    error: any;
    data: DashboardData;
  };
  bookingsList: any;
  appointmentsList: any;
}
const initialState: DashboardState = {
  loading: false,
  error: null,
  myBookings: {},
  dashboardInfo: {
    loading: false,
    error: null,
    data: {
      bookings: [],
      genderCounts: [],
    },
  },
  bookingsList: {},
  appointmentsList: {},
};

export const dashboardSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: DashboardState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: DashboardState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    // builder.addCase(getMyBookingsAPI.pending, (state: any) => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(
    //   getMyBookingsAPI.fulfilled,
    //   (state: DashboardState, action: PayloadAction<any>) => {
    //     state.error = null;
    //     state.loading = false;
    //     state.myBookings = action.payload?.data;
    //   }
    // );
    // builder.addCase(
    //   getMyBookingsAPI.rejected,
    //   (state: DashboardState, action: any) => {
    //     console.log({ action });
    //     state.loading = false;
    //     state.error = action.error?.message ?? "Something went wrong";
    //   }
    // );
    //getAllSubscriptions
    builder.addCase(getDashboardInfo.pending, (state: DashboardState) => {
      state.dashboardInfo.loading = true;
      state.dashboardInfo.error = null;
    });
    builder.addCase(
      getDashboardInfo.fulfilled,
      (state: DashboardState, action: PayloadAction<DashboardResponse>) => {
        state.dashboardInfo.error = null;
        state.dashboardInfo.loading = false;
        state.dashboardInfo.data = action.payload?.data;
      }
    );
    builder.addCase(
      getDashboardInfo.rejected,
      (state: DashboardState, action: PayloadAction<DashboardResponse>) => {
        state.dashboardInfo.loading = false;
        state.dashboardInfo.error =
          action.payload?.message ?? "Something went wrong";
      }
    );

    builder.addCase(getAllBookingListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllBookingListAPI.fulfilled,
      (state: DashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.bookingsList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllBookingListAPI.rejected,
      (state: DashboardState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

    builder.addCase(getAllAppointmentsListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllAppointmentsListAPI.fulfilled,
      (state: DashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.appointmentsList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllAppointmentsListAPI.rejected,
      (state: DashboardState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = dashboardSlice.actions;

export default dashboardSlice.reducer;
