/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "@/redux/api/baseApi";

export interface IGetAllUsersQuery {
  keyword?: string;
  page?: number;
  limit?: number;
  role?: string;
}

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),

    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/user/update-profile`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),

    getAllUsers: builder.query<any, IGetAllUsersQuery | void>({
      query: (params) => ({
        url: "/user/all",
        method: "GET",
        credentials: "include",
        params: {
          ...(params?.keyword && { keyword: params.keyword }),
          ...(params?.page && { page: params.page }),
          ...(params?.limit && { limit: params.limit }),
          ...(params?.role && { role: params.role }),
        },
      }),
      providesTags: ["user"],
    }),

    getRazorpayKey: builder.query({
      query: () => ({
        url: "/get-key",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
    }),
  }),
});

export const {  useGetMeQuery, useUpdateProfileMutation, useGetAllUsersQuery , useGetRazorpayKeyQuery } = userApi;
