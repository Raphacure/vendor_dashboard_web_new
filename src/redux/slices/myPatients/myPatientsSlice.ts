import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPatientsAPI } from "./myPatientsService";

export interface MyPatientsState {
  loading: boolean;
  error: any;
  patientsList: any;
}

const initialState: MyPatientsState = {
  loading: false,
  error: null,
  patientsList: [],
};

export const myPatientsSlice = createSlice({
  name: "myPatients",
  initialState,
  reducers: {
    setLoading: (state: MyPatientsState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (
      state: MyPatientsState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(fetchPatientsAPI.pending, (state: any) => {
      state.loading = true;
      state.error = null;
      state.patientsList = null;
    });
    builder.addCase(
      fetchPatientsAPI.fulfilled,
      (state: MyPatientsState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.patientsList = action.payload.data;
      }
    );
    builder.addCase(
      fetchPatientsAPI.rejected,
      (state: MyPatientsState, action: any) => {
        console.log({ action });
        state.loading = false;
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = myPatientsSlice.actions;

export default myPatientsSlice.reducer;
