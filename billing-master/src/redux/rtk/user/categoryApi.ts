// router.post('/create', verifyToken, createCategory);
// router.get('/all', verifyToken, getAllCategories);
// router.get('/:id', verifyToken, getCategoryById);
// router.patch('/:id', verifyToken, updateCategory);
// router.delete('/:id', verifyToken, deleteCategory);

import { apiSlice } from "../apiSlice";

const categoryApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createCategory: builder.mutation({
            query: body => ({
                url: 'api/category/create',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Category']
        }),
        getAllCategories: builder.query({
            query: () => ({
                url: 'api/category/all',
                method: 'GET'
            }),
            providesTags: ['Category']
        }),
        getCategoryById: builder.query({
            query: id => ({
                url: `api/category/${id}`,
                method: 'GET'
            })
        }),

        updateCategory: builder.mutation({
            query: ({ id, body }) => ({
                url: `api/category/${id}`,
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['Category']
        }),
        deleteCategory: builder.mutation({
            query: id => ({
                url: `api/category/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Category']
        })
    })
});

export const {
    useCreateCategoryMutation,
    useGetAllCategoriesQuery,
    useGetCategoryByIdQuery,
    useUpdateCategoryMutation,
    useDeleteCategoryMutation
} = categoryApiSlice;
