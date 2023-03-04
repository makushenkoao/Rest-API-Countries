import React from 'react';
import {CountryItem} from "./CountryItem";
import {Alert, CircularProgress, Grid} from "@mui/material";
import {useAppSelector} from "../hooks";

export const CountryList = () => {
    const {
        countries,
        countriesAreLoading,
        countriesAreError
    } = useAppSelector(state => state.countryReducer)

    if (countriesAreError !== '') return <Alert color='error'>Not found country</Alert>

    if (countriesAreLoading) return <span style={{display: 'flex', justifyContent: 'center'}}>
        <CircularProgress size={100}/>
    </span>


    return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {countries.map(country =>
                <Grid item xs={2} sm={4} md={4} key={country.name.common}>
                    <CountryItem
                        key={country.name.common}
                        country={country}
                    />
                </Grid>
            )}
        </Grid>
    );
};
