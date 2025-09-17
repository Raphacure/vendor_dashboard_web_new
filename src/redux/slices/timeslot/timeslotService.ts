import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put } from "@/lib/helpers";

export const getDoctorSlotsAPI = createAsyncThunk(
  "bookingScreen/getDoctorSlotsAPI",
  async (obj: any) => await patch(`${SERVER_IP}/api/v1/timeslot/doctor`, obj)
);