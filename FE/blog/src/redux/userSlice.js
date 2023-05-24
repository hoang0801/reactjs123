import { searchUserAPI } from "../service/User.service";

const initialState ={
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
}

    export const userSlice = addSlice({
        name: 'user',
        initialState,
        reducers:{
            startloading:(state) =>{
                state.isLoading = true
            },
            setError:(state, action) =>{
                state.isLoading = false
                state.error = action.payload
            },
            setUsers:(state, action)=>{
                // map voi response trả về từ api
                state.users = action.payload.data
                state.recordsFitered = action.payload.recordsFiltered
                state.recordsTotal = action.payload.recordsTotal
                state.isLoading = false
                state.error = null
            },
            setuser:(state, action)=>{
                // map voi response trả về từ api theo id, 1 object
                state.user = action.payload.data
                state.isLoading =false
                state.error = null
            },
            setUserSearch:(state, action) =>{
                state.search = action.payload
            }
        }
    });
     export const { setUserSearch} = userSlice.actions

     export const searchUser =()=> async (dispatch, getState)=>{
        dispatch(userSlice.actions,startloading())

        const{user} = getState () // doc tu store cua redux
        const{ search} = user

        const {code, result} = await searchUserAPI(search)

        if (code == 200)
        dispatch(userSlice.actions.setUsers)
        else dispatch(userSlice.actions.setError(code))

     }
     export const viewUser =(id)=> async (dispatch)=>{userSlice.actions,startloading()
        const {code, result} = await searchUserAPI(id)

        if (code == 200)

            dispatch(userSlice.actions.setUsers)
        else dispatch(userSlice.actions.setError(code))

       }

       export default userSlice.reducers


