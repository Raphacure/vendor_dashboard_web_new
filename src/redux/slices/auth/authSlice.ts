import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  loginUser,
  validateOtpAPI,
  signUpUser,
  requestOtpAPI,
  checkSocialUserAPI,
  getSubDomainLoginDetails,
} from "./authService";
import { ClientData } from "./Auth.types";

export interface AuthState {
  loading: boolean;
  user: any;
  error: any;
  signUpResponse: any;
  showLoginModel: any;
  subDomainDetails: any;
  subDomainName: any;
  userCity: any;
  isRaphaPlus: any;
  clientDetails: ClientData | null;
}
const userData: string | null = localStorage.getItem("user");
const userCityV: string | null = localStorage.getItem("userCity");

const initialState: AuthState = {
  loading: false,
  user: userData !== null ? JSON.parse(userData) : {},
  userCity: userCityV !== null && userCityV != "" ? JSON.parse(userCityV) : {},
  error: null,
  signUpResponse: {},
  showLoginModel: false,
  subDomainDetails: {},
  subDomainName: null,
  isRaphaPlus: false,
  clientDetails: null,
};

export const authSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: AuthState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    updateUserDetails: (state: AuthState, action: PayloadAction<boolean>) => {
      state.user = action.payload;
      var userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(userInfo));
    },
    updateErrorMessage: (state: AuthState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    updateClientDetails: (state: AuthState, action: PayloadAction<ClientData>) => {
      state.clientDetails = action.payload;
    },
    updateShowLoginModel: (
      state: AuthState,
      action: PayloadAction<boolean>
    ) => {
      state.showLoginModel = action.payload;
    },
    updateIsRaphaPlus: (state: AuthState, action: PayloadAction<any>) => {
      state.isRaphaPlus = action.payload;
    },
    updateSubDomainDetails: (
      state: AuthState,
      action: PayloadAction<boolean>
    ) => {
      state.subDomainDetails = action.payload;
    },
    updateSubDomainName: (state: AuthState, action: PayloadAction<any>) => {
      state.subDomainName = action.payload;
    },
    updateUserCity: (state: AuthState, action: PayloadAction<boolean>) => {
      state.userCity = action.payload;
      localStorage.setItem("userCity", JSON.stringify(action.payload));
    },
    updateUserCredentials: (state: AuthState, action: PayloadAction<any>) => {
      state.error = null;
      state.loading = false;
      var userInfo = action.payload?.data;
      state.user = userInfo;
      localStorage.setItem("user", JSON.stringify(userInfo));
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(loginUser.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      loginUser.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        // console.log("action", action);
        state.user = action.payload?.data;
        var userInfo = action.payload?.data;

        localStorage.setItem("user", JSON.stringify(userInfo));
      }
    );
    builder.addCase(loginUser.rejected, (state: AuthState, action: any) => {
      state.loading = false;
      // console.log("action", action);
      state.user = {};
      state.error = action.error?.message ?? "Something went wrong";
    });

    builder.addCase(signUpUser.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.signUpResponse = null;
    });
    builder.addCase(
      signUpUser.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.signUpResponse = action.payload?.data;
        state.user = action.payload?.data;
        var userInfo = action.payload?.data;

        localStorage.setItem("user", JSON.stringify(userInfo));
      }
    );
    builder.addCase(signUpUser.rejected, (state: AuthState, action: any) => {
      console.log({ action });
      state.loading = false;
      state.signUpResponse = null;
      state.error = action.error?.message ?? "Something went wrong";
    });
    //requestOtpAPI
    builder.addCase(requestOtpAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      requestOtpAPI.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
      }
    );
    builder.addCase(requestOtpAPI.rejected, (state: AuthState, action: any) => {
      console.log({ action });
      state.loading = false;
      state.error = action.error?.message ?? "Something went wrong";
    });

    //validateOtpAPI
    builder.addCase(validateOtpAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      validateOtpAPI.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        var userInfo = action.payload?.data;
        state.user = userInfo;
        localStorage.setItem("user", JSON.stringify(userInfo));
      }
    );
    builder.addCase(
      validateOtpAPI.rejected,
      (state: AuthState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    //checkSocialUserAPI
    builder.addCase(checkSocialUserAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      checkSocialUserAPI.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        var userInfo = action.payload?.data;
        state.user = userInfo;
        localStorage.setItem("user", JSON.stringify(userInfo));
      }
    );
    builder.addCase(
      checkSocialUserAPI.rejected,
      (state: AuthState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    //getSubDomainLoginDetails
    builder.addCase(getSubDomainLoginDetails.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getSubDomainLoginDetails.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        console.log("action.payload", action.payload);
        // var userInfo = action.payload?.data;
        // state.user = userInfo;
        // localStorage.setItem("user", JSON.stringify(userInfo));
      }
    );
    builder.addCase(
      getSubDomainLoginDetails.rejected,
      (state: AuthState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const {
  setLoading,
  updateSubDomainDetails,
  updateSubDomainName,
  updateUserDetails,
  updateErrorMessage,
  updateShowLoginModel,
  updateUserCity,
  updateIsRaphaPlus,
  updateUserCredentials,
  updateClientDetails,
} = authSlice.actions;

export default authSlice.reducer;
