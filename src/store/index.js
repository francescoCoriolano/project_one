// import { configureStore } from "@reduxjs/toolkit";
// import productsListReducer from "./producstListReducer";

// export const store = configureStore({
//   reducer: {
//     productsList: productsListReducer.reducer,
//   },
// });
// console.log(store, "store");

// // export default store;

import { configureStore } from "@reduxjs/toolkit";
import producstListReducer from "./producstListReducer";

export const store = configureStore({
  reducer: {
    producstListReducer: producstListReducer,
    // modal: modalReducer,
  },
});
