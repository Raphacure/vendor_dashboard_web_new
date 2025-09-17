import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get } from "@/lib/helpers";

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

export const getAllPromotinalLogsAPI = createAsyncThunk(
  "promotionsLogs/getall",
  async (body: any) =>
    await get(
      appendMarketplace(`${SERVER_IP}/api/v1/promotions/get-promotional-logs?page=${body?.page}&count=${body.count}&client_id=${body.linkable_id}&type=${body.type}&marketplace_name=_${body.linkable_id}`)
    )
);
