import { baseApi } from "@/redux/api/baseApi";

const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: ({
        keyword,
        page,
        limit,
        status,
      }: {
        keyword?: string;
        page?: number;
        limit ?: number;
        status?: string;
      }) => {
        const params = new URLSearchParams();

        if (keyword) params.append("keyword", keyword);
        if (page) params.append("page", page.toString()); 
        if (limit) params.append("limit", limit.toString());
        if (status) params.append("status", status);

        return {
          url: `/order${params.toString() ? `?${params.toString()}` : ""}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["order"],
    }),

    getSingleProductOrderById: builder.query({
      query: (id) => ({
        url: `/order/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["order"],
    }),

    getMyOrders: builder.query({
      query: ({
        keyword,
        page,
        status,
      }: {
        keyword?: string;
        page?: number;
        status?: string;
      }) => {
        const params = new URLSearchParams();

        if (keyword) params.append("keyword", keyword);
        if (page) params.append("page", page.toString());
        if (status) params.append("status", status);

        return {
          url: `/order/my-orders${params.toString() ? `?${params.toString()}` : ""}`,
          method: "GET",
          credentials: "include",
        };
      },
      providesTags: ["order"],
    }),

    addProduct: builder.mutation({
      query: (data) => ({
        url: `/product/add`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["order"],
    }),

    updateOrderStatus: builder.mutation({
      query: (data) => ({
        url: `/order/update-status`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["order"],
    }),


     checkout: builder.mutation({
      query: (data) => ({
        url: `/order/checkout`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["order"],
    }),

    createOrder: builder.mutation({
      query: (data) => ({
        url: `/order/create`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetSingleProductOrderByIdQuery,
  useGetMyOrdersQuery,
  useAddProductMutation,
  useUpdateOrderStatusMutation,
  useCheckoutMutation,
  useCreateOrderMutation
} = ordersApi;
