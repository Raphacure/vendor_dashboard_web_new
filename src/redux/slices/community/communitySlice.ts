import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCategoriesAndRulesAPI, getAllCommunitiesAPI } from "./communityService";

export interface CommunityState {
  loading: boolean;
  error: any;
  allCommunities: any;
  currentCommunity: any;
  formData: any;
  allCategories: any;
  allRules: any;
}

const initialState: CommunityState = {
  loading: false,
  error: null,
  allCommunities: [],
  currentCommunity: null,
  formData: null,
  allCategories: [],
  allRules: [],
};

export const communitySlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    setLoading: (state: CommunityState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (state: CommunityState, action: PayloadAction<any>) => {
      state.error = action.payload;
    },

    setCurrentCommunity: (state: CommunityState, action: PayloadAction<any>) => {
      state.currentCommunity = action.payload;
    },

    updateFormData: (state: CommunityState, action: PayloadAction<any>) => {
      state.formData = action.payload;
    },

    clearCurrentCommunity: (state: CommunityState) => {
      state.currentCommunity = null;
      state.formData = null;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getAllCommunitiesAPI.pending, (state: CommunityState) => {
      state.loading = true;
    });
    builder.addCase(
      getAllCommunitiesAPI.rejected,
      (state: CommunityState, action: any) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
    builder.addCase(
      getAllCommunitiesAPI.fulfilled,
      (state: CommunityState, action: any) => {
        state.loading = false;
        state.error = null;
        state.allCommunities = action.payload?.data;
      }
    );

    builder.addCase(
      getAllCategoriesAndRulesAPI.pending,
      (state: CommunityState) => {
        state.loading = true;
      }
    );
    builder.addCase(
      getAllCategoriesAndRulesAPI.rejected,
      (state: CommunityState, action: any) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
    builder.addCase(
      getAllCategoriesAndRulesAPI.fulfilled,
      (state: CommunityState, action: any) => {
        state.loading = false;
        state.error = null;
        const allData = action.payload?.data?.CommunityData;

        state.allCategories =
          allData?.filter((item: any) => item.section_name === "category") ||
          [];
        state.allRules =
          allData?.filter((item: any) => item.section_name === "rule") || [];
      }
    );
  },
});

export const { setLoading, updateErrorMessage, setCurrentCommunity, updateFormData, clearCurrentCommunity } = communitySlice.actions;

export default communitySlice.reducer;
