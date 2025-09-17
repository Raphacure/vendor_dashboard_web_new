import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put } from "@/lib/helpers";

export const getTodaysAttendance = createAsyncThunk(
  "attendance/getTodaysAttendance",
  async () =>
    await get(`${SERVER_IP}/api/v1/admin-attendance/get-todays-attendance/`)
);

export const markAttendance = createAsyncThunk(
  "attendance/markAttendance",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/admin-attendance/mark-todays-attendance`,
      body
    )
);

export const markLeave = createAsyncThunk(
  "attendance/markLeave",
  async () => await post(`${SERVER_IP}/api/v1/admin-attendance/mark-leave`)
);

export const getAttendanceHistory = createAsyncThunk(
  "attendance/getAttendanceHistory",
  async (body: any) =>
    await post(
      `${SERVER_IP}/api/v1/admin-attendance/get-attendance-history`,
      body
    )
);

export const getAttendanceHistorySuperAdmin = createAsyncThunk(
  "attendance/getAttendanceHistorySuperAdmin",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/admin-attendance/attendance-history`, body)
);

export const updateAttendance = createAsyncThunk(
  "attendance/updateAttendance",
  async (body: any) =>
    await patch(`${SERVER_IP}/api/v1/admin-attendance/update-attendance`, body)
);

export const getUserAttendanceByDate = createAsyncThunk(
  "attendance/getUserAttendanceByDate",
  async (body: any) =>
    await post(
      `${SERVER_IP}/api/v1/admin-attendance/user-attendance-by-date`,
      body
    )
);

export const addShiftAPI = createAsyncThunk(
  "attendance/addShiftAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/dutyRoster/shift`, body)
);

export const getAllShiftsAPI = createAsyncThunk(
  "attendance/getAllShiftsAPI",
  async () => await get(`${SERVER_IP}/api/v1/dutyRoster/shift`)
);

export const getOneShiftAPI = createAsyncThunk(
  "attendance/getOneShiftAPI",
  async (shiftId: any) =>
    await get(`${SERVER_IP}/api/v1/dutyRoster/shift?shift_id=${shiftId}`)
);

export const addDutyRosterAPI = createAsyncThunk(
  "attendance/addDutyRosterAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/dutyRoster`, body)
);

export const getUsersWithRostersAPI = createAsyncThunk(
  "attendance/getUsersWithRostersAPI",
  async (body: any = {}) =>
    await post(`${SERVER_IP}/api/v1/dutyRoster/getRosters`, body)
);

export const applyLeaveAPI = createAsyncThunk(
  "attendance/applyLeaveAPI",
  async (body: any = {}) =>
    await post(`${SERVER_IP}/api/v1/leaveRequest`, body)
);

export const getAllLeaveRequestsAPI = createAsyncThunk(
  "attendance/getAllLeaveRequestsAPI",
  async (body: any = {}) =>
    await post(`${SERVER_IP}/api/v1/leaveRequest/getAll`, body)
);

export const updateLeaveRequestStatusAPI = createAsyncThunk(
  "attendance/updateLeaveRequestStatusAPI",
  async (body: any = {}) =>
    await put(
      `${SERVER_IP}/api/v1/leaveRequest/status/${body?.id}`,
      body?.payload
    )
);

export const getAllDoctorAttendanceAPI = createAsyncThunk(
  "attendance/getAllDoctorAttendanceAPI",
  async (body: any = {}) =>
    await post(`${SERVER_IP}/api/v1/admin-attendance/doctor-attendance`, body)
);

export const getAllSelfLeaveRequestsAPI = createAsyncThunk(
  "attendance/getAllSelfLeaveRequestsAPI",
  async ({start_date,end_date,status}:{start_date?:string,end_date?:string,status?:string}) =>{
    const queryParams = new URLSearchParams(); 
    if(start_date) queryParams.append('start_date', start_date);
    if(end_date) queryParams.append('end_date', end_date);
    if(status) queryParams.append('status', status);

    return await get(`${SERVER_IP}/api/v1/leaveRequest/self?${queryParams.toString()}`)
  }
);