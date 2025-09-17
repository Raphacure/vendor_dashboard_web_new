import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllMedicinesAPI,
  getAllCategoriesAPI,
  getAllSubCategoriesAPI,
  getAllSubCategoriesByCateIDAPI,
  getAllVendorsAPI,
  getAllUniqueCategorySubCategoryAPI,
  getAllSpecializationCategoryAPI,
  getAllManufacturerAPI,
} from "./medicineService";
import { getAllNursesAPI } from "../nurses/nursesService";

export interface ExtensionDashboardState {
  loading: boolean;
  error: any;
  medicinesList: any;
  totalMedicines: any;
  categoriesList: any;
  subCategoriesList: any;
  vendorList: any;
  uniqueCategoryList: any;
  uniqueSubCategoryList: any;
  manufacturerList: any;
  allSpecializationList: any;
}

const initialState: ExtensionDashboardState = {
  loading: false,
  error: null,
  medicinesList: [],
  totalMedicines: 0,
  categoriesList: [],
  subCategoriesList: [],
  vendorList: [],
  uniqueCategoryList: [],
  uniqueSubCategoryList: [],
  manufacturerList: [],
  allSpecializationList: [],
};

export const medicinesSlice = createSlice({
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
    builder.addCase(getAllMedicinesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllMedicinesAPI.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.medicinesList = action.payload;
        state.totalMedicines = action.payload;
      }
    );
    builder.addCase(
      getAllMedicinesAPI.rejected,
      (state: ExtensionDashboardState, action: any) => {
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
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.categoriesList = action.payload?.categories;
      }
    );
    builder.addCase(
      getAllCategoriesAPI.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
        state.categoriesList = [];
      }
    );
    builder.addCase(getAllSubCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllSubCategoriesAPI.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.subCategoriesList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllSubCategoriesAPI.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );

    // get all vendors
    builder.addCase(getAllVendorsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.vendorList = [];
    });
    builder.addCase(
      getAllVendorsAPI.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.vendorList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllVendorsAPI.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
        state.vendorList = [];
      }
    );

    // getAllSubCategoriesByCateIDAPI
    builder.addCase(
      getAllSubCategoriesByCateIDAPI.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.subCategoriesList = action.payload?.data;
      }
    );

    // get all unique category and sub category
    builder.addCase(
      getAllUniqueCategorySubCategoryAPI.pending,
      (state: any) => {
        state.loading = true;
        state.error = null;
      }
    );
    builder.addCase(
      getAllUniqueCategorySubCategoryAPI.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.uniqueCategoryList = action.payload?.data?.category_ids;
        state.uniqueSubCategoryList = action.payload?.data?.subcategory_ids;
      }
    );
    builder.addCase(
      getAllUniqueCategorySubCategoryAPI.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );
    // getAllSpecializationCategoryAPI
    builder.addCase(getAllSpecializationCategoryAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllSpecializationCategoryAPI.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.uniqueSubCategoryList = action.payload?.data?.category_ids;
      }
    );
    builder.addCase(
      getAllSpecializationCategoryAPI.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );

    // get all unique company
    builder.addCase(
      getAllManufacturerAPI.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.manufacturerList = action.payload?.data?.data;
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = medicinesSlice.actions;

export default medicinesSlice.reducer;
