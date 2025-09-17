import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { post, put, get, patch, del } from "@/lib/helpers";
import {
  getAllClientsQuery,
  getAllDocumentsApiQuery,
  getClientByIdApiQuery,
  getClientOrdersApiQuery,
  getClientsAllDocumentsApiQuery,
  getClientUsersApiQuery,
  getClinicWalletsDetailApiQuery,
  getParentClients,
  getWalletDetailsApiQuery,
} from "../../../Scenes/graphqlConfig";
import { getOrderClients } from "@/graphql/graphqlConfig";
import { OrderClients } from "./clients.types";

export const createClientAPI = createAsyncThunk(
  "reports/createClientAPI",
  async (body: any) => await post(`${SERVER_IP}/api/v1/client`, { client: body })
);
export const getClientDetailsAPI = createAsyncThunk(
  "reports/getClientDetailsAPI",
  async (iID: any) => await get(`${SERVER_IP}/api/v1/client/${iID}`)
);

export const getClientDetailsNewAPI = createAsyncThunk(
  "reports/getClientDetailsAPI",
  async (id: any) => await get(`${SERVER_IP}/api/v1/client?page=1&limit=10&status=&searchText=&client_id=${id}&marketplace_name=raphacure`)
);

export const updateClientDetailsAPI = createAsyncThunk(
  "reports/updateClientDetailsAPI",
  async (body: any) => await put(`${SERVER_IP}/client/update`, body)
);
export const getAllClients = createAsyncThunk(
  "Profile/getAllClients",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, getAllClientsQuery(body))
);

export const getAllClientsRestApi = createAsyncThunk(
  "Profile/getAllClientsRestApi",
  async (body: any) =>
    await get(`${SERVER_IP}/api/v1/client?page=${body?.page || 1}&limit=${body?.limit || 10}&status=${body?.status || ""}&searchText=${body?.searchText || ""}`)
);

export const bulkUploadClientBooking = createAsyncThunk(
  "vendor/bulkUploadClientBooking",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/client/bulk-booking`, body)
);

export const bulkUploadClient = createAsyncThunk(
  "vendor/bulkUploadClient",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/client/${body?.id}/bulk-upload`, body?.data)
);

export const updateClientDetailAPI = createAsyncThunk(
  "client/updateClientDetailAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/client/${body?.id}`, body?.payload)
);

export const getAllParentCompany = createAsyncThunk(
  "client/getAllParentCompany",
  async (type: any) =>
    await post(`${SERVER_IP}/graphql`, getParentClients(type))
);

export const getCityDetailsAPI = createAsyncThunk(
  "client/getCityDetailsAPI",
  async () =>
    await get(`${SERVER_IP}/api/v1/config`)
);

export const updateSpocDetailsAPI = createAsyncThunk(
  "client/updateSpocDetailsAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/client/${body?.id}/spoc`, body?.payload)
);

export const createHyperlinkAPI = createAsyncThunk(
  "client/createHyperlinkAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/client/${body?.id}/hyperlink`, body?.payload)
);

export const getHyperlinkAPI = createAsyncThunk(
  "client/getHyperlinkAPI",
  async (body: any) =>
    await get(`${SERVER_IP}/api/v1/client/${body?.id}/hyperlink`)
);

export const createWalletDetailsAPI = createAsyncThunk(
  "client/reateWalletDetailsAPI",
  async (body: any) =>
    await post(`${SERVER_IP}/api/v1/client/${body?.id}/wallet`, body?.payload)
);

export const getClientsAllRelatedDocumentApi = createAsyncThunk(
  "vendor/getClientsAllRelatedDocumentApi",
  async ({ id, type }: { id: any; type: any }) =>
    await post(`${SERVER_IP}/graphql`, getClientsAllDocumentsApiQuery(id, type))
);

export const getWalletDetailsApi = createAsyncThunk(
  "client/getWalletDetailsApi",
  async (clientId: any) =>
    await post(`${SERVER_IP}/graphql`, getWalletDetailsApiQuery(clientId))
);

export const createAssociateUsersAPI = createAsyncThunk(
  "client/createAssociateUsersAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/api/v1/client/${body?.id}/user
`,
      body?.payload
    )
);

export const getAssociateUsersApi = createAsyncThunk(
  "client/getAssociateUsersApi",
  async ({ clientId, count, page, searchText , fromAge, gender, toAge}: {
    clientId: any, searchText: string,
    count: number,
    page: number,
    fromAge?: number, gender?: string, toAge?: number
  }) =>
    await post(`${SERVER_IP}/graphql`, getClientUsersApiQuery({ clientId, count, page, searchText, fromAge, gender, toAge }))
);

export const updateAssociateUsersAPI = createAsyncThunk(
  "client/updateAssociateUsersAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/client/${body?.id}/user
`,
      body?.payload
    )
);

export const getClinicWalletsApi = createAsyncThunk(
  "client/getClinicWalletsApi",
  async (clientId: any) =>
    await post(`${SERVER_IP}/graphql`, getClinicWalletsDetailApiQuery(clientId))
);

export const updateClinicWalletsAPI = createAsyncThunk(
  "client/updateClinicWalletsAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/client/${body?.client?.id}/wallet/${body?.wallet?.id}`, body?.payload)
);

export const deleteClinicWalletAPI = createAsyncThunk(
  "client/deleteClinicWalletAPI",
  async (body: any) => await del(`${SERVER_IP}/api/v1/client/${body?.clientId}/wallet/${body?.walletId}`)
);


export const getClientDetailApi = createAsyncThunk(
  "client/getClientDetailApi",
  async (clientId: any) =>
    await post(`${SERVER_IP}/graphql`, getClientByIdApiQuery(clientId))
);

export const getOfflineBookingApi = createAsyncThunk(
  "client/getOfflineBookingApi",
  async (clientId: any) =>
    await post(`${SERVER_IP}/graphql`, getClientOrdersApiQuery(clientId))
);


export const createBulkUploadAPI = createAsyncThunk(
  "client/createBulkUploadAPI",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/client/${body?.id}/bulk/booking`, body?.payload)
);

export const getClientsAccountManager = createAsyncThunk(
  "Profile/getClientsAccountManager",
  async (id: any) =>
    await get(`${SERVER_IP}/api/v1/client/${id}/account-managers`)
);

export const updateClientsAccountManager = createAsyncThunk(
  "Profile/updateClientsAccountManager",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/client/${body?.id}/account-managers-update`, body?.data)
);

export const getUserWalletDetailsAPI = createAsyncThunk(
  "client/getUserWalletDetailsAPI",
  async (body: any) => {
    return await get(`${SERVER_IP}/api/v1/wallet/user/${body?.clientUsers?.id}`);
  }
);

export const updateUserWalletDetailsAPI = createAsyncThunk(
  "client/updateUserWalletDetailsAPI",
  async (body: any) => {
    const { updateData } = body;
    const url = `${SERVER_IP}/api/v1/client/user/${body?.clientUsers?.id}/wallet/${body?.wallets?.id}`;
    return await patch(url, updateData);
  }
);

export const updateDependentUsersAPI = createAsyncThunk(
  "client/updateDependentUsersAPI",
  async (body: any) =>
    await put(
      `${SERVER_IP}/api/v1/user/update-dependents/${body?.id}`,
      body?.payload
    )
);

export const getOrderClientsAPI = createAsyncThunk<OrderClients>(
  "auth/getOrderClientsAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(getOrderClients))
);

export const toggleActiveStatus = createAsyncThunk("client/toggleActiveStatus", async ({ body, id }: { id: string, body: { status: "approved" | "inactive" } }) =>
  await put(`${SERVER_IP}/api/v1/client/${id}/toggle`, body)
)

export const getWalletType = createAsyncThunk("client/getWalletType", async () =>
  await get(`${SERVER_IP}/api/v1/wallet/types`)
)

export const getDoctorspecializations = createAsyncThunk("client/doctorspecializations", async () =>
  await get(`${SERVER_IP}/api/v1/config/doctorspecializations`)
)

export const clientUsersBulkUpload = createAsyncThunk("client/clientUsersBulkUpload", async (body: any) => {
  const { id, data } = body

  return await post(`${SERVER_IP}/api/v1/client//${id}/userBulk`, { users: data })
})

export const getAssociateDoctorApi = createAsyncThunk("client/getAssociateDoctorApi", async (id: any) =>
  await get(`${SERVER_IP}/api/v1/client/${id}/associated-doctors`)
)

export const linkDoctorsToClient = createAsyncThunk("client/linkDoctorsToClient", async (data: any) =>
  await post(`${SERVER_IP}/api/v1/doctor/client-link?isActive=${data?.isActive}`, data?.body)
)

export const sendClientUserCommunication = createAsyncThunk("client/sendClientUserCommunication", async (body: any) =>
  await post(`${SERVER_IP}/api/v1/client/send-cleint-user-communication`, body)
)

export const clientConfig = createAsyncThunk("client/clientConfig", async (data: any) =>
  await put(`${SERVER_IP}/api/v1/client/config-values/${data?.id}`, data?.body)
)

export const editNewDocumentApi = createAsyncThunk(
  "client/editNewDocumentApi",
  async (body: any) =>
    await put(`${SERVER_IP}/api/v1/document/${body?.id}`, body?.payload)
);

export const addNewDocumentApi = createAsyncThunk(
  "client/addNewDocumentApi",
  async (body: any) => await put(`${SERVER_IP}/api/v1/document/presign`, body)
);

export const deleteDocumentApi = createAsyncThunk(
  "client/deleteDocumentApi",
  async (id: any) => await del(`${SERVER_IP}/api/v1/document/${id}`)
);

export const getSignedUrl = createAsyncThunk(
  "client/getSignedUrl",
  async (id: any) => await get(`${SERVER_IP}/api/v1/document/${id}/signed`)
);