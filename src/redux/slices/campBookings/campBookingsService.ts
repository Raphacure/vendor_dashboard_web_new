import { SERVER_IP } from "@/lib/config";
import { post } from "@/lib/helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCampBookingsAPI = createAsyncThunk(
  "campBookings/getAllCampBookings",
  async (body: {
    filters: {
      from: string;
      client_id?: string;
      branch_location_id?: string | number;
      status?: string;
      start_date?: string;
      end_date?: string;
      searchText?: string;
      page?: number;
      limit?: number;
    };
  }) => {
    const response = await post(
      `${SERVER_IP}/api/v1/booking/get-camp-bookings?marketplace_name=raphacure`,
      body
    );
    return response;
  }
);
