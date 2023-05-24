import { configureStore } from "@reduxjs/toolkit";

 export const  store = configureStore ({
    reducer:{
        category: createReducer,
        user: add
    }
 })