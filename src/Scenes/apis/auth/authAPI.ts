import { SERVER_IP } from "@/lib/config";
import { post } from "@/lib/helpers";
import { userLoginPayload } from "./authAPI.types";

export const loginUserAPI = (payload:userLoginPayload, { signal }:any={}) => {
  return post(`${SERVER_IP}/api/v1/auth/login`, payload, {
    signal: signal,
  });
};
