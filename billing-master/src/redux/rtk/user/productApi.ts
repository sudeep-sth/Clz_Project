// router.post('/create', verifyToken, createProduct);
// router.get('/all', verifyToken, getAllProducts);
// router.get('/:id', verifyToken, getProductById);
// router.patch('/:id', verifyToken, updateProduct);
// router.delete('/:id', verifyToken, deleteProduct);

import { apiSlice } from "../apiSlice";

const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (body) => ({
        url: "api/product/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: "api/product/all",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `api/product/${id}`,
        method: "GET",
      }),
    }),

    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `api/product/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `api/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useCreateProductMutation,
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApiSlice;
