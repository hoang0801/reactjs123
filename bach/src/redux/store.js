import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./categorySlice";
export const store = configureStore({
    reducer:{ // bản chất là hàm cập nhật dữ liệu, trạng thái
        category: categoryReducer
    },
});