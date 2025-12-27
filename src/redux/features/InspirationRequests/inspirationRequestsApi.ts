import { baseApi } from "@/redux/api/baseApi";

const inspirationRequestsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllInspirationRequests: builder.query({
      query: () => {
        return {
          url: `/inspirationRequest`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["inspirationRequest"],
    }),

    uploadInspirationImage: builder.mutation({
      query: (data) => ({
        url: "/inspirationRequest/upload",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["inspirationRequest"],
    }),
  }),
});

export const {
  useGetAllInspirationRequestsQuery,
  useUploadInspirationImageMutation,
} = inspirationRequestsApi;
