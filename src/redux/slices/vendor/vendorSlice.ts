import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllClinicsVendorsAPI,
} from "./vendorService";

export interface ExtensionDashboardState {
  loading: boolean;
  error: any;
  vendorsList: any;
  vendorsTotalRecord: number;
}

const initialState: ExtensionDashboardState = {
  loading: false,
  error: null,
  vendorsList: [],
  vendorsTotalRecord: 0,
};

export const VendorsSlice = createSlice({
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
    // get alll vendor
    builder.addCase(getAllClinicsVendorsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllClinicsVendorsAPI.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.vendorsList = action.payload?.doctorClinics ?? [];
        state.vendorsTotalRecord = action.payload?.doctorClinics?.length ?? 0;
      }
    );
    builder.addCase(
      getAllClinicsVendorsAPI.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = VendorsSlice.actions;

export default VendorsSlice.reducer;
