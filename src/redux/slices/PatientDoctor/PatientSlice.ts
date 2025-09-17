import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPatientDetails } from "./PatientService";

export interface AuthState {
  loading: boolean;
  patients: any;
  error: any;
}

const initialState: AuthState = {
  loading: false,
  error: null,
  patients: []
};

export const patientsSlice = createSlice({
  name: "patients",
  initialState,
  reducers: {
    setLoading: (state: AuthState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getPatientDetails.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
        getPatientDetails.fulfilled,
      (state: AuthState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        state.patients = action.payload.data?.patients ?? []
      }
    );
    builder.addCase(getPatientDetails.rejected, (state: AuthState, action: any) => {
      state.loading = false;
      state.error = action.error?.message ?? "Something went wrong";
    });

}
});

export const { setLoading } =
  patientsSlice.actions;

export default patientsSlice.reducer;
