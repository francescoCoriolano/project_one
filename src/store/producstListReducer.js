// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getProductsList = createAsyncThunk(
//   "getProductsList",
//   async (object, { getState, rejectWithValue, dispatch }) => {
//     try {
//       const response = await axios.get("https://fakestoreapi.com/products");
//       return response.data;
//     } catch (error) {
//       rejectWithValue(error.response);
//     }
//   }
// );

// const productsList = createSlice({
//   name: "productsListReducer",
//   initialState: {
//     data: [],
//     loading: false,
//     isSuccess: false,
//     message: "",
//   },
//   reducers: {},
//   extraReducers: {
//     [getProductsList.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [getProductsList.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.data = payload;
//       state.isSuccess = true;
//     },
//     [getProductsList.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.isSuccess = false;
//       state.message = "failed";
//     },
//   },
// });

// export default productsList;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://fakestoreapi.com/products";

const initialState = {
  cartItems: [],
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  // {
  //   clearCart: (state) => {
  //     state.cartItems = [];
  //   },
  //   removeItem: (state, action) => {
  //     const itemId = action.payload;
  //     state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
  //   },
  //   increase: (state, { payload }) => {
  //     const cartItem = state.cartItems.find((item) => item.id === payload.id);
  //     cartItem.amount = cartItem.amount + 1;
  //   },
  //   decrease: (state, { payload }) => {
  //     const cartItem = state.cartItems.find((item) => item.id === payload.id);
  //     cartItem.amount = cartItem.amount - 1;
  //   },
  //   calculateTotals: (state) => {
  //     let amount = 0;
  //     let total = 0;
  //     state.cartItems.forEach((item) => {
  //       amount += item.amount;
  //       total += item.amount * item.price;
  //     });
  //     state.amount = amount;
  //     state.total = total;
  //   },
  // },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

// console.log(cartSlice);
// export const { clearCart, removeItem, increase, decrease, calculateTotals } =
//   cartSlice.actions;

export default cartSlice.reducer;
