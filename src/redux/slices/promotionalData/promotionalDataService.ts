import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, post } from "@/lib/helpers";

// Helper function to get marketplace name
const getMarketplaceName = () => {
  try {
    // Try to get from localStorage first
    const userString = localStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      if (user?.parent_doctor_id) {
        return `clinic-${user.parent_doctor_id}`;
      } else if (user?.roles && user.roles.length > 0 && user.roles[0]?.linkable_id) {
        return `clinic-${user.roles[0].linkable_id}`;
      }
    }
    
    return ""; // Default fallback
  } catch (error) {
    console.error("Error getting marketplace name:", error);
    return ""; // Default fallback on error
  }
};

// Helper to append query param
const appendMarketplace = (url: string) => {
  const marketplaceName = getMarketplaceName();
  const separator = url.includes('?') ? '&' : '?';
  return marketplaceName ? `${url}${separator}marketplace_name=${marketplaceName}` : url;
};

export const getAllPromotinalDataAPI = createAsyncThunk(
  "promotions/getall",
  async (body: any) => await post(appendMarketplace(`${SERVER_IP}/api/v1/promotions/getAll`), body)
);

export const getCitiesPromotinalAPI = createAsyncThunk(
  "promotions/getcities",
  async (body: any) =>
    await post(appendMarketplace(`${SERVER_IP}/api/v1/promotions/getCities`), body)
);

export const getStatesPromotinalAPI = createAsyncThunk(
  "promotions/getstates",
  async (body: any) =>
    await post(appendMarketplace(`${SERVER_IP}/api/v1/promotions/getStates`), body)
);

export const getPincodesPromotinalAPI = createAsyncThunk(
  "promotions/getpincodes",
  async (body: any) =>
    await post(appendMarketplace(`${SERVER_IP}/api/v1/promotions/getPincodes`), body)
);

export const getCategoriesPromotinalAPI = createAsyncThunk(
  "promotions/getcategories",
  async (body: any) =>
    await post(appendMarketplace(`${SERVER_IP}/api/v1/promotions/getCategory`), body)
);

export const getSectionsPromotinalAPI = createAsyncThunk(
  "promotions/getsection",
  async (body: any) =>
    await post(appendMarketplace(`${SERVER_IP}/api/v1/promotions/getSection`), body)
);


export const sendPromotionsEmails = createAsyncThunk(
  "promotions/sendEmails",
  async (body: any) =>
    await post(appendMarketplace(`${SERVER_IP}/api/v1/promotions/send-promotions-emails`), body)
);

export const getPromotionalEmailsTemplateAPI = createAsyncThunk(
  "promotions/getEmailTemplates",
  async () => (
    await get(appendMarketplace(`${SERVER_IP}/api/v1/promotions/get-promotional-email-templetes`))
  )
);

export const getPromotionalWhatsappTemplateAPI = createAsyncThunk(
  "promotional/getWhatsappTemplates",
  async() => {
    return await get(appendMarketplace(`${SERVER_IP}/api/v1/promotions/get-promotional-wa-templetes`));
  }
);

export const getPromotionalRCSAPI = createAsyncThunk(
  "promotional/getRCS",
  async() => {
    return await get(appendMarketplace(`${SERVER_IP}/api/v1/communication/rcstemplate`));
  }
);

export const createBulkPromotionalDataAPI = createAsyncThunk(
  "auth/createBulkPromotionalDataAPI",
  async (body: any) => await post(appendMarketplace(`${SERVER_IP}/api/v1/promotions`), body)
);