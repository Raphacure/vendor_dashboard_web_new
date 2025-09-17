import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAllClients,
  createClientAPI,
  getClientDetailsAPI,
  updateClientDetailsAPI,
  getAssociateDoctorApi,
  clientConfig,
  getAllClientsRestApi,
} from "./ClientsService";

export interface leadManagementState {
  loading: boolean;
  error: any;
  manageUserDetails: any;
  allClients: any;
  linkedDoctors: any
}

const initialState: leadManagementState = {
  loading: false,
  error: null,
  manageUserDetails: [],
  allClients: [],
  linkedDoctors:[]
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
    builder.addCase(createClientAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      createClientAPI.fulfilled,
      (state: leadManagementState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.manageUserDetails = action.payload?.data;
      }
    );
    builder.addCase(
      createClientAPI.rejected,
      (state: leadManagementState, action: any) => {
        state.loading = false;
        state.manageUserDetails = [];
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    builder.addCase(getClientDetailsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getClientDetailsAPI.fulfilled,
      (state: leadManagementState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.manageUserDetails = action.payload?.data;
      }
    );
    builder.addCase(
      getClientDetailsAPI.rejected,
      (state: leadManagementState, action: any) => {
        state.loading = false;
        state.manageUserDetails = [];
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

    //getAllUsers
    builder.addCase(getAllClients.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllClients.fulfilled,
      (state: leadManagementState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.allClients = action.payload;
      }
    );
    builder.addCase(
      getAllClients.rejected,
      (state: leadManagementState, action: any) => {
        state.loading = false;
        state.allClients = [];
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

     //getAllClientsRestApi
     builder.addCase(getAllClientsRestApi.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllClientsRestApi.fulfilled,
      (state: leadManagementState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        console.log(action.payload?.data?.data);
        
        state.allClients = {data : {clients: action.payload?.data?.data ?? [], clientsCount: action?.payload?.data?.pagination?.total || 0}};
      }
    );
    builder.addCase(
      getAllClientsRestApi.rejected,
      (state: leadManagementState, action: any) => {
        state.loading = false;
        state.allClients = [];
        state.error = action.error?.message ?? "Something went wrong";
      }
    );

    //getAssociateDoctorApi
    builder.addCase(getAssociateDoctorApi.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAssociateDoctorApi.fulfilled,
      (state: leadManagementState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.linkedDoctors = action.payload?.data?.associatedDoctors?.[0]?.doctors ?? [];
      }
    );
    builder.addCase(
      getAssociateDoctorApi.rejected,
      (state: leadManagementState, action: any) => {
        state.loading = false;
        state.linkedDoctors = [];
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
    
    //clientConfig
    builder.addCase(clientConfig.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      clientConfig.fulfilled,
      (state: leadManagementState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.linkedDoctors = action.payload?.data?.associatedDoctors?.[0]?.doctors ?? [];
      }
    );
    builder.addCase(
      clientConfig.rejected,
      (state: leadManagementState, action: any) => {
        state.loading = false;
        state.linkedDoctors = [];
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = UserManagement.actions;

export default UserManagement.reducer;
