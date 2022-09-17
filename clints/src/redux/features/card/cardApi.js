import apiSlice from "../api/ApiSlice";

const cardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCard: builder.query({
      query: () => "/posts",
    }),
    addCard: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
    }),
    editCard: builder.mutation({
      query: ({ id, data }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteCard: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetAllCardQuery, useAddCardMutation, useEditCardMutation, useDeleteCardMutation } = cardApi;
