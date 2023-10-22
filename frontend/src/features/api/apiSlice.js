import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Transaction"],
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => "/api/transactions",
    }),
    addTransaction: builder.mutation({
      query: (transaction) => ({
        url: "/api/transactions",
        method: "POST",
        body: transaction,
      }),
      invalidatesTags: ["Transaction"],
    }),
    updateTransaction: builder.mutation({
      query: (transaction) => ({
        url: `/api/transactions/${transaction.id}`,
        method: "PATCH",
        body: transaction,
      }),
      invalidatesTags: ["Todos"],
    }),
    deleteTransaction: builder.mutation({
      query: ({ id }) => ({
        url: `/api/transactions/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Transactions"],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useAddTransactionMutation,
  useUpdateTransactionMutation,
  useDeleteTransactionMutation,
} = apiSlice;

/*  */
