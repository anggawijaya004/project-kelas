import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBestFood = createAsyncThunk("list-menu/best-food", async () => {
  const response = await axios.get(
    "https://ig-food-menus.herokuapp.com/best-foods"
  );
  return response.data;
});

export const bestFoodSlice = createSlice({
  name: "bestFood",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBestFood.pending, (state, actions) => {
        state.status = "loading";
      })
      .addCase(getBestFood.fulfilled, (state, actions) => {
        state.status = "success";
        state.data = actions.payload;
      });
  },
});

export default bestFoodSlice.reducer
