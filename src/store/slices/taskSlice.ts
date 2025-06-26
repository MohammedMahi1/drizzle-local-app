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

type DayType = 
  "MONDAY" | 
  "TUESDAY" | 
  "WEDNESDAY" | 
  "THURSDAY" | 
  "FRIDAY" | 
  "SATURDAY" | 
  "SUNDAY";


type InitialType = {
    [day in DayType]: Task[]
}

const initialState: InitialType = {
  "MONDAY": [],
  "TUESDAY": [],
  "WEDNESDAY": [],
  "THURSDAY": [],
  "FRIDAY": [],
  "SATURDAY": [],
  "SUNDAY": [],
}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
      
    },
})

export default taskSlice.reducer

