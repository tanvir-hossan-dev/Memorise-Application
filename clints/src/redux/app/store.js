import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/ApiSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(apiSlice.middleware),
});

export default store;
