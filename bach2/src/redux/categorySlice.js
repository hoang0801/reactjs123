import { createSlice } from '@reduxjs/toolkit'
import { getCategoryByIdAPI, searchCategoryAPI } from '../service/category.service'

const initialState = {
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
    reducers: {
        startLoading: (state) => {
            state.isLoading = true
        },
        setError: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        setCategories: (state, action) => {
            // map voi response trả về từ api
            state.categories = action.payload.data
            state.recordsFiltered = action.payload.recordsFiltered
            state.recordsTotal = action.payload.recordsTotal
            state.isLoading = false
            state.error = null
        },
        setCategory: (state, action) => {
            // map voi response trả về từ api theo id, 1 object
            state.category = action.payload.data
            state.isLoading = false
            state.error = null
        },
        setCategorySearch: (state, action) => {
            state.search = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCategorySearch } = categorySlice.actions

//redux thunk, là hàm trả về 1 hàm bên trong chưa 2 tham số dispatch để gọi khi có dữ liệu từ api trả về, getstate đọc dữ liệu sẵn từ store ra.
export const searchCategory = () =>
    async (dispatch, getState) => {
        dispatch(categorySlice.actions.startLoading())

        const { category } = getState() // doc tu store cua redux
        const { search } = category

        const { code, result } = await searchCategoryAPI(search)

        if (code === 200)
            dispatch(categorySlice.actions.setCategories(result))
        else
            dispatch(categorySlice.actions.setError(code))
    }

export const getCategoryById = (id) =>
    async (dispatch) => {
        categorySlice.actions.startLoading()

        const { code, result } = await getCategoryByIdAPI(id)

        if (code === 200)
            dispatch(categorySlice.actions.setCategory(result))
        else
            dispatch(categorySlice.actions.setError(code))
    }

export default categorySlice.reducer