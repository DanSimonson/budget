import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => "/api/transactions",
    }),
  }),
});

export const { useGetTransactionsQuery } = apiSlice;
