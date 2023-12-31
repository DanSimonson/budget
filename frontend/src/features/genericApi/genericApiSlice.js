import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const genericApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Category", "Transaction"],
  endpoints: (builder) => ({}),
});
