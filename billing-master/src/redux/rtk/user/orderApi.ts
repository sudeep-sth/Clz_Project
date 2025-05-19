// router.post('/create', verifyToken, createOrder);
// router.get('/all', verifyToken, getAllOrders);
// router.get('/:id', verifyToken, getOrderById);
// router.patch('/:id', verifyToken, updateOrder);
// router.delete('/:id', verifyToken, deleteOrder);

import { apiSlice } from "../apiSlice";

const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (body) => ({
        url: "api/order/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Order"],
    }),
    getAllOrders: builder.query({
      query: () => ({
        url: "api/order/all",
        method: "GET",
      }),
      providesTags: ["Order"],
    }),
    getOrderById: builder.query({
      query: (id) => ({
        url: `api/order/${id}`,
        method: "GET",
      }),
    }),

    updateOrder: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/order/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Order", "orderreqest"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `api/order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Order", "orderreqest"],
    }),
    getAllOrderRequest: builder.query({
      query: () => ({
        url: "api/order/allrequests",
        method: "GET",
      }),
      providesTags: ["orderreqest"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetAllOrdersQuery,
  useGetOrderByIdQuery,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useGetAllOrderRequestQuery,
} = orderApiSlice;
