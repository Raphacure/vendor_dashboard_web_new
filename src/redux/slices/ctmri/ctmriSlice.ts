import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllScansListAPI,
  getAllCategoriesListAPI,
  getCtmriDetailsQueryAPI,
  getPackageDetailsQueryAPI,
} from "./ctmriService";

export interface CtmriState {
  loading: boolean;
  error: any;
  allScansList:{}
  allCategoriessList:{}
  scanDetails:{}
}
const initialState: CtmriState = {
  loading: false,
  error: null,
  allScansList:[],
  allCategoriessList:[],
  scanDetails:{},
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
   
    
  },
  extraReducers: (builder: any) => {
   
    builder.addCase(getAllScansListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getAllScansListAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allScansList = action.payload.data;
      }
    );
    builder.addCase(getAllScansListAPI.rejected, (state: CtmriState, action: any) => {
      console.log({ action });
      state.loading = false;
      state.error = action.error?.message ?? "Something went wrong";
    });

    //scanDetails
    builder.addCase(getAllCategoriesListAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getAllCategoriesListAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allCategoriessList = action.payload.data;
      }
    );
    builder.addCase(getAllCategoriesListAPI.rejected, (state: CtmriState, action: any) => {
      console.log({ action });
      state.loading = false;
      state.error = action.error?.message ?? "Something went wrong";
    });

    builder.addCase(getCtmriDetailsQueryAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      getCtmriDetailsQueryAPI.fulfilled,
      (state: CtmriState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.scanDetails = action.payload.data;
      }
    );
    builder.addCase(getCtmriDetailsQueryAPI.rejected, (state: CtmriState, action: any) => {
      console.log({ action });
      state.loading = false;
      state.error = action.error?.message ?? "Something went wrong";
    });
   //getPackageDetailsQueryAPI
   builder.addCase(getPackageDetailsQueryAPI.pending, (state: any) => {
    state.loading = true;
    state.error = null;
    state.signUpResponse = null;
  });
  builder.addCase(
    getPackageDetailsQueryAPI.fulfilled,
    (state: CtmriState, action: PayloadAction<any>) => {
      state.error = null;
      state.loading = false;
      state.scanDetails = action.payload.data;
    }
  );
  builder.addCase(getPackageDetailsQueryAPI.rejected, (state: CtmriState, action: any) => {
    console.log({ action });
    state.loading = false;
    state.error = action.error?.message ?? "Something went wrong";
  });
  },
});

export const { 
  setLoading,
  updateErrorMessage
  } = ctmriSlice.actions;

export default ctmriSlice.reducer;
