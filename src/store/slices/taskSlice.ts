import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { drizzle } from "drizzle-orm/singlestore";
import { useSQLiteContext } from "expo-sqlite";
import * as schema from "../../../db/schema"


//Async Thunk actions
const getTasks = createAsyncThunk("getTasks", async (_, thunkAPI) => {
    const db = useSQLiteContext();
    const drizzleDb = drizzle(db, { schema });
    const { rejectWithValue } = thunkAPI

    try {
        return await drizzleDb.select().from(schema.monday);
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
    reducers: {}
})

export default taskSlice.reducer

