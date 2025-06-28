import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




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

const initialState: InitialType =
{
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
  reducers: {},
})


export default taskSlice.reducer

