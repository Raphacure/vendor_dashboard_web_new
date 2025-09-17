import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllPromotinalDataAPI,
  getCategoriesPromotinalAPI,
  getCitiesPromotinalAPI,
  getPincodesPromotinalAPI,
  getSectionsPromotinalAPI,
  getStatesPromotinalAPI,
} from "./promotionalDataService";

export interface promotionalDataState {
  loading: boolean;
  error: any;
  promotionalData: any;
  filter: {
    cities: any;
    states: any;
    pincode: any;
    categories: any;
    sections: any;
  };
  filterLoading: {
    cities: boolean;
    states: boolean;
    pincode: boolean;
    categories: boolean;
    sections: boolean;
  };
  filterError: {
    cities: any;
    states: any;
    pincode: any;
    categories: any;
    sections: any;
  };
}

const initialState: promotionalDataState = {
  loading: false,
  error: null,
  promotionalData: {},
  filter: {
    cities: null,
    states: null,
    pincode: null,
    categories: null,
    sections: null,
  },
  filterLoading: {
    cities: false,
    states: false,
    pincode: false,
    categories: false,
    sections: false,
  },
  filterError: {
    cities: null,
    states: null,
    pincode: null,
    categories: null,
    sections: null,
  },
};

export const promotionalSlice = createSlice({
  name: "promotions",
  initialState,
  reducers: {
    setLoading: (
      state: promotionalDataState,
      action: PayloadAction<boolean>
    ) => {
      state.loading = action.payload;
    },
    updateErrorMessage: (
      state: promotionalDataState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getAllPromotinalDataAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllPromotinalDataAPI.fulfilled,
      (state: promotionalDataState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.promotionalData = action.payload?.data;
      }
    );
    builder.addCase(
      getAllPromotinalDataAPI.rejected,
      (state: promotionalDataState, action: any) => {
        state.loading = false;
        state.promotionalData = [];
        state.error = action?.error?.message ?? "Something went wrong";
      }
    );

    //for filters

    builder.addCase(
      getCitiesPromotinalAPI.pending,
      (state: promotionalDataState) => {
        state.filterLoading.cities = true;
        state.filter.cities = null;
      }
    );
    builder.addCase(
      getCitiesPromotinalAPI.fulfilled,
      (state: promotionalDataState, action: PayloadAction<any>) => {
        state.filterLoading.cities = false;
        state.filterError.cities = null;
        state.filter.cities = [
          ...(action.payload?.data?.cities?.map((filter: any) => {
            return { label: filter?.city, value: filter?.city };
          }) || []),
        ];
      }
    );
    builder.addCase(
      getCitiesPromotinalAPI.rejected,
      (state: promotionalDataState, action: any) => {
        state.filterLoading.cities = false;
        state.filter.cities = null;
        state.filterError.cities = action.error?.message ?? "Something went wrong";
      }
    );

    builder.addCase(
      getStatesPromotinalAPI.pending,
      (state: promotionalDataState) => {
        state.filterLoading.states = true;
        state.filter.states = null;
      }
    );
    builder.addCase(
      getStatesPromotinalAPI.fulfilled,
      (state: promotionalDataState, action: PayloadAction<any>) => {
        state.filterLoading.states = false;
        state.filterError.states = null;
        state.filter.states = [
          ...(action.payload?.data?.states?.map((filter: any) => {
            return { label: filter?.state, value: filter?.state };
          }) || []),
        ];
      }
    );
    builder.addCase(
      getStatesPromotinalAPI.rejected,
      (state: promotionalDataState, action: any) => {
        state.filterLoading.states = false;
        state.filter.states = null;
        state.filterError.states =
          action.error?.message ?? "Something went wrong";
      }
    );

    builder.addCase(
      getPincodesPromotinalAPI.pending,
      (state: promotionalDataState) => {
        state.filterLoading.pincode = true;
        state.filter.pincode = null;
      }
    );
    builder.addCase(
      getPincodesPromotinalAPI.fulfilled,
      (state: promotionalDataState, action: PayloadAction<any>) => {
        state.filterLoading.pincode = false;
        state.filterError.pincode = null;
        state.filter.pincode = [
          ...(action.payload?.data?.pincodes?.map((filters: any) => {
            return { label: filters?.pincode, value: filters?.pincode };
          }) || []),
        ];
      }
    );
    builder.addCase(
      getPincodesPromotinalAPI.rejected,
      (state: promotionalDataState, action: any) => {
        state.filterLoading.pincode = false;
        state.filter.pincode = null;
        state.filterError.pincode =
          action.error?.message ?? "Something went wrong";
      }
    );

    builder.addCase(
      getCategoriesPromotinalAPI.pending,
      (state: promotionalDataState) => {
        state.filterLoading.categories = true;
        state.filter.categories = null;
      }
    );
    builder.addCase(
      getCategoriesPromotinalAPI.fulfilled,
      (state: promotionalDataState, action: PayloadAction<any>) => {
        state.filterLoading.categories = false;
        state.filterError.categories = null;
        state.filter.categories = [
          ...(action.payload?.data?.categories?.map((filters: any) => {
            return { label: filters?.category, value: filters?.category };
          }) || []),
        ];
      }
    );
    builder.addCase(
      getCategoriesPromotinalAPI.rejected,
      (state: promotionalDataState, action: any) => {
        state.filterLoading.categories = false;
        state.filter.categories = null;
        state.filterError.categories =
          action.error?.message ?? "Something went wrong";
      }
    );

    builder.addCase(
      getSectionsPromotinalAPI.pending,
      (state: promotionalDataState) => {
        state.filterLoading.sections = true;
        state.filter.sections = null;
      }
    );
    builder.addCase(
      getSectionsPromotinalAPI.fulfilled,
      (state: promotionalDataState, action: PayloadAction<any>) => {
        state.filterLoading.sections = false;
        state.filterError.sections = null;
        state.filter.sections = [
          ...(action.payload?.data?.sections?.map((filter: any) => {
            return { label: filter?.section, value: filter?.section };
          }) || []),
        ];
      }
    );
    builder.addCase(
      getSectionsPromotinalAPI.rejected,
      (state: promotionalDataState, action: any) => {
        state.filterLoading.sections = false;
        state.filter.sections = null;
        state.filterError.sections =
          action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = promotionalSlice.actions;

export default promotionalSlice.reducer;
