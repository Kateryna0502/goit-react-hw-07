import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    filterValue: "",
};
export const filterSlice = createSlice({
 name: "filters",
    initialState: INITIAL_STATE,
    reducers: {
        changeFilter: (state, action) => {
            state.filterValue = action.payload;
        },
    },
})
    
export const filterReducer = filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
export const selectNameFilter = (state) => state.filters.filterValue;

export default filterSlice;