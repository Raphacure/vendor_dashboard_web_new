import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "./authService";
import { LoginResponseApi, User } from "@/types/api/authapi.types";

export interface AuthState {
  loading: boolean;
  user: User | null;
  error: any;
}

const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthLoading: (state: AuthState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    dispatchUserLogout: (state: AuthState) => {
      state.user = null;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(loginUser.pending, (state: AuthState) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state: AuthState, action: PayloadAction<LoginResponseApi>) => {
        state.error = null;
        state.loading = false;
        if (action.payload.data) {
          state.user = action.payload.data;
        }
      }
    );
    builder.addCase(
      loginUser.rejected,
      (state: AuthState, action: PayloadAction<LoginResponseApi>) => {
        state.loading = false;
        state.user = null;
        state.error = action.payload?.message ?? "Something went wrong";
      }
    );
  },
});

export const { dispatchUserLogout, setAuthLoading } = authSlice.actions;

export default authSlice.reducer;
