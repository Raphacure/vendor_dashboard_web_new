import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllClientPackagesAPI } from "./clientPackagesService";
import { GetAllClientPackagesResponse } from "./clientPackages.types";

export interface ClientPackagesState {
  clientPackages: {
    loading: boolean;
    error: any;
    packages: any[];
    totalPackages?: number;
  }
}

const initialState: ClientPackagesState = {
  clientPackages:{
    loading: false,
    error: null,
    packages: [],
  }
};

export const packageSlice = createSlice({
  name: "clientPackages",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getAllClientPackagesAPI.pending, (state: ClientPackagesState) => {
      state.clientPackages.loading = true;
    });
    builder.addCase(
      getAllClientPackagesAPI.rejected,
      (state: ClientPackagesState, action: PayloadAction<GetAllClientPackagesResponse>) => {
        state.clientPackages.loading = false;
        state.clientPackages.error = action.payload.message || "Error";
      }
    );
    builder.addCase(
      getAllClientPackagesAPI.fulfilled,
      (state: ClientPackagesState, action: PayloadAction<GetAllClientPackagesResponse>) => {
        state.clientPackages.loading = false;
        state.clientPackages.error = null;
        state.clientPackages.packages = action.payload?.data?.package_requests
        state.clientPackages.totalPackages = parseInt(action.payload?.data?.total)
      }
    );
  },
});


export default packageSlice.reducer;
