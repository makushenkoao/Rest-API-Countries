import React from 'react';
import {Container} from "@mui/material";
import {
    Appbar,
    SearchCountryPanel,
    SortCountryPanel,
    CountryList,
} from '../components'

export const DashboardPage = () => {
    return (
        <>
            <Appbar/>
            <Container>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                        alignItems: 'center',
                        marginBottom: 50
                    }}
                >
                    <SearchCountryPanel/>
                    <SortCountryPanel/>
                </div>
                <CountryList/>
            </Container>
        </>
    );
};