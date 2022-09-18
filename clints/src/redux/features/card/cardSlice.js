import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
};

const cardSlice = createSlice({
  name: "cardSlice",
  initialState,
  reducers: {
    getCards: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export default cardSlice;
export const { getCards } = cardSlice.actions;
