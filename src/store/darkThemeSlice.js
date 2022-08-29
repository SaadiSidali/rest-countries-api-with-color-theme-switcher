import { createSlice } from '@reduxjs/toolkit'

export const darkThemeSlice = createSlice({
    name: 'darkTheme',
    initialState: {
        value: false,
    },
    reducers: {
        toggle: (state) => {

            state.value = !state.value
        },
    },
})

export const { toggle } = darkThemeSlice.actions

export default darkThemeSlice.reducer