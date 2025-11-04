/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../Api/baseApi";

export interface IGetAllUsersQuery {
  keyword?: string;
  page?: number;
  limit?: number;
  role?: string;
}

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
      providesTags: ["users"],
    }),

    // deleteVideo: builder.mutation({
    //   query: ({ courseId, lectureId }) => ({
    //     url: `/lectures?courseId=${courseId}&lectureId=${lectureId}`,
    //     method: "DELETE",
    //     credentials: "include",
    //   }),
    //   invalidatesTags: ["course"],
    // }),
  }),
});

export const { useGetAllUsersQuery } = userApi;
