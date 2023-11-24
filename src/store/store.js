import { configureStore } from "@reduxjs/toolkit";
import { shoppingSlice } from "../reducers/shoppingCartSlice";

export const store = configureStore({
  reducer: shoppingSlice,
});
