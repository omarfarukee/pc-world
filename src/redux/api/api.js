import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pc-world-server.vercel.app/" }),
  endpoints: (builder) => ({
    getFeaturedProducts: builder.query({
      query: () => "/featuredProducts",
    }),
    getCategory: builder.query({
      query: () => "/category",
    }),
  }),
});

export const { useGetFeaturedProductsQuery, useGetCategoryQuery } = apiSlice;
