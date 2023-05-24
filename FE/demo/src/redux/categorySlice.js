
import { createSlice } from "@reduxjs/toolkit";
  
const categorySlice = createSlice({
    name:"category",
    initialState:{
        isLoading: false,
        date:[{ id:'1' , title:'test'}]
    },
    reducers:{
        startLoading:(state)=>{
         state.isLoading = true
        },
         setDate: (state, action) =>{
            state.date = action.payload // doc gia tri truyen vao
            state.isLoading = false
         }
    }
});

export const {startLoading, setDate} = categorySlice.actions

export default categorySlice.reducer