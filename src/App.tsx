import React from 'react';
import {Route, Routes} from "react-router-dom";
import {
    DashboardPage,
    CountryPage,
    ErrorPage,
} from './pages'
import {ThemeProvider} from "@mui/material";
import {useAppSelector, useTheme} from "./hooks";

export const App = () => {
    const {isDarkMode} = useAppSelector(state => state.countryReducer)
    const theme = useTheme(isDarkMode)
    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path='/' element={<DashboardPage/>}/>
                <Route path='/:name' element={<CountryPage/>}/>
                <Route path='/error' element={<ErrorPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </ThemeProvider>
    );
};