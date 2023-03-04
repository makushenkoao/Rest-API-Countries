import React, {useEffect, useState} from 'react';
import {TextField} from "@mui/material";
import {useDebounce, useAppDispatch} from "../hooks";
import {getAllCountries, searchCountries} from "../store/country";

export const SearchCountryPanel = () => {
    const [name, setName] = useState<string>('')
    const dispatch = useAppDispatch()
    const debounce = useDebounce(name)

    useEffect(() => {
        if (debounce !== '')
        dispatch(searchCountries(debounce))
        else
        dispatch(getAllCountries())
    }, [debounce])

    return (
        <>
            <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Search for a country...'
            />
        </>
    );
};