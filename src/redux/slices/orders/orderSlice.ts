import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ClientOrderResponse } from "./order.types";
import { getClientOrdersAPI } from "./orderService";

export interface OrdersState {
  clientOrders:{
    loading:boolean,
    error:any;
    data:ClientOrderResponse["data"];
  }
}

const initialState: OrdersState = {
  clientOrders:{
    data:{
      clientOrders:[],
      clientOrdersCount:0
    },
    error:null,
    loading:false,
  }
};

export const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {

  },
  extraReducers: (builder: any) => {
    builder.addCase(getClientOrdersAPI.pending, (state: OrdersState) => {
      state.clientOrders.loading = true;
      state.clientOrders.error = null;
    });
    builder.addCase(
      getClientOrdersAPI.fulfilled,
      (state: OrdersState, action: PayloadAction<ClientOrderResponse>) => {
        state.clientOrders.error = null;
        state.clientOrders.loading = false;
        state.clientOrders.data = action.payload.data;
      }
    );
    builder.addCase(
      getClientOrdersAPI.rejected,
      (state: OrdersState, action: PayloadAction<ClientOrderResponse>) => {
        state.clientOrders.loading = false;
        state.clientOrders.error = action.payload?.error ?? "Something went wrong";
      }
    );
  },
});


export default orderSlice.reducer;
