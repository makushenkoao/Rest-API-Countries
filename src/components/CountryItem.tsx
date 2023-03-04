import React, {FC} from 'react';
import {Card, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {ICountry} from "../models";

interface CountryItemProps {
    country: ICountry
}

export const CountryItem: FC<CountryItemProps> = ({country}) => {
    const navigate = useNavigate()
    return (
        <Card
            onClick={() => navigate(`/${country.name.common}`)}
            sx={{display: 'flex', flexDirection: 'column', cursor: 'pointer'}}
            className='card-hover'
        >
            <img alt={country.flags.alt} src={country.flags.svg} width={'100%'} height={200} />
            <div
                style={{padding: '5px 10px'}}
            >
                <Typography
                    fontSize={30}
                    sx={{textAlign: 'center'}}
                >
                    {country.name.common}
                </Typography>
                <Typography>
                    <span style={{fontWeight: 'bold'}}>Population: </span>{country.population}
                </Typography>
                <Typography>
                    <span style={{fontWeight: 'bold'}}>Region: </span>{country.region}
                </Typography>
                <Typography>
                    <span style={{fontWeight: 'bold'}}>Capital: </span>{country.capital}
                </Typography>
            </div>
        </Card>
    );
};
