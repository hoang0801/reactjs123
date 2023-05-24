import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";//default

 export const store = configureStore({
    reducer:{
        category: categorySlice

    },
 })


