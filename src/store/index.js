import { configureStore } from "@reduxjs/toolkit";
import producstListReducer from "../reducers/producstListReducer";

export const store = configureStore({
  reducer: {
    producstListReducer: producstListReducer,
  },
});
