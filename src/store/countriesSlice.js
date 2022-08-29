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

export const { setCountries } = countries.actions;

export default countries.reducer;
