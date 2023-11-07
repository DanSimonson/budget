import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  tagTypes: ["Category", "Transaction"],
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => "/api/transactions",
      providesTags: ["Transaction"],
    }),
    getTransaction: builder.query({
      query: (transactionid) => ({
        url: `/api/transactions/${transactionid}`,
      }),
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
      invalidatesTags: ["Transaction"],
    }),
    deleteTransaction: builder.mutation({
      query: ({ id }) => ({
        url: `/api/transactions/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Transaction"],
    }),
    getCategories: builder.query({
      query: () => "/api/categories",
      providesTags: ["Category"],
    }),
    getCategory: builder.query({
      query: (categoryid) => ({
        url: `/api/categories/${categoryid}`,
      }),
      provideTags: ["Category"],
    }),
    addCategory: builder.mutation({
      query: (category) => ({
        url: "/api/categories",
        method: "POST",
        body: category,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation({
      query: (category) => ({
        url: `/api/categories/${category.id}`,
        method: "PATCH",
        body: category,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation({
      query: ({ id }) => ({
        url: `/api/categories/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetTransactionsQuery,
  useGetTransactionQuery,
  useAddTransactionMutation,
  useUpdateTransactionMutation,
  useDeleteTransactionMutation,
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = apiSlice;
