import { createSlice } from '@reduxjs/toolkit';

export const search = createSlice({
    name: 'search',
    initialState: {
        value: '',
    },
    reducers: {
        setSearch: (state, action) => {
            state.value = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setSearch } = search.actions;

export default search.reducer;