import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { drizzle } from "drizzle-orm/singlestore";
import { useSQLiteContext } from "expo-sqlite";
import * as schema from "../../../db/schema"
import { getTasksController } from "../../../controller/taskController";


//Async Thunk actions
const getTasks = createAsyncThunk("getTasks",(_, thunkAPI) => {

    const { rejectWithValue } = thunkAPI

    try {
        const data =  getTasksController(schema.monday)
        return data
    } catch (error) {
        console.log(rejectWithValue(error));
    }
})




//Reducers
type Task = {
    task: string,
    id: number,
    isChecked: boolean
}[]

const initialState: Task = [
    {
        id: 1,
        task: "",
        isChecked: false
    }
]

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        builder.addCase(getTasks.fulfilled,()=>{
            console.log("get it");
        })
    }
})

export default taskSlice.reducer

