import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jeoparjyApi = createApi({
  reducerPath: "jeoparjyApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://jservice.io/api/` }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => `clues`,
    }),
  }),
});
