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
  productsList: [],
};

export const getProductsList = createAsyncThunk(
  "cart/getProductsList",
  async (name, thunkAPI) => {
    try {
      const resp = await axios(url);

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const productsListSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getMostRated: (state) => {
      state.productsList = state.productsList
        .sort((a, b) => b.rating.rate - a.rating.rate)
        .splice(0, 4);
    },
    // getMostPopular: (state) => {
    //   state.productsList = state.productsList
    //     .sort((a, b) => b.rating.rate - a.rating.rate)
    //     .splice(0, 8);
    // },
  },

  extraReducers: {
    [getProductsList.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductsList.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.productsList = action.payload;
    },
    [getProductsList.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

// console.log(productsListSlice);
export const { getMostRated, getMostPopular } = productsListSlice.actions;

export default productsListSlice.reducer;
