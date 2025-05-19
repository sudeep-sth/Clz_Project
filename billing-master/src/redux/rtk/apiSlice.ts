import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import Cookies from "js-cookie";

const backendurl = "http://127.0.0.1:8000/";
// const backendurl = "http://192.168.1.131:8000/"

const baseQuery = fetchBaseQuery({
  baseUrl: backendurl,
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const auth_token = Cookies.get("auth_token");
    if (auth_token) {
      headers.set("auth_token", `${auth_token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === "FETCH_ERROR") {
    console.log("Internal Server Error");
  }
  if (result.error?.status === 401) {
    Cookies.remove("auth_token");
    window.location.href = "/login";
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User", "Product", "Category", "Order", "Sales", "orderreqest"],
  endpoints: (builder) => ({}),
});
