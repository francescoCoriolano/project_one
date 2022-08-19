import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IItem } from "../helpers/interfaces";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./index";

const url = "https://fakestoreapi.com/products";

interface IInitialState {
  productsList: IItem[];
  isLoading: boolean;
}

const initialState: IInitialState = {
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
  reducers: {
    // [getProductsList.pending]: (state: any) => {
    //   state.isLoading = true;
    // },
    // [getProductsList.fulfilled]: (state: any, action: PayloadAction <any>) => {
    //   state.isLoading = false;
    //   state.productsList = action.payload;
    // },
    // [getProductsList.rejected]: (state: any, action: PayloadAction <any>) => {
    //   state.isLoading = false;
    // },
  },
});

export default productsListSlice.reducer;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
