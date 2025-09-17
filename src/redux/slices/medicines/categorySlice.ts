import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCategoriesAPI } from "./categoryService";

export interface ExtensionDashboardState {
  loading: boolean;
  error: any;
  CategoriesList: any;
}

const initialState: ExtensionDashboardState = {
  loading: false,
  error: null,
  CategoriesList: [],
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
    builder.addCase(getAllCategoriesAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllCategoriesAPI.fulfilled,
      (state: ExtensionDashboardState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.CategoriesList = action.payload?.data;
      }
    );
    builder.addCase(
      getAllCategoriesAPI.rejected,
      (state: ExtensionDashboardState, action: any) => {
        state.loading = false;
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = categoriesSlice.actions;

export default categoriesSlice.reducer;
