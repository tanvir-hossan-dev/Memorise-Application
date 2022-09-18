import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/ApiSlice";
import cardSlice from "../features/card/cardSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cards: cardSlice.reducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(apiSlice.middleware),
});

export default store;
