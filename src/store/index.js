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
import cartReducer from "./producstListReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // modal: modalReducer,
  },
});
