import { configureStore } from "@reduxjs/toolkit";
import producstListReducer from "./producstListReducer";

export const store = configureStore({
  reducer: {
    producstListReducer: producstListReducer,
  },
});
