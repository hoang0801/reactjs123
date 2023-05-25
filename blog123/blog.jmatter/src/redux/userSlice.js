import { createSlice } from "@reduxjs/toolkit";
import { ViewUserAPI, searchUserAPI } from "../service/userService";

const initialState = {
  recordsTotal: 0,
  recordsFiltered: 0,
  users: [],
  user: null,
  isLoading: false,
  error: null,
  search: {
    start: 0,
    length: 10,
    value: ''
  }
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setUsers: (state, action) => {
      // map voi reponse tra ve tu API
      state.users = action.payload.data;
      state.recordsFiltered = action.payload.recordsFiltered;
      state.recordsTotal = action.payload.recordsTotal;
      state.isLoading = false;
      state.error = null;
    },
    setUser: (state, action) => {
      // map voi response trả về từ api theo id, 1 object
      state.user = action.payload.data;
      state.isLoading = false;
      state.error = null;
    },
    setUserSearch: (state, action) => {
      state.search = action.payload;
    }
  }
});
export const { setUserSearch } = userSlice.actions;

export const searchUser = () =>
  async (dispatch, getState) => {
    dispatch(userSlice.actions.startLoading());

    const { user } = getState(); // doc tu store cua redux
    const { search } = user;

    const { code, result } = await searchUserAPI(search);

    if (code === 200)
      dispatch(userSlice.actions.setUsers(result));
    else
      dispatch(userSlice.actions.setError(code));
  };

export const ViewUser = (id) =>
  async (dispatch) => {
    userSlice.actions.startLoading();

    const { code, result } = await ViewUserAPI(id);

    if (code === 200)
      dispatch(userSlice.actions.setUser(result));
    else
      dispatch(userSlice.actions.setError(code));
  };

export default userSlice.reducer;
