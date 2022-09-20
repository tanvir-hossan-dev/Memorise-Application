import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    selectedTag: (state, action) => {
      state.tags.push(action.payload);
    },
    removedTag: (state, action) => {
      const index = state.tags.indexOf(action.payload);
      if (index !== -1) {
        state.tags.splice(index, 1);
      }
    },
  },
});

export default filtersSlice;

export const { selectedTag, removedTag } = filtersSlice.actions;
