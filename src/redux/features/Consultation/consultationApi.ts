import { baseApi } from "@/redux/api/baseApi";

const consultationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllConsultation: builder.query({
      query: ({
        keyword,
        page,
        limit,
      }: {
        keyword?: string;
        page?: number;
        limit?: number;
      }) => {
        const params = new URLSearchParams();

        if (keyword) params.append("keyword", keyword);
        if (page) params.append("page", page.toString());
        if (limit) params.append("limit", limit.toString());

        return {
          url: `/consultation${
            params.toString() ? `?${params.toString()}` : ""
          }`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["consultation"],
    }),

    bookConsultation: builder.mutation({
      query: (data) => ({
        url: "/consultation/book",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["consultation"],
    }),

    deleteConsultation: builder.mutation({
      query: (id) => ({
        url: `/consultation/delete/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["consultation"],
    }),
  }),
});

export const {
  useGetAllConsultationQuery,
  useBookConsultationMutation,
  useDeleteConsultationMutation,
} = consultationApi;
