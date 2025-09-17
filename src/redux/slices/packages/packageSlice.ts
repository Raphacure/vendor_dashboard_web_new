import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  assignVendorsForPackageApi,
  getAllClientsAPI,
  getAllPackages,
  getAllPackagesOfVendors,
  getAllTestsAPI,
  linkedPackageOfVendor,
  togglePackageStatus,
  unlinkPackageOfVendor,
} from "./packagesService";

export interface PackagesState {
  loading: boolean;
  error: any;
  packages: any;
  selectedVendorPackages: any;
  selectedVendorPackagesTotal: any;
  clients: any;
  tests: any;
}

const initialState: PackagesState = {
  loading: false,
  error: null,
  packages: [],
  selectedVendorPackages: [],
  selectedVendorPackagesTotal: 0,
  clients: [],
  tests: [],
};

export const packagesSlice = createSlice({
  name: "packages",
  initialState,
  reducers: {
    setLoading: (state: PackagesState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: PackagesState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getAllPackages.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.packages = [];
    });
    builder.addCase(
      getAllPackages.fulfilled,
      (state: PackagesState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.packages = action.payload?.data;
      }
    );
    builder.addCase(
      getAllPackages.rejected,
      (state: PackagesState, action: any) => {
        state.loading = false;
        state.packages = [];
      }
    );

    // getAllPackagesOfVendors
    builder.addCase(getAllPackagesOfVendors.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.selectedVendorPackages = [];
    });
    builder.addCase(
      getAllPackagesOfVendors.fulfilled,
      (state: PackagesState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.selectedVendorPackages = action.payload?.data?.data;
        state.selectedVendorPackagesTotal =
          action.payload?.data?.pagination?.total;
      }
    );
    builder.addCase(
      getAllPackagesOfVendors.rejected,
      (state: PackagesState, action: any) => {
        state.loading = false;
        state.selectedVendorPackages = [];
      }
    );

    // All Clients
    builder.addCase(getAllClientsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.clients = [];
    });
    builder.addCase(
      getAllClientsAPI.fulfilled,
      (state: PackagesState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.clients = action.payload?.data?.clients;
      }
    );
    builder.addCase(
      getAllClientsAPI.rejected,
      (state: PackagesState, action: any) => {
        state.loading = false;
        state.clients = [];
      }
    );

    // All Tests
    builder.addCase(getAllTestsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.tests = [];
    });
    builder.addCase(
      getAllTestsAPI.fulfilled,
      (state: PackagesState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.tests = action.payload?.data?.tests;
      }
    );
    builder.addCase(
      getAllTestsAPI.rejected,
      (state: PackagesState, action: any) => {
        state.loading = false;
        state.tests = [];
      }
    );

    // unlink package
    builder.addCase(unlinkPackageOfVendor.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      unlinkPackageOfVendor.fulfilled,
      (state: PackagesState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
      }
    );
    builder.addCase(
      unlinkPackageOfVendor.rejected,
      (state: PackagesState, action: any) => {
        state.loading = false;
      }
    );

    // assign vendor
    builder.addCase(assignVendorsForPackageApi.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      assignVendorsForPackageApi.fulfilled,
      (state: PackagesState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
      }
    );
    builder.addCase(
      assignVendorsForPackageApi.rejected,
      (state: PackagesState, action: any) => {
        state.loading = false;
      }
    );

    // linkedPackageOfVendor
    builder.addCase(linkedPackageOfVendor.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      linkedPackageOfVendor.fulfilled,
      (state: PackagesState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
      }
    );
    builder.addCase(
      linkedPackageOfVendor.rejected,
      (state: PackagesState, action: any) => {
        state.loading = false;
      }
    );

    // toggle packages
    builder.addCase(togglePackageStatus.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      togglePackageStatus.fulfilled,
      (state: PackagesState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
      }
    );
    builder.addCase(
      togglePackageStatus.rejected,
      (state: PackagesState, action: any) => {
        state.loading = false;
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = packagesSlice.actions;

export default packagesSlice.reducer;
