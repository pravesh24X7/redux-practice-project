import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    init: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.init += 1
        },
        decrement: (state) => {
            state.init -= 1
        },
        incrementByAmount: (state, action) => {
            state.init += action.payload
        }
    }
})


export const {
    increment, decrement, incrementByAmount
} = counterSlice.actions

export default counterSlice.reducer
