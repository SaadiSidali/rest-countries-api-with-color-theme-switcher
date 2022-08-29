import { createSlice } from '@reduxjs/toolkit';

export const filter = createSlice({
    name: 'filter',
    initialState: {
        value: 'Filter by Region',
    },
    reducers: {
        setFilter: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setFilter } = filter.actions;

export default filter.reducer;
