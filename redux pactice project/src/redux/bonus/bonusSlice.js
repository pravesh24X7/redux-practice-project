import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    points: 0,
}

export const bonusSlice = createSlice({
    name: "bonus",
    initialState,
    reducers: {
        incrementBonus: (state) => {
            state.points += 1
        },
        decrementBonus: (state) => {
            state.points -= 1
        },
    }
})

export const {
    incrementBonus, decrementBonus
} = bonusSlice.actions;

export default bonusSlice.reducer;
