import apiSlice from "../api/ApiSlice";
import { getCards } from "./cardSlice";

const cardApi = apiSlice.injectEndpoints({
  tagsTypes: ["GetAllCard"],
  endpoints: (builder) => ({
    getAllCard: builder.query({
      query: (tags) => "/posts",
      providesTags: ["GetAllCard"],
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(getCards(data));
      },
    }),
    addCard: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),

      invalidatesTags: ["GetAllCard"],
    }),
    editCard: builder.mutation({
      query: ({ id, data }) => ({
        url: `/posts/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["GetAllCard"],
    }),
    deleteCard: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["GetAllCard"],
    }),
  }),
});

export const { useGetAllCardQuery, useAddCardMutation, useEditCardMutation, useDeleteCardMutation } = cardApi;
