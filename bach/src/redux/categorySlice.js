import { createSlice } from "@reduxjs/toolkit"
export const categorySlice = createSlice({
    name: "counter",
    initialState: {
        isLoading: false,
        data: [{id: '1', name: 'test 1'}]
    }, // giá trị bắt đầu
    reducers: { // mục đích các hàm reducers: set lại giá trị cho state bên trên này
        startLoading: (state) => {
            state.isLoading = true;
        },
        setCategory: (state, action) => {
            state.data = action.payload; // Đọc giá trị truyền vào
            state.isLoading = false;
        },
    }
});

export const { startLoading, setData } = categorySlice.actions;

// redux thunk - middleware - goi async
export const searchCategoryThunk = () => (dispatch, getState) => { // getState đọc dữ liệu lưu trong store
    dispatch(startLoading());
};

export default categorySlice.reducer;