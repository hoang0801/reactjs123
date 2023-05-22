import { createSlice } from "@reduxjs/toolkit"

 
 const initialState ={
    recordsTotal: 0,
    recordsFiltered: 0,
    categories: [],
    category: null,
    isLoading: false,
    error: null,
    search: {
        start: 0,
        length: 10,
        keyword: ''
    }
}
export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers :{

    }
})