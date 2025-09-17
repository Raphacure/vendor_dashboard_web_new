import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put, del } from "@/lib/helpers";

export const getPatientDetails = createAsyncThunk(
  "patients/getPatientDetails",
  async () => {
    return await post(`${SERVER_IP}/graphql`, {
      query: `{
          patients {
            id
            first_name
            age
            last_name
            email
            secondary_email
            phone
            secondary_phone
            gender
            relation
            dob
            head_id
            patient_id
            designation
            active_status
            employee_id
            image
            address {
              id
              name
              address
              city
              state
              landmark
              zip
              latitude
              longitude
            }
          }
        }`,
    });
  }
);

export const getAllDoctorsPatient = createAsyncThunk(
  "doctor/getAllPatient",
  async ({
    doctorId = "",
    searchText = "",
    page = 1,
    count = 10,
  }: {
    doctorId: string;
    searchText?: string;
    page?: number;
    count?: number;
  }) => {
    return await get(
      `${SERVER_IP}/api/v1/doctor/doctor-patients/${doctorId}?searchText=${searchText}&page=${page}&count=${count}`
    );
  }
);

export const createPatientDetails = createAsyncThunk(
  "patients/createPatientDetails",
  async (patient: any) =>
    await post(`${SERVER_IP}/api/v1/doctor/patient`, patient?.payload)
);

export const editPatientDetails = createAsyncThunk(
  "patients/editPatientDetails",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/doctor/patient/${body?.patientId}`,
      body?.payload
    )
);

export const deletePatientAPI = createAsyncThunk(
  "patients/deletePatient",
  async (patientId: string, { rejectWithValue }) =>
    await del(`${SERVER_IP}/api/v1/doctor/patient/${patientId}`)
);
export const deleteClientUserAPI = createAsyncThunk(
  "employee/deleteClientUser",
  async ({patientId,clientId}: any) =>
    await post(`${SERVER_IP}/api/v1/client/detag`, {
      user_id: `${patientId}`,
      client_id: clientId,
    })
);

export const uploadMedicalRecord = createAsyncThunk(
  "patients/uploadMedicalRecord",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/userReports`, body?.payload)
);

export const getPatientMedicalRecordAPI = createAsyncThunk(
  "patients/getPatientMedicalRecord",
  async (body: any) =>
    await get(
      `${SERVER_IP}/api/v1/userReports/user?user_id=${
        body?.patientId
      }&searchText=${body?.filters?.searchText ?? ""}&type=${
        body?.filters?.type ?? ""
      }`
    )
);

export const deletePatientMedicalRecordAPI = createAsyncThunk(
  "patients/deletePatientMedicalRecord",
  async (body: any) => await del(`${SERVER_IP}/api/v1/userReports/${body?.id}`)
);
