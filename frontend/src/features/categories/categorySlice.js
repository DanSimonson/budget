import { genericApi } from "../genericApi/genericApiSlice";

export const extendedApiSlice = genericApi.injectEndpoints({
  endpoints: (builder) => ({
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
  useGetCategoriesQuery,
  useGetCategoryQuery,
  useAddCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = extendedApiSlice;
