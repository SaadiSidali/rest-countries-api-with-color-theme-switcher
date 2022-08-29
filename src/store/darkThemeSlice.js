import { createSlice } from '@reduxjs/toolkit'

export const darkThemeSlice = createSlice({
    name: 'darkTheme',
    initialState: {
        value: false,
    },
    reducers: {
        toggle: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = !state.value
        },
    },
})

// Action creators are generated for each case reducer function
export const { toggle } = darkThemeSlice.actions

export default darkThemeSlice.reducer