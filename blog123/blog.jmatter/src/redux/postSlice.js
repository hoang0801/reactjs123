import { createSlice } from "@reduxjs/toolkit";
import { ViewPostAPI, searchPostAPI } from "../service/postService";

const initialState = {
  recordsTotal: 0,
  recordsFiltered: 0,
  posts: [],
  post: null,
  isLoading: false,
  error: null,
  search: {
    start: 0,
    length: 50,
    id: 0,
    categoryId: ''
  }
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setPosts: (state, action) => {
      // map voi response trả về từ api
      state.posts = action.payload.data;
      state.recordsFiltered = action.payload.recordsFiltered;
      state.recordsTotal = action.payload.recordsTotal;
      state.isLoading = false;
      state.error = null;
    },
    setPost: (state, action) => {
      // map voi response trả về từ api theo id, 1 object
      state.post = action.payload.data;
      state.isLoading = false;
      state.error = null;
    },
    setPostSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPostSearch } = postSlice.actions;

//redux thunk, là hàm trả về 1 hàm bên trong chưa 2 tham số dispatch để gọi khi có dữ liệu từ api trả về, getstate đọc dữ liệu sẵn từ store ra.
export const searchPost = () =>
  async (dispatch, getState) => {
    dispatch(postSlice.actions.startLoading());
    console.log({ getState });

    const { post } = getState(); // doc tu store cua redux
    const { search } = post;

    const { code, result } = await searchPostAPI(search);
    console.log(result);

    if (code === 200)
      dispatch(postSlice.actions.setPosts(result));
    else
      dispatch(postSlice.actions.setError(code));
  };

export const viewPostById = (id) =>
  async (dispatch) => {
    postSlice.actions.startLoading();

    const { code, result } = await ViewPostAPI(id);

    if (code === 200)
      dispatch(postSlice.actions.setPost(result));
    else
      dispatch(postSlice.actions.setError(code));
  };

export default postSlice.reducer;