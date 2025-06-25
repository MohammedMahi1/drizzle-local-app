import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { drizzle } from "drizzle-orm/singlestore";
import { useSQLiteContext } from "expo-sqlite";
import * as schema from "../../../db/schema"




//Reducers
type Task = {
    task: string,
    id: number,
    isChecked: boolean
}

type DayType = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";


type InitialType = {
    [day in DayType]: Task[]
}

const initialState: InitialType = {
    "monday": [],
    "tuesday": [],
    "friday": [],
    "saturday": [],
    "sunday": [],
    "thursday": [],
    "wednesday": [],
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        
    },
})

export default taskSlice.reducer

