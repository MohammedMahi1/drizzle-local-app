import { createSlice, isPlainObject, PayloadAction } from "@reduxjs/toolkit";

interface InitialType {
  day: {
    [key: string]: boolean;
  };
}

const initialState: InitialType = {
  day: {},
};
const openSlice = createSlice({
    name: "open",
    initialState,
    reducers: {
        openDay: (state, action: PayloadAction<string>) => {
            state.day[action.payload] = true;
        },
        closeDay: (state, action: PayloadAction<string>) => {
            state.day[action.payload] = false;
        },
    },
})

export const {openDay,closeDay} = openSlice.actions
export default openSlice.reducer