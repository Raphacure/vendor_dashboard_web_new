import { createAsyncThunk } from "@reduxjs/toolkit";
import { SERVER_IP } from "@/lib/config";
import { get, patch, post, put } from "@/lib/helpers";

import {
  constructAllScansQuery,
  constructAllCtMriCategoryQuery,
  constructgetCtMriByCategoryQuery,
  constructgetCtmriDetailsQuery,
  constructgetPackageDetailsQuery,
} from "@/graphql/graphqlConfig";

export const getAllCategoriesListAPI = createAsyncThunk(
  "auth/getAllCategoriesListAPI",
  async () =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructAllCtMriCategoryQuery)
    )
);
export const getAllScansListAPI = createAsyncThunk(
  "auth/getAllScansListAPI",
  async () =>
    await post(`${SERVER_IP}/graphql`, JSON.stringify(constructAllScansQuery))
);

export const getCtMriByCategoryAPI = createAsyncThunk(
  "auth/getCtMriByCategoryAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructgetCtMriByCategoryQuery(body))
    )
);

export const getCtmriDetailsQueryAPI = createAsyncThunk(
  "auth/getCtmriDetailsQueryAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructgetCtmriDetailsQuery(body))
    )
);
export const getPackageDetailsQueryAPI = createAsyncThunk(
  "auth/getPackageDetailsQueryAPI",
  async (body: any) =>
    await post(
      `${SERVER_IP}/graphql`,
      JSON.stringify(constructgetPackageDetailsQuery(body))
    )
);
