import { createSlice } from "@reduxjs/toolkit";



//Async Thunk actions





//Reducers
type Task = {
    task:string,
    id:number,
    isChecked:boolean
}[]

const initialState:Task = [
    {
        id:1,
        task:"",
        isChecked:false
    }
]

const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{}
})

export default taskSlice.reducer

