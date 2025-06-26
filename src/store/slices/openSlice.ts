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
        openModal: (state, action: PayloadAction<string>) => {
            state.day[action.payload] = true;
        },
        closeModal: (state, action: PayloadAction<string>) => {
            state.day[action.payload] = false;
        },
    },
})


export default openSlice