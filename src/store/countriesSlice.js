import { createSlice } from '@reduxjs/toolkit';

export const countries = createSlice({
    name: 'countries',
    initialState: {
        value: [],
    },
    reducers: {
        setCountries: (state, action) => {
            state.value.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCountries } = countries.actions;

export default countries.reducer;
