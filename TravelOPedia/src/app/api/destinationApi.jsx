import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const destinationApi = createApi({
    reducerPath: 'apiDestination',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001/' }),
    tagTypes: ["Destinations"],
    endpoints: (builder) => ({
        getAllDestination: builder.query({
            query: () => ({
                url: "destination",
                method: "GET",
                params: {}
            }),
            providesTags: ["Destination"],
            transformResponse: (response) => response.sort((a, b) => b.id - a.id)
        }),
        // getDestination: builder.query({
        //     query: (id) => `destination/${id}`,
        //     providesTags: (id) => {
        //         return [{ type: "Destination", id: id }];
        //     },
        // }),
        addDestination: builder.mutation({
            query: (destination) => ({
                url: "destination",
                method: "POST",
                body: destination
            }),
            invalidatesTags: ["Destination"]
        }),
        updateDestination: builder.mutation({
            query: (destination) => ({
                url: `destination/${destination.id}`,
                method: "PUT",
                body: destination
            }),
            invalidatesTags: ["Destination"]
        }),
        deleteDestination: builder.mutation({
            query: ({ id }) => ({
                url: `destination/${id}`,
                method: "DELETE",
                body: id
            }),
            invalidatesTags: ["Destination"]
        }),
    })
})

export const { useGetAllDestinationQuery, useAddDestinationMutation, useUpdateDestinationMutation, useDeleteDestinationMutation } = destinationApi;
