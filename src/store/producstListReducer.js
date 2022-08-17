import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://fakestoreapi.com/products";

const initialState = {
  productsList: [],
  isLoading: true,
};

export const getProductsList = createAsyncThunk(
  "getProductsList",
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
  extraReducers: {
    [getProductsList.pending]: (state) => {
      state.isLoading = true;
    },
    [getProductsList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.productsList = action.payload;
    },
    [getProductsList.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    },
  },
});

export const { getMostRated, getMostPopular } = productsListSlice.actions;

export default productsListSlice.reducer;
