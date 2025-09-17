import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { getBloodBankVendorsAPI } from "./bloodBankService";

export interface ChatState {
  loading: boolean;
  error: any;
  chats: {};
}

const initialState: ChatState = {
  loading: false,
  error: null,
  chats: [],
};

export const bloodBankSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setLoading: (state: ChatState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    updateErrorMessage: (state: ChatState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
  },
  // extraReducers: (builder: any) => {
  //   builder.addCase(getBloodBankVendorsAPI.pending, (state: any) => {
  //     state.loading = true;
  //     state.error = null;
  //     state.vendors = null;
  //   });
  //   builder.addCase(
  //     getBloodBankVendorsAPI.fulfilled,
  //     (state: ChatState, action: PayloadAction<any>) => {
  //       state.error = null;
  //       state.loading = false;
  //       state.chats = action.payload.data;
  //     }
  //   );
  //   builder.addCase(
  //     getBloodBankVendorsAPI.rejected,
  //     (state: ChatState, action: any) => {
  //       console.log({ action });
  //       state.loading = false;
  //       state.error = action.error?.message ?? "Something went wrong";
  //     }
  //   );
  // },
});

export const { setLoading, updateErrorMessage } = bloodBankSlice.actions;

export default bloodBankSlice.reducer;
