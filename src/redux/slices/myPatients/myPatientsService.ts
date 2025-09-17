import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put, del } from "@/lib/helpers";
import { fetchPatients, getClients, getClientsNew, getPatientDetails } from "@/graphql/graphqlConfig";

export const fetchPatientsAPI = createAsyncThunk(
  "auth/fetchPatientsAPI",
  async () => await post(`${SERVER_IP}/graphql`, JSON.stringify(fetchPatients))
);

export const fetchClientsAPI = createAsyncThunk(
  "auth/fetchClientsAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(
        getClientsNew(body?.searchText, body?.count, body?.page, body?.type)
      )
    )
);

export const patientDetailAPI = createAsyncThunk(
  "auth/patientDetailAPI",
  async (patientId: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(getPatientDetails(patientId))
    )
);

export const getAllPatientAppointments = createAsyncThunk(
  "patients/getAllAppointments",
  async (body: any) => {
    return await post(`${SERVER_IP}/api/v1/doctor/patient-prescriptions`, body);
  }
);

export const patientDetailRestAPI = createAsyncThunk(
  "auth/patientDetailAPI",
  async (patientId: any) =>
    await get(`${SERVER_IP}/api/v1/doctor/patient/${patientId}`)
);

export const addPatientAPI = createAsyncThunk(
  "auth/addPatientAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/doctor/patient`, body)
);

export const editPatientAPI = createAsyncThunk(
  "auth/editPatientAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/doctor/patient/${body.id}`, body.editPayload)
);

export const deletePatientAPI = createAsyncThunk(
  "auth/deletePatientAPI",
  async (id: any) => await del(`${SERVER_IP}/api/v1/doctor/patient/${id}`)
);

export const signinAsUserAPI = createAsyncThunk(
  "auth/signinAsUserAPI",
  async (body: any) =>
    await patch(`${SERVER_IP}/api/v1/auth/signinasuser`, body)
);
