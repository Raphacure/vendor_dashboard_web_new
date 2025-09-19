import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getVendorDetailsAPI, loginUser } from "./authService";
import { LoginResponseApi, User, VendorApiResponse, VendorErrorResponse } from "@/types/api/authApi.types";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

export interface AuthState {
  loading: boolean;
  user: User | null;
  error: any;
  vendorDetails: {
    data:VendorApiResponse["data"]["vendorById"] | null
    loading:boolean;
    error:any
  };
}

const initialState: AuthState = {
  loading: false,
  user: null,
  error: null,
  vendorDetails: {
    data:null,
    error:null,
    loading:false,
  },
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
    //user auth
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

    //vendor details
    builder.addCase(getVendorDetailsAPI.pending,(state:AuthState)=>{
      state.vendorDetails.error=null
      state.vendorDetails.loading=true
    })
    builder.addCase(getVendorDetailsAPI.fulfilled,(state:AuthState,action:PayloadAction<VendorApiResponse>)=>{
      state.vendorDetails.data=action.payload.data.vendorById
      state.vendorDetails.loading=false
    })
    builder.addCase(getVendorDetailsAPI.rejected,(state:AuthState,action:PayloadAction<VendorErrorResponse>)=>{
      state.vendorDetails.loading=false
      state.vendorDetails.error=action.payload?.errors?.[0]?.message ?? "unknown error occured"
    })
  },
});

export const { dispatchUserLogout, setAuthLoading } = authSlice.actions;


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user'], 
};

export default persistReducer(authPersistConfig,authSlice.reducer);
