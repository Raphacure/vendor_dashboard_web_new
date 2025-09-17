import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAttendanceHistorySuperAdmin,
  getTodaysAttendance,
  markAttendance,
} from "./attendanceService";

export interface AuthState {
  loading: boolean;
  todaysAttendance: {
    checkInTime: string | null;
    checkOutTime: string | null;
  };
  fullAttendnceData: any;
  error: any;
}
const initialState: AuthState = {
  loading: false,
  error: null,
  fullAttendnceData: {},
  todaysAttendance: {
    checkInTime: null,
    checkOutTime: null,
  },
};

export const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getTodaysAttendance.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getTodaysAttendance.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.todaysAttendance = {
          checkInTime: action?.payload?.data?.check_in,
          checkOutTime: action?.payload?.data?.check_out,
        };
      }
    );
    builder.addCase(
      getTodaysAttendance.rejected,
      (state: AuthState, action: any) => {
        state.loading = false;
        // console.log("action", action);
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

    builder.addCase(markAttendance.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      markAttendance.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
      }
    );
    builder.addCase(
      markAttendance.rejected,
      (state: AuthState, action: any) => {
        state.loading = false;
        console.log("action", action);
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

    builder.addCase(getAttendanceHistorySuperAdmin.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAttendanceHistorySuperAdmin.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.fullAttendnceData = action?.payload?.data?.data;
      }
    );
    builder.addCase(
      getAttendanceHistorySuperAdmin.rejected,
      (state: AuthState, action: any) => {
        state.loading = false;
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

// export const {} = attendanceSlice.actions;

export default attendanceSlice.reducer;
