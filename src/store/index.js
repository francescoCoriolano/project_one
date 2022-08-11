// import { configureStore } from "@reduxjs/toolkit";
// import getCartItems from "./getItems-slicer";

// export const store = configureStore({
//   reducer: {
//     cart: getCartItems,
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
import productsListReducer from "./producstListReducer";

export const store = configureStore({
  reducer: {
    productsList: productsListReducer.reducer,
  },
});
console.log(store, "store");

// export default store;
