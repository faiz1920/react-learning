import { configureStore } from "@reduxjs/toolkit";
import todoReReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReReducer,
});
