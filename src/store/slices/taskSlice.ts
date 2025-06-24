import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { drizzle } from "drizzle-orm/singlestore";
import { useSQLiteContext } from "expo-sqlite";
import * as schema from "../../../db/schema"






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
})

export default taskSlice.reducer

