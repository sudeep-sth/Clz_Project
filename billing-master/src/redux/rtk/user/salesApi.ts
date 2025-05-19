// router.post('/create', verifyToken, createSales);
// router.get('/all', verifyToken, getAllSales);
// router.get('/:id', verifyToken, getSalesById);

import { apiSlice } from "../apiSlice";

const salesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSales: builder.mutation({
      query: (body) => ({
        url: "api/sales/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Sales", "Order"],
    }),
    getAllSales: builder.query({
      query: () => ({
        url: "api/sales/all",
        method: "GET",
      }),
    }),
    getSalesById: builder.query({
      query: (id) => ({
        url: `api/sales/${id}`,
        method: "GET",
      }),
    }),
    getAllSalesByDate: builder.query({
      query: (date) => ({
        url: `api/sales/date/${date}`,
        method: "GET",
      }),
    }),
    // getDailySales: builder.query({
    //   query: () => ({
    //     url: `api/sales/daily`,
    //     method: "GET",
    //   }),
    // }),
    getDailysales : builder.query({
      query: (date) => ({
        url: `api/sales/nepal`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateSalesMutation,
  useGetAllSalesQuery,
  useGetSalesByIdQuery,
  useGetAllSalesByDateQuery,
  useLazyGetAllSalesByDateQuery,
  useGetDailysalesQuery,
} = salesApiSlice;
