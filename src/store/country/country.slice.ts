import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICountry} from "../../models";

interface CountryState {
    countries: ICountry[],
    countriesAreLoading: boolean,
    countriesAreError: string,
    country: ICountry[],
    countryIsLoading: boolean,
    countryIsError: string,
    isDarkMode: boolean,
}

const initialState: CountryState ={
    countries: [],
    countriesAreLoading: true,
    countriesAreError: '',
    country: [],
    countryIsError: '',
    countryIsLoading: true,
    isDarkMode: false,
}

export const CountrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setCountries(state, action: PayloadAction<ICountry[]>) {
            return {
                ...state,
                countries: action.payload,
                countriesAreLoading: false
            }
        },

        setIsLoadingCountries(state, action: PayloadAction<boolean>) {
            return {
                ...state,
                countriesAreLoading: action.payload
            }
        },

        setErrorCountries(state, action: PayloadAction<string>) {
            return {
                ...state,
                countriesAreError: action.payload
            }
        },

        setCountry(state, action: PayloadAction<ICountry[]>) {
            return {
                ...state,
                country: action.payload,
                countryIsLoading: false
            }
        },

        setIsLoadingCountry(state, action: PayloadAction<boolean>) {
            return {
                ...state,
                countryIsLoading: action.payload
            }
        },

        setErrorCountry(state, action: PayloadAction<string>) {
            return {
                ...state,
                countryIsError: action.payload
            }
        },

        setIsDarkMode(state, action) {
            state.isDarkMode = action.payload
        },
    }
})

export const countryActions = CountrySlice.actions
export const countryReducer = CountrySlice.reducer