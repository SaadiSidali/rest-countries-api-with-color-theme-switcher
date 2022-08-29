import { configureStore } from '@reduxjs/toolkit'
import darkThemeReducer from './darkThemeSlice'
import countriesReducer from './countriesSlice'
import searchReducer from './searchSlice'
import filterReducer from './filterSlice'

export default configureStore({
    reducer: {
        darkTheme: darkThemeReducer,
        countries: countriesReducer,
        search: searchReducer,
        filter: filterReducer
    },
})