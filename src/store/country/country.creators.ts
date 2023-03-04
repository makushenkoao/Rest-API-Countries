import {AppDispatch} from "../index";
import axios from "axios";
import {countryActions} from "./country.slice";

export const getAllCountries = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(countryActions.setIsLoadingCountries(true))
        const {data} = await axios.get('https://restcountries.com/v3.1/all')
        dispatch(countryActions.setCountries(data))
        dispatch(countryActions.setIsLoadingCountries(false))
        dispatch(countryActions.setErrorCountries(''))
    } catch (e: any) {
        dispatch(countryActions.setErrorCountries(e.message))
    }
}

export const searchCountries = (name: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(countryActions.setIsLoadingCountries(true))
        const {data} = await axios.get(  `https://restcountries.com/v3.1/name/${name}`)
        dispatch(countryActions.setCountries(data))
        dispatch(countryActions.setIsLoadingCountries(false))
        dispatch(countryActions.setErrorCountries(''))
    } catch (e: any) {
        dispatch(countryActions.setErrorCountries(e.message))
    }
}

export const getCountry = (name: string | undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(countryActions.setIsLoadingCountry(true))
        const {data} = await axios.get(  `https://restcountries.com/v3.1/name/${name}`)
        dispatch(countryActions.setCountry(data))
        dispatch(countryActions.setIsLoadingCountry(false))
        dispatch(countryActions.setErrorCountry(''))
    } catch (e: any) {
        dispatch(countryActions.setErrorCountry(e.message))
    }
}
