import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jeoparjyApi = createApi({
  reducerPath: "jeoparjyApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://jservice.io/` }),
  endpoints: (builder) => ({
    getByCategory: builder.query({
      query: (number) => `api/category?id=${number}`,
    }),
  }),
});
