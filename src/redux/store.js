import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import addedProductReducer from "./builder/addBuilderSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    addedProduct: addedProductReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export const RooState = store.getState;
export const AppDispatch = store.dispatch;
