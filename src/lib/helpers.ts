//@ts-nocheck
import fetch from "cross-fetch";
import moment from "moment";
import Axios from "axios";

export const getXFrontendHost = () => {
  const hostname = window.location.hostname;
  return hostname.replace("www.", "");
};

const handleError = (error: any) => {
  // 
}

const gotoLoginPage = () => {
  localStorage.removeItem("user");
  window.location.reload()
}

export const get = async function (url, { signal }={}) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-frontend": getXFrontendHost(),
      Authorization: "Bearer " + getToken(),
    };
    const response = await Axios.get(url, { headers, signal });
    return response.data;
  } catch (error) {
    if (error?.response?.status == 401) {
      gotoLoginPage();
    }
    throw new Error(
      error?.response?.data?.message ||
      error?.response?.data?.statusMessages?.[0]
    );
  }
};
export const put = async function (url, body = {}) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-frontend": getXFrontendHost(),
      Authorization: "Bearer " + getToken(),
    };
    const response = await Axios.put(url, body, { headers });
    return response.data;
  } catch (error) {
    if (error?.response?.status == 401) {
      gotoLoginPage();
    }
    throw new Error(
      error?.response?.data?.message ||
      error?.response?.data?.statusMessages?.[0]
    );
  }
};
export const post = async function (url, body = {}) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-frontend": getXFrontendHost(),
      Authorization: "Bearer " + getToken(),
    };
    const response = await Axios.post(url, body, { headers });
    return response.data;
  } catch (error) {
    if (error?.response?.status == 401) {
      gotoLoginPage();
    }
    throw new Error(
      error?.response?.data?.message ||
      error?.response?.data?.statusMessages?.[0]
    );
  }
};
export const del = async function (url, body = {}) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-frontend": getXFrontendHost(),
      Authorization: "Bearer " + getToken(),
    };
    const response = await Axios.delete(url, { headers });
    return response.data;
  } catch (error) {
    if (error?.response?.status == 401) {
      gotoLoginPage();
    }
    throw new Error(error?.response?.data?.statusMessages?.[0]);
  }
};
export const patch = async function (url, body = {}) {
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-frontend": getXFrontendHost(),
      Authorization: "Bearer " + getToken(),
    };
    const response = await Axios.patch(url, body, { headers });
    return response.data;
  } catch (error) {
    if (error?.response?.status == 401) {
      gotoLoginPage();
    }
    throw new Error(
      error?.response?.data?.message ||
      error?.response?.data?.statusMessages?.[0]
    );
  }
};

export const getToken = () => {
  const accessToken =
    localStorage.getItem("user") &&
      JSON.parse(localStorage.getItem("user")) &&
      JSON.parse(localStorage.getItem("user"))?.accessToken
      ? JSON.parse(localStorage.getItem("user")).accessToken
      : undefined;
  return accessToken;
};
