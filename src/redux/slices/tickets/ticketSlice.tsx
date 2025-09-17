import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllTickets } from "./ticketService";

export interface ticketServiceState {
  loading: boolean;
  error: any;
  tickets: any;
  totalTickets: number;
}

const initialState: ticketServiceState = {
  loading: false,
  error: null,
  tickets: [],
  totalTickets: 0,
};

export const ticketManagement = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setLoading: (
      state: ticketServiceState,
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
      state: ticketServiceState,
      action: PayloadAction<boolean>
    ) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(getAllTickets.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      getAllTickets.fulfilled,
      (state: ticketServiceState, action: PayloadAction<any>) => {
        state.error = null;
        state.loading = false;
        
        state.tickets = action.payload?.data?.tickets;
        state.totalTickets = action.payload?.data?.total || 0;
      }
    );
    builder.addCase(
      getAllTickets.rejected,
      (state: ticketServiceState, action: any) => {
        state.loading = false;
        state.tickets = [];
        state.error = action.error?.message ?? "Something went wrong";
      }
    );
  },
});

export const { setLoading, updateErrorMessage } = ticketManagement.actions;

export default ticketManagement.reducer;
