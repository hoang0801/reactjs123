import { configureStore } from "@reduxjs/toolkit";
import cateReducer from './categorySlice';
import commentReducer from './commentSlice';
import postReducer from './postSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    category: cateReducer,
    comment: commentReducer,
    post: postReducer

  },
});