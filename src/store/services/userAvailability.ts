import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.API_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "availability",
    }),
    createAvailability: builder.mutation({
      query: (body) => ({
        url: "/availability/create",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetUsersQuery , useCreateAvailabilityMutation } = userApi;
