import { createAsyncThunk } from "@reduxjs/toolkit";
import { constructCommunicationLinksQuery, constructgetEmailTemplatesQuery, constructgetWaTemplatesQuery } from "../../../Scenes/graphqlConfig";
import { SERVER_IP } from "@/lib/config";
import { post, put, get, patch } from "@/lib/helpers";


// communication map
export const getCommunicationMap = createAsyncThunk("communication/communicationmap", async () =>  await get(`${SERVER_IP}/api/v1/config/communicationmap`))

// whatsapp
export const waTemplateRefresh = createAsyncThunk(
  "communication/waTemplateRefresh",
  async () =>
    await patch(`${SERVER_IP}/api/v1/communication/watemplate/refresh`)
);
export const getWaTemplates = createAsyncThunk(
  "communication/getWaTemplates",
  async (body: any) =>
    await post(`${SERVER_IP}/graphql`, constructgetWaTemplatesQuery(body))
);

export const waTemplateParamsUpdate = createAsyncThunk(
    "communication/waTemplateParamsUpdate",
    async (body: any) =>
      await put(`${SERVER_IP}/api/v1/communication/watemplate/${body?.id}`, body?.payload)
  );
  
  // email
export const getEmailTemplates = createAsyncThunk(
    "communication/getEmailTemplates",
    async (body: any) =>
      await post(`${SERVER_IP}/graphql`, constructgetEmailTemplatesQuery(body))
  );
  
export const emailTemplateCreation = createAsyncThunk(
      "communication/emailTemplateCreation",
      async (body: any) =>
        await post(`${SERVER_IP}/api/v1/communication/emailtemplate`, body)
);
  
export const emailTemplateUpdate = createAsyncThunk(
      "communication/emailTemplateUpdate",
      async (body: any) =>
        await put(`${SERVER_IP}/api/v1/communication/emailtemplate/${body?.id}`, body?.payload)
);
  
  // sms
export const getSmsTemplate = createAsyncThunk(
    "communication/getSmsTemplate",
    async (body: any) =>
      await get(`${SERVER_IP}/api/v1/communication/smstemplate?belongs_to=${body?.belongs_to ?? ""}&searchText=${body?.search_text || ""}&page=${body?.page || 1}&count=${body?.count || 10}`)
  );
  
export const smsTemplateCreation = createAsyncThunk(
      "communication/smsTemplateCreation",
      async (body: any) =>
        await post(`${SERVER_IP}/api/v1/communication/smstemplate`, body)
);
  
export const smsTemplateUpdate = createAsyncThunk(
      "communication/smsTemplateUpdate",
      async (body: any) =>
        await put(`${SERVER_IP}/api/v1/communication/smstemplate/${body?.id}`, body?.payload)
);

// communication link

export const getAllCommunicationLinks = createAsyncThunk("communication/getAllCommunicationLinks", async (body: any) => await post(`${SERVER_IP}/graphql`, constructCommunicationLinksQuery(body)))

export const getCommunicationConfig = createAsyncThunk(
  "communication/getCommunicationConfig", 
  async (body: any) => await get(`${SERVER_IP}/api/v1/communication/config?belongs_to=${body?.belongs_to}`)
)

export const createCommunicationLink = createAsyncThunk(
  "communication/createCommunicationLink", 
  async (body  :any) => await post(`${SERVER_IP}/api/v1/communication/link`, body)
)

export const editCommunicationLink = createAsyncThunk(
  "communication/editCommunicationLink", 
  async (body : {id: any, payload: any}) => await put(`${SERVER_IP}/api/v1/communication/link/${body?.id}`, body?.payload)
)

