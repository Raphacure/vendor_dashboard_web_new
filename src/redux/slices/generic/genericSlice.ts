import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getEyeCategoriesAPI,
  getEyeHospitalsAPI,
  getAmbulanceList,
  getCategoriesAPI,
  getGymVendorsAPI,
  getUniversalSearchData,
  getReportOrderAPI,
  getRFQTestsListAPI,
} from "./genericService";

export interface CtmriState {
  loading: boolean;
  error: any;
  allEyeCareHospitalsList: {};
  allEyeCareCategoriesList: {};
  allAmbulanceList: {};
  allGymCategoriesList: {};
  allGymVendorsList: {};
  universalSearchResults: [];
  allBookingSortList: [];
  allRFQTestsList: [];
  allClintUserWalletAmountDetailsList: [];
  allReportOrderList: [];
  allClintWalletDetailsList: [];
  allClintUserWalletDetailsList: [];
  allPrescriptionsList: [];
}

const initialState: CtmriState = {
  loading: false,
  error: null,
  allEyeCareCategoriesList: {},
  allEyeCareHospitalsList: {},
  allAmbulanceList: {},
  allGymCategoriesList: {},
  allGymVendorsList: {},
  universalSearchResults: [],
  allBookingSortList: [],
  allReportOrderList: [],
  allClintWalletDetailsList: [],
  allClintUserWalletDetailsList: [],
  allClintUserWalletAmountDetailsList: [],
  allPrescriptionsList: [],
  allRFQTestsList: []
};

export const ctmriSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: CtmriState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (state: CtmriState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    updateAllAmbulanceList: (state: CtmriState, action: PayloadAction<any>) => {
      state.allAmbulanceList = action.payload;
    },
    updateUniversalSearchResults: (
      state: CtmriState,
      action: PayloadAction<any>
    ) => {
      state.universalSearchResults = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getEyeCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getEyeCategoriesAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allEyeCareCategoriesList = action.payload.data;
      }
    );
    builder.addCase(
      getEyeCategoriesAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

    //scanDetails
    builder.addCase(getEyeHospitalsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getEyeHospitalsAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allEyeCareHospitalsList = action.payload.data;
      }
    );
    builder.addCase(
      getEyeHospitalsAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    //getAmbulanceList
    builder.addCase(getAmbulanceList.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAmbulanceList.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allAmbulanceList = action.payload.data;
      }
    );
    builder.addCase(
      getAmbulanceList.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    builder.addCase(getCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getCategoriesAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allGymCategoriesList = action.payload.data;
      }
    );
    // getReportOrderAPI
    builder.addCase(getReportOrderAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getReportOrderAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allReportOrderList = action.payload.data;
      }
    );
    builder.addCase(
      getReportOrderAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
        state.allReportOrderList = [];
      }
    );
    builder.addCase(
      getCategoriesAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    builder.addCase(getGymVendorsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getGymVendorsAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allGymVendorsList = action.payload.data;
      }
    );
    builder.addCase(
      getGymVendorsAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    //getUniversalSearchData
    builder.addCase(getUniversalSearchData.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getUniversalSearchData.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.universalSearchResults = action.payload.data?.results || [];
      }
    );
    builder.addCase(
      getUniversalSearchData.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    
    
    //get rfq test
    builder.addCase(getRFQTestsListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getRFQTestsListAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        console.log(action.payload,"action.payload");
        
        state.allRFQTestsList = action.payload?.services || [];
      }
    );
    builder.addCase(
      getRFQTestsListAPI.rejected,
      (state: CtmriState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const {
  setLoading,
  updateAllAmbulanceList,
  updateUniversalSearchResults,
} = ctmriSlice.actions;

export default ctmriSlice.reducer;
