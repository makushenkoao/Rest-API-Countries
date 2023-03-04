import React from 'react';
import {
    AppBar,
    IconButton,
    Toolbar,
    Tooltip,
} from '@mui/material'
import {Link} from 'react-router-dom'
import {
    DarkMode,
    LightMode
} from '@mui/icons-material'
import {useAppDispatch, useAppSelector} from "../hooks";
import {countryActions} from "../store/country";

export const Appbar = () => {
    const {isDarkMode} = useAppSelector(state => state.countryReducer)
    const dispatch = useAppDispatch()
    return (
        <AppBar position="static" color='inherit'>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Link
                    to='/'
                    style={{fontSize: 30, fontWeight: 'bold', color: 'inherit', textDecoration: 'none'}}
                >
                    Rest API countries
                </Link>
                {isDarkMode
                    ?
                    <Tooltip title="LightMode"
                        onClick={() => dispatch(countryActions.setIsDarkMode(false))}
                    >
                        <IconButton>
                            <LightMode sx={{cursor: 'pointer'}} fontSize={'large'}/>
                        </IconButton>
                    </Tooltip>
                    :
                    <Tooltip title="DarkMode"
                         onClick={() => dispatch(countryActions.setIsDarkMode(true))}
                    >
                        <IconButton>
                            <DarkMode sx={{cursor: 'pointer'}} fontSize={'large'}/>
                        </IconButton>
                    </Tooltip>
                }
            </Toolbar>
        </AppBar>
    );
}