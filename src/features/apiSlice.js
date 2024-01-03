import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'productsApi',
    // baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => '/todos',
            transformResponse: res => res.sort((a, b) => b.id - a.id),
            providesTags: ['Todos']
        }),
        // getProduct: builder.query({
        //     query: (product) => `products/search?q=${product}`,
        // })
        addTodo: builder.mutation({
            query: (todo) => ({
                url: '/posts',
                method: 'POST',
                body: todo
            }),
            invalidateTags: ['Todos']
        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: `/posts/1${todo.id}`,
                method: 'PATCH',
                body: todo
            }),
            invalidateTags: ['Todos']
        }),
        deleteTodo: builder.mutation({
            query: ({id}) => ({
                url: `/posts/1${id}`,
                method: 'DELETE',
                body: id
            }),
            invalidateTags: ['Todos']
        })
    }),
});


export const {
    useGetAllProductsQuery, 
    useGetProductQuery, 
    useAddTodoMutation, 
    useUpdateTodoMutation, 
    useDeleteTodoMutation
} = apiSlice