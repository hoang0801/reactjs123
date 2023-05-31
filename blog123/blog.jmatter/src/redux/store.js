import { configureStore } from "@reduxjs/toolkit";
import cateReducer from './categorySlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    // category: cateReducer,
    // post: postReducer,
    // comment: commentReducer,
    user: userReducer,
    category: cateReducer,
  },
});