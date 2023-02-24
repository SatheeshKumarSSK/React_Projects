import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../actions/action";

const initialState = { count: 10 }

export const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        customIncrement: (state, action) => {
            state.count += Number(action.payload);
        },
        customDecrement: (state, action) => {
            state.count -= Number(action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetReduxOPedia, (state) => {
            state.count = 10;
        })
    }
})

export const { increment, decrement, customIncrement, customDecrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;