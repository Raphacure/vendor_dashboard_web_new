import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getHealthCategoriesAPI,
  getHealthPackagesAPI,
  getAllTestsAPI,
  getPharmacyCategoriesAPI,
  getAllTests,
  updateTestsStatusCall,
  getAllCategoriesAPI,
  getAllSingleTests,
} from "./labtestService";

export interface LabTestState {
  loading: boolean;
  error: any;
  healthCategoriesList: any;
  healthPackagesList: any;
  allTestsList: any;
  allPharmacyCategoriesList: any;
  testsList: any;
  testsTotalRecord: any;
  categoriesList: any;
  allSingleTestsList: any,
  allSingleTestsTotalList: any
}
const userData: string | null = localStorage.getItem("user");
const initialState: LabTestState = {
  loading: false,
  error: null,
  healthCategoriesList: [],
  healthPackagesList: [],
  allTestsList: [],
  allPharmacyCategoriesList: [],
  testsList: [],
  testsTotalRecord: 0,
  categoriesList: [],
  allSingleTestsList: [],
  allSingleTestsTotalList: 0
};

export const authSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: LabTestState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: LabTestState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    //getHealthCategoriesAPI
    builder.addCase(getHealthCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getHealthCategoriesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.healthCategoriesList = action.payload?.data;
      }
    );
    builder.addCase(
      getHealthCategoriesAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.healthCategoriesList = [];
      }
    );
    //getHealthPackagesAPI
    builder.addCase(getHealthPackagesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getHealthPackagesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.healthPackagesList = action.payload?.data;
      }
    );
    builder.addCase(
      getHealthPackagesAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.healthPackagesList = [];
      }
    );
    //getAllTestsAPI
    builder.addCase(getAllTestsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllTestsAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allTestsList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllTestsAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allTestsList = [];
      }
    );
    //getPharmacyCategoriesAPI

    builder.addCase(getPharmacyCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getPharmacyCategoriesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allPharmacyCategoriesList =
          action.payload?.data?.medicineCategories;
      }
    );
    builder.addCase(
      getPharmacyCategoriesAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.allPharmacyCategoriesList = [];
      }
    );

    builder.addCase(getAllTests.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllTests.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.testsList = action.payload?.data ?? [];
        state.testsTotalRecord = action.payload?.total ?? 0;
      }
    );
    builder.addCase(
      getAllTests.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
      }
    );

    builder.addCase(updateTestsStatusCall.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      updateTestsStatusCall.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
      }
    );
    builder.addCase(
      updateTestsStatusCall.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
      }
    );

    builder.addCase(getAllCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.categoriesList = [];
    });
    builder.addCase(
      getAllCategoriesAPI.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        console.log(action.payload?.categories, "payload 121 2 12121");
        
        state.categoriesList = action.payload?.categories ?? [];
      }
    );
    builder.addCase(
      getAllCategoriesAPI.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.categoriesList = [];
      }
    );
    
    
    
    
    builder.addCase(getAllSingleTests.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.categoriesList = [];
    });
    builder.addCase(
      getAllSingleTests.fulfilled,
      (state: LabTestState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allSingleTestsList = action.payload?.data;
        state.allSingleTestsTotalList = action.payload?.total;
      }
    );
    builder.addCase(
      getAllSingleTests.rejected,
      (state: LabTestState, action: any) => {
        state.loading = false;
        state.categoriesList = [];
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = authSlice.actions;

export default authSlice.reducer;
