import { createAsyncThunk } from "@reduxjs/toolkit";
import { del, get, post, put } from "@/lib/helpers";
import { SERVER_IP } from "@/lib/config";

export const createCommunityAPI = createAsyncThunk(
  "community/createCommunityAPI",
  async (payload: any) => {
    return await post(`${SERVER_IP}/api/v1/community`, payload);
  }
);

export const updateCommunityAPI = createAsyncThunk(
  "community/updateCommunityAPI",
  async (body: any) => {
    return await put(
      `${SERVER_IP}/api/v1/community/${body?.id}`,
      body?.payload
    );
  }
);

export const getAllCommunitiesAPI = createAsyncThunk(
  "community/getAllCommunitiesAPI",
  async (body: {status?:string, count?: number, client_id: string, page?: number }) => {
    const queryParams = new URLSearchParams();
    if (body.count !== undefined) queryParams.append('count', body.count.toString());
    if (body.client_id) queryParams.append('client_id', body.client_id);
    if (body.page !== undefined) queryParams.append('page', body.page.toString());
    if(body?.status) queryParams.append("status",body.status) 
    
    return await get(`${SERVER_IP}/api/v1/community?${queryParams.toString()}`);
  }
);

export const getCommunityDetailsByIdAPI = createAsyncThunk(
  "community/getCommunityDetailsByIdAPI",
  async (id: any) => {
    return await get(`${SERVER_IP}/api/v1/community/${id}`);
  }
);

export const getAllCommunityPostsByIdAPI = createAsyncThunk(
  "community/getAllCommunityPostsByIdAPI",
  async (body: any) => {
    return await get(
      `${SERVER_IP}/api/v1/community/all-posts?community_id=${body?.id}&page=${body?.page}&count=${body?.count}&status=${body?.status}`
    );
  }
);

export const getSingleCommunityPostByIdAPI = createAsyncThunk(
  "community/getSingleCommunityPostByIdAPI",
  async (id: any) => {
    return await get(`${SERVER_IP}/api/v1/community/post/${id}`);
  }
);

export const createCommunityPostAPI = createAsyncThunk(
  "community/createCommunityPostAPI",
  async (body: any) => {
    return await post(`${SERVER_IP}/api/v1/community/post`, body);
  }
);

export const updateCommunityPostAPI = createAsyncThunk(
  "community/updateCommunityPostAPI",
  async (body: any) => {
    return await put(
      `${SERVER_IP}/api/v1/community/post/${body?.id}`,
      body?.payload
    );
  }
);

export const deleteCommunityPostAPI = createAsyncThunk(
  "community/deleteCommunityPostAPI",
  async (id: any) => {
    return await del(`${SERVER_IP}/api/v1/community/post/${id}`);
  }
);

export const getAllCategoriesAndRulesAPI = createAsyncThunk(
  "community/getAllCategoriesAndRulesAPI",
  async (section_name: "category" | "rule" | "" = "") => {
    return await get(
      `${SERVER_IP}/api/v1/community/category-rule?section_name=${section_name}`
    );
  }
);

export const sendCommunityInviteAPI = createAsyncThunk(
  "community/sendCommunityInviteAPI",
  async (body: any) => {
    return await post(`${SERVER_IP}/api/v1/community/invite`, body);
  }
);