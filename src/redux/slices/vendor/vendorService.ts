import { VendorApiResponse } from "@/Scenes/apis/auth/authAPI.types";
import { getVendorDetailsAPI } from "@/Scenes/apis/vendor/vendorAPI";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";






export const getVendorDetailsThunk = createAsyncThunk<
  VendorApiResponse,
  { id: string }
>("auth/getVendorDetails", async (body, thunkAPI) => {
  try {
    return await getVendorDetailsAPI(body, { signal: thunkAPI.signal });
  } catch (error) {
    if (axios.isCancel(error)) {
      return thunkAPI.rejectWithValue("Request aborted");
    }
    return thunkAPI.rejectWithValue(error);
  }
});