import { SERVER_IP } from "@/lib/config";
import { get, post, put } from "@/lib/helpers";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllClientEmpoyess = createAsyncThunk(
  "employees/getAllClientEmpoyess",
  async ({
    clientId,
    searchText,
    hasEmployeeId,
    count,
    page,
    department,
    user_id,
  }: any) => {
    const params = new URLSearchParams();
    if (searchText) params.append("searchText", searchText);
    if (hasEmployeeId) params.append("hasEmployeeId", hasEmployeeId);
    if (count) params.append("count", count.toString());
    if (page) params.append("page", page.toString());
    if (department) params.append("department", department);
    if (user_id) params.append("user_id", user_id);

    const queryString = params.toString();
    const url = `${SERVER_IP}/api/v1/client/${clientId}/associated-users${
      queryString ? `?${queryString}` : ""
    }`;
    return await get(url);
  }
);

export const addNewClientEmpoyeeAPI = createAsyncThunk(
  "employees/addNewClientEmpoyee",
  async ({ clientId, data }: any) => {
    return await post(
      `${SERVER_IP}/api/v1/client/${clientId}/user?marketplace_name=raphacure
`,
      data
    );
  }
);

export const updateClientEmpoyeeAPI = createAsyncThunk(
  "employees/addNewClientEmpoyee",
  async ({ clientId, data }: any) => {
    return await put(
      `${SERVER_IP}/api/v1/client/${clientId}/user?marketplace_name=raphacure
`,
      data
    );
  }
);

export const addBulkClientEmpoyeeAPI = createAsyncThunk(
  "employees/addBulkClientEmpoyee",
  async ({ clientId, data }: any) => {
    return await post(
      `${SERVER_IP}/api/v1/client/${clientId}/userBulk?marketplace_name=raphacure`,
      data
    );
  }
);

export const addClientBulkEmployessAPI = createAsyncThunk(
  "employees/addClientBulkEmployess",
  async (payload: any) => {
    return await post(`${SERVER_IP}/api/v1/client/bulkUsers`, payload);
  }
);
