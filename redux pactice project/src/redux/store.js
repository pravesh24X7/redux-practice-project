import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice.js"
import bonusReducer from "./bonus/bonusSlice.js"

export const store = configureStore({
    reducer: {
        master: counterReducer,
        bonus: bonusReducer
    },
})


