import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../actions/action";

const initalState = () => {
    return {
        destinations: [
            {
                name: "Hong Kong",
                days: 7,
                fact: "World's longest covered escalator",
            },
            {
                name: "Japan",
                days: 10,
                fact: "Japan is mostly mountains",
            },
            {
                name: "New Zealand",
                days: 14,
                fact: "Last country in the world to be inhabited by humans",
            },
        ],
        destinationSelected: {}
    };
};

export const destinationSlice = createSlice({
    name: "destination",
    initialState: initalState,
    reducers: {
        destinationClicked: (state, action) => {
            state.destinationSelected = action.payload
        },
        resetDestination: (state) => {
            state.destinationSelected = {}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetReduxOPedia, (state) => {
            state.destinationSelected = {}
        })
    }
});

export const destinationReducer = destinationSlice.reducer;
export const { destinationClicked, resetDestination } = destinationSlice.actions;