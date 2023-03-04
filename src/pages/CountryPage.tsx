import React, {useEffect} from 'react';
import {Appbar} from "../components";
import {Card, Typography, Button, Container, Alert, CircularProgress} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../hooks";
import {Link, useParams} from "react-router-dom";
import {getCountry} from "../store/country";

export const CountryPage = () => {
    const dispatch = useAppDispatch()
    const {name} = useParams()
    const {country, countryIsError, countryIsLoading} = useAppSelector(state => state.countryReducer)

    useEffect(() => {
        dispatch(getCountry(name))
    }, [])

    if (countryIsError !== '') return <Alert color='error'>Not found country</Alert>

    if (countryIsLoading) return <span style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
        <CircularProgress size={100}/>
    </span>

    return (
        <>
            <Appbar/>
            <Container>
                <Link style={{color: 'inherit', textDecoration: 'none'}} to={'/'}>
                    <Button sx={{ fontSize: '20px', marginTop: '15px'}}>Back</Button>
                </Link>
                <div>
                    {country.map(item =>
                        <div key={item.name.common} style={{display: 'flex', gap: '100px', marginTop: '30px'}}>
                            <Card sx={{padding: '40px', width: '300px'}}>
                                <img
                                    width={'100%'} alt={item.flags.alt} src={item.flags.svg}
                                />
                            </Card>
                            <Card sx={{padding: '40px'}}>
                                <div
                                    style={{display: 'flex', gap: '40px'}}
                                >
                                    <div>
                                        <Typography width={'300px'}>
                                            <span style={{fontWeight: 'bold'}}>Official name: </span>{item.name.official}
                                        </Typography>
                                        <Typography>
                                            <span style={{fontWeight: 'bold'}}>Population: </span>{item.population}
                                        </Typography>
                                        <Typography>
                                            <span style={{fontWeight: 'bold'}}>Region: </span>{item.region}
                                        </Typography>
                                        <Typography>
                                            <span style={{fontWeight: 'bold'}}>Sub Region: </span>{item.subregion}
                                        </Typography>
                                        <Typography>
                                            <span style={{fontWeight: 'bold'}}>Capital: </span>{item.capital}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography>
                                            <span style={{fontWeight: 'bold'}}>Top Level Domain: </span>{item.tld.join(' ')}
                                        </Typography>
                                        <Typography>
                                            <span style={{fontWeight: 'bold'}}>Currencies: </span>{Object.values(item.currencies)
                                            .map((currency) => currency.name)
                                            .join(', ')}
                                        </Typography>
                                        <Typography>
                                            <span style={{fontWeight: 'bold'}}>Languages: </span>{Object.values(item.languages).map((language) => language).join(', ')}
                                        </Typography>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )}
                </div>
            </Container>
        </>
    );
};