import { configureStore } from '@reduxjs/toolkit'
import cateReducer from './categorySlice'
import postReducer from './postSlice'
import commentReducer from './commentSlice'
import userReducer from './userSlice'
 // chỗ impport sai :v 
export const store = configureStore({
    reducer: {
        category: cateReducer,
        post: postReducer,
        comment: commentReducer,
        user: userReducer
    },
})