import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import bestFoodReducer from "../features/bestFood/bestFoodSlice";
import burgerReducer from "../features/burger/burgerSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    bestFood: bestFoodReducer,
    burger: burgerReducer,
  },
});
