import {
  VendorApiResponse,
  VendorErrorResponse,
} from "@/Scenes/apis/auth/authAPI.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getVendorDetailsThunk } from "./vendorService";

export interface AuthState {
  vendorDetails: {
    data: VendorApiResponse["data"]["vendorById"] | null;
    loading: boolean;
    error: any;
  };
}

const initialState: AuthState = {
  vendorDetails: {
    data: null,
    error: null,
    loading: false,
  },
};

export const authSlice = createSlice({
  name: "vendor",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    //vendor details
    builder.addCase(getVendorDetailsThunk.pending, (state: AuthState) => {
      state.vendorDetails.error = null;
      state.vendorDetails.loading = true;
    });
    builder.addCase(
      getVendorDetailsThunk.fulfilled,
      (state: AuthState, action: PayloadAction<VendorApiResponse>) => {
        state.vendorDetails.data = action.payload.data.vendorById;
        state.vendorDetails.loading = false;
      }
    );
    builder.addCase(
      getVendorDetailsThunk.rejected,
      (state: AuthState, action: PayloadAction<VendorErrorResponse>) => {
        state.vendorDetails.loading = false;
        state.vendorDetails.error =
          action.payload?.errors?.[0]?.message ?? "unknown error occured";
      }
    );
  },
});

export default authSlice.reducer;
