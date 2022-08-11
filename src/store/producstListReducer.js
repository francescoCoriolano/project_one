// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const url = "https://fakestoreapi.com/products";

// const initialState = {
//   cartItems: [],
//   amount: 4,
//   total: 0,
//   isLoading: true,
// };

// const getCartItems = createAsyncThunk(
//   "cart/getCartItems",
//   async (name, thunkAPI) => {
//     try {
//       // console.log(name);
//       // console.log(thunkAPI);
//       // console.log(thunkAPI.getState());
//       // thunkAPI.dispatch(openModal());
//       const resp = await axios(url);

//       return resp.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("something went wrong");
//     }
//   }
// );

// export default getCartItems;

// //********************************************* */

///+++++++++++++++++++++++
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsList = createAsyncThunk(
  "getProductsList",
  async (object, { getState, rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      // console.log("data", redata);
      return response.data;
    } catch (error) {
      rejectWithValue(error.response);
    }
  }
);

const productsList = createSlice({
  name: "productsListReducer",
  initialState: {
    data: [],
    loading: false,
    isSuccess: false,
    message: "",
  },
  reducers: {},
  extraReducers: {
    [getProductsList.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductsList.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
      state.isSuccess = true;
    },
    [getProductsList.rejected]: (state, { payload }) => {
      state.loading = false;
      state.isSuccess = false;
      state.message = "failed";
    },
  },
});

export default productsList;
