import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  createUserAPI,
  getAllAdmins,
  getAllUsers,
  getUserDetailsAPI,
  allBulkPromotionalDataAPI,
} from "./UserManagementService";

export interface leadManagementState {
  loading: boolean;
  error: any;
  manageUserDetails: any;
  allUsers: any;
  allAdmins: any;
  allPromotionalData: any;
}

const initialState: leadManagementState = {
  loading: false,
  error: null,
  manageUserDetails: [],
  allUsers: [],
  allAdmins: [],
  allPromotionalData: {},
};

export const UserManagement = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (
      state: leadManagementState,
      action: PayloadAction<boolean>
    ) => {
      state.loading = action.payload;
    },
    // updateUserDetails: (
    //   state: leadManagementState,
    //   action: PayloadAction<boolean>
    // ) => {
    //   state.user = action.payload;
    // },
    updateErrorMessage: (
      state: leadManagementState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(createUserAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      createUserAPI.fulfilled,
      (state: leadManagementState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.manageUserDetails = action.payload?.data;
      }
    );
    builder.addCase(
      createUserAPI.rejected,
      (state: leadManagementState, action: any) => {
        state.loading = false;
        state.manageUserDetails = [];
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    builder.addCase(getUserDetailsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getUserDetailsAPI.fulfilled,
      (state: leadManagementState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        console.log(action.payload);
        state.manageUserDetails = action.payload?.data;
      }
    );
    builder.addCase(
      getUserDetailsAPI.rejected,
      (state: leadManagementState, action: any) => {
        state.loading = false;
        state.manageUserDetails = [];
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

    //getAllUsers
    builder.addCase(getAllUsers.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllUsers.fulfilled,
      (state: leadManagementState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allUsers = action.payload;
      }
    );
    builder.addCase(
      getAllUsers.rejected,
      (state: leadManagementState, action: any) => {
        state.loading = false;
        state.allUsers = [];
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

    //getAllAdmins
    builder.addCase(getAllAdmins.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllAdmins.fulfilled,
      (state: leadManagementState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allAdmins = action.payload;
      }
    );
    builder.addCase(
      getAllAdmins.rejected,
      (state: leadManagementState, action: any) => {
        state.loading = false;
        state.allAdmins = [];
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    //allBulkPromotionalDataAPI
    builder.addCase(
      allBulkPromotionalDataAPI.fulfilled,
      (state: leadManagementState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allPromotionalData = action.payload?.data;
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = UserManagement.actions;

export default UserManagement.reducer;
