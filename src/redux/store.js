import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export const RooState = store.getState;
export const AppDispatch = store.dispatch;
