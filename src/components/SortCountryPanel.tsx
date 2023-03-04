import React, {useEffect, useState} from 'react';
import {Button, Typography} from '@mui/material';
import {countryActions} from "../store/country";
import {useAppDispatch, useAppSelector} from "../hooks";

export const SortCountryPanel = () => {
    const [sortMethod, setSortMethod] = useState<string>('')
    const sortItems = ['Country', 'Region', 'Population', 'Capital']
    const {countries} = useAppSelector(state => state.countryReducer)
    const dispatch = useAppDispatch()
    const onClick = (e: any): void => {
        setSortMethod(e.target.value)
    }

    useEffect(() => {
        let arr = [...countries]

        if (sortMethod === 'Country') {
            arr = arr.sort((a, b) => a.name.common.toUpperCase() > b.name.common.toUpperCase() ? 1 : -1);
        }
        else if (sortMethod === 'Region') {
            arr = arr.sort((a, b) => a.region.toUpperCase() > b.region.toUpperCase() ? 1 : -1);
        } else if (sortMethod === 'Population') {
            arr = arr.sort((a, b) => a.population > b.population ? -1 : 1);
        } else if (sortMethod === 'Capital') {
            arr = arr.sort((a, b) => a.capital > b.capital ? 1 : -1);
        }

        dispatch(countryActions.setCountries(arr))
    }, [sortMethod])

    return (
        <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
            <Typography component='p'>Sort by:
                {sortMethod !== ''
                    ? <Typography component='span' style={{fontWeight: 'bold', padding: '0 10px'}}>{sortMethod.toUpperCase()}</Typography>
                    : <Typography component='span' style={{fontWeight: 'bold', padding: '0 10px'}}>NONE</Typography>
                }
            </Typography>
            {sortItems.map(item =>
                <Button
                    value={item}
                    onClick={onClick}
                    sx={{p: 0}} key={item}
                    color='primary'
                >
                    {item}
                </Button>
            )}
        </div>
    );
};
