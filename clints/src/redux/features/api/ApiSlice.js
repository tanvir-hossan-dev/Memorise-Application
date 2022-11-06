import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://todo1app1.herokuapp.com/",
  }),
  endpoints: (builder) => ({}),
});

export default apiSlice;
