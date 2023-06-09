import { createSlice } from '@reduxjs/toolkit'
import { getCommentByIdAPI, searchCommentAPI } from '../service/comment.service'

const initialState = {
    recordsTotal: 0,
    recordsFiltered: 0,
    comments: [],
    comment: null,
    isLoading: false,
    error: null,
    search: {
        start: 0,
        length: 10,
        keyword: ''
    }
}

export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true
        },
        setError: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        setComments: (state, action) => {
            // map voi response trả về từ api
            state.comments = action.payload.data
            state.recordsFiltered = action.payload.recordsFiltered
            state.recordsTotal = action.payload.recordsTotal
            state.isLoading = false
            state.error = null
        },
        setComment: (state, action) => {
            // map voi response trả về từ api theo id, 1 object
            state.comment = action.payload.data
            state.isLoading = false
            state.error = null
        },
        setCommentSearch: (state, action) => {
            state.search = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCommentSearch } = commentSlice.actions

//redux thunk, là hàm trả về 1 hàm bên trong chưa 2 tham số dispatch để gọi khi có dữ liệu từ api trả về, getstate đọc dữ liệu sẵn từ store ra.
export const searchComment = () =>
    async (dispatch, getState) => {
        dispatch(commentSlice.actions.startLoading())

        const { comment } = getState() // doc tu store cua redux
        const { search } = comment

        const { code, result } = await searchCommentAPI(search)

        if (code === 200)
            dispatch(commentSlice.actions.setComments(result))
        else
            dispatch(commentSlice.actions.setError(code))
    }

export const getCommentById = (id) =>
    async (dispatch) => {
        commentSlice.actions.startLoading()

        const { code, result } = await getCommentByIdAPI(id)

        if (code === 200)
            dispatch(commentSlice.actions.setComment(result))
        else
            dispatch(commentSlice.actions.setError(code))
    }

export default commentSlice.reducer