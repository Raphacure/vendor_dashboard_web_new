import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllSubCategoriesAPI } from "./subCategoryService";

export interface ExtensionDashboardState {
  loading: boolean;
  error: any;
  SubCategoriesList: any;
}

const initialState: ExtensionDashboardState = {
  loading: false,
  error: null,
  SubCategoriesList: [],
};

export const categoriesSlice = createSlice({
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
    builder.addCase(getAllSubCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllSubCategoriesAPI.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.SubCategoriesList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllSubCategoriesAPI.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = categoriesSlice.actions;

export default categoriesSlice.reducer;
