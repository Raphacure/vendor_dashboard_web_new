import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllPromotinalLogsAPI } from "./promotionalLogsService";

export interface promotionalLogsState {
  loading: boolean;
  error: any;
  promotionalLogs: any;
}

const initialState: promotionalLogsState = {
  loading: false,
  error: null,
  promotionalLogs: {},
};

export const promotionalLogsSlice = createSlice({
  name: "promotionsLogs",
  initialState,
  reducers: {
    setLoading: (
      state: promotionalLogsState,
      action: PayloadAction<boolean>
    ) => {
      state.loading = action.payload;
    },
    updateErrorMessage: (
      state: promotionalLogsState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getAllPromotinalLogsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllPromotinalLogsAPI.fulfilled,
      (state: promotionalLogsState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.promotionalLogs = action.payload?.data;
      }
    );
    builder.addCase(
      getAllPromotinalLogsAPI.rejected,
      (state: promotionalLogsState, action: any) => {
        state.loading = false;
        state.promotionalLogs = {};
        state.error = action?.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = promotionalLogsSlice.actions;

export default promotionalLogsSlice.reducer;
