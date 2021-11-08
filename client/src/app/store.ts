import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/productSlice";
import buttonReducer from "../feature/buttonSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    buttonReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
