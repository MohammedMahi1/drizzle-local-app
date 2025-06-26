import { createSlice, isPlainObject, PayloadAction } from "@reduxjs/toolkit";

type InitialType = {
    isOpen:boolean,
    name:string
}

const initialState:InitialType = {
    isOpen:false,
    name:""
}

const openSlice = createSlice({
    name:"open",
    initialState,
    reducers:{
        openHandler :(state,{payload}:PayloadAction<InitialType>)=>{
            // if(state.name === payload.name){
            //     state.isOpen === payload.isOpen
            // }
        }
    }
})


export default openSlice