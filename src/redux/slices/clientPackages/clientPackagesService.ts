import { SERVER_IP } from "@/lib/config";
import { get } from "@/lib/helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetAllClientPackagesResponse } from "./clientPackages.types";
import axios from "axios";




export const getAllClientPackagesAPI = createAsyncThunk<GetAllClientPackagesResponse, { page: number, size: number, clientId: string }>(
    "clientPackages/getAllClientPackagesAPI",
    async (payload, thunkAPI) => {
        try {
            return get(`${SERVER_IP}/api/v1/client/package-request?page=${payload.page}&count=${payload.size}&client_id=${payload.clientId}`, { signal: thunkAPI.signal });
        } catch (err: any) {
            if (axios.isCancel(err)) {
                return thunkAPI.rejectWithValue("Request aborted");
            }
            return thunkAPI.rejectWithValue(err.response?.data?.message || "Error");
        }
    })