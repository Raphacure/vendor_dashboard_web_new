import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  loading: boolean;
  showBackButton: boolean;
}

const initialState: AppState = {
  loading: false,
  showBackButton: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: AppState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setShowBackButton: (state: AppState, action: PayloadAction<boolean>) => {
      state.showBackButton = action.payload;
    },
  },
});

export const { setLoading, setShowBackButton } = appSlice.actions;

export default appSlice.reducer;
