import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBurger = createAsyncThunk("list-menu/burgers", async () => {
  const response = await axios.get(
    "https://ig-food-menus.herokuapp.com/burgers"
  );
  return response.data;
});

export const BurgerSlice = createSlice({
  name: "burger",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBurger.pending, (state, actions) => {
        state.status = "loading";
      })
      .addCase(getBurger.fulfilled, (state, actions) => {
        state.status = "success";
        state.data = actions.payload;
      });
  },
});

export default BurgerSlice.reducer
