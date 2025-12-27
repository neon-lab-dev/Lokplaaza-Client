import { baseApi } from "@/redux/api/baseApi";

const customizationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCustomizationRequests: builder.query({
      query: () => {
        return {
          url: `/customizationRequest`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["customizationRequest"],
    }),

    getSingleCustomizationRequestById: builder.query({
      query: (id) => ({
        url: `/customizationRequest/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["customizationRequest"],
    }),

    submitCustomizationRequest: builder.mutation({
      query: (data) => ({
        url: `/customizationRequest/submit`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["customizationRequest"],
    }),
  }),
});

export const {
  useGetAllCustomizationRequestsQuery,
  useGetSingleCustomizationRequestByIdQuery,
  useSubmitCustomizationRequestMutation,
} = customizationApi;
