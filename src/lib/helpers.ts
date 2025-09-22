//@ts-nocheck
import fetch from "cross-fetch";
import moment from "moment";
import Axios from "axios";
import store from "@/redux/store";
import { AxiosRequestConfig } from "axios";
import { dispatchUserLogout } from "@/redux/slices/auth/authSlice";

export const getXFrontendHost = () => {
  const hostname = window.location.hostname;
  return hostname.replace("www.", "");
};

const apiClient = Axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["x-frontend"] = getXFrontendHost();
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(dispatchUserLogout());
    }
    return Promise.reject(error);
  }
);

export const get = async function (url: string, config?: AxiosRequestConfig) {
  try {
    const response = await apiClient.get(url, config);
    return response.data;
  } catch (error) {
    return Promise.reject(error?.response?.data);
  }
};
export const put = async function (
  url: string,
  body = {},
  config?: AxiosRequestConfig
) {
  try {
    const response = await apiClient.put(url, body, config);
    return response.data;
  } catch (error) {
    return Promise.reject(error?.response?.data);
  }
};
export const post = async function (
  url: string,
  body = {},
  config?: AxiosRequestConfig
) {
  try {
    const response = await apiClient.post(url, body, config);
    return response.data;
  } catch (error) {
    return Promise.reject(error?.response?.data);
  }
};
export const del = async function (
  url: string,
  body = {},
  config?: AxiosRequestConfig
) {
  try {
    const response = await apiClient.delete(url, { data: body, ...config });
    return response.data;
  } catch (error) {
    return Promise.reject(error?.response?.data);
  }
};
export const patch = async function (
  url: string,
  body = {},
  config?: AxiosRequestConfig
) {
  try {
    const response = await apiClient.patch(url, body, config);
    return response.data;
  } catch (error) {
    return Promise.reject(error?.response?.data);
  }
};

export const getToken = () => {
  return store.getState().auth.user?.accessToken;
}