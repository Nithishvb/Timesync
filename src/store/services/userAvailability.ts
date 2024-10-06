import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/user/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "availability",
    }),
    createAvailability: builder.mutation({
      query: (body) => ({
        url: "/availability",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetUsersQuery , useCreateAvailabilityMutation } = userApi;
