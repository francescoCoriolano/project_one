import { configureStore } from "@reduxjs/toolkit";
import producstListReducer from "./producstListReducer";

export const store = configureStore({
  reducer: {
    producstListReducer: producstListReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
