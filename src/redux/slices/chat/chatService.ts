import { createAsyncThunk } from "@reduxjs/toolkit";
import { CHAT_API, SERVER_IP } from "@/lib/config";
import { get, patch, post, put } from "@/lib/helpers";

export const getUserChatId = createAsyncThunk(
  "chat/getUserChatId",
  async ({ rcId, userId }: { rcId: any; userId?: any }) =>
    await get(
      `${CHAT_API}/api/auth/getChatId?id=RC_${rcId}${
        userId ? `&userId=${userId}` : ""
      }`
    )
);

export const createUsersChatId = createAsyncThunk(
  "chat/createUsersChatId",
  async (body: any) => await post(`${CHAT_API}/api/auth/getChatId`, body?.body)
);

export const addMessage = createAsyncThunk(
  "chat/addMessage",
  async (body: any) => await post(`${CHAT_API}/api/messages/addmsg`, body)
);

export const getAllChatInits = createAsyncThunk(
  "chat/getAllChatInits",
  async (userId: any) =>
    await get(`${CHAT_API}/api/auth/getAllChatInits?userId=${userId}`)
);

export const intiateChat = createAsyncThunk(
  "chat/intiateChat",
  async (body: any) =>
    await post(
      `${CHAT_API}/api/auth/getChatId?userId=${body?.userId}`,
      body?.body
    )
);
export const getMessages = createAsyncThunk(
  "chat/getMessages",
  async (body: any) => await post(`${CHAT_API}/api/messages/getmsg`, body)
);

export const updateReadMessagStatus = createAsyncThunk(
  "chat/updateReadMessageStatus",
  async (body: any) =>
    await put(`${CHAT_API}/api/messages/update-read-message-status`, body)
);

export const initiateIndividualChatIfNotExists = createAsyncThunk(
  "chat/initiateIndividualChatIfNotExists",
  async (body: any) =>
    await patch(`${CHAT_API}/api/messages/init-if-not-exists`, body)
);

export const saveReactToMessage = createAsyncThunk(
  "chat/saveReactToMessage",
  async ({user_id, body} : {user_id: any , body : any}) =>
    await put(`${CHAT_API}/api/messages/save-reaction?user_id=${user_id}`, body)
);