import React from 'react';
import {Alert} from "@mui/material";
import {Appbar} from "../components";

export const ErrorPage = () => {
    return (
        <>
            <Appbar/>
            <Alert color='error'>Not found page</Alert>
        </>
    );
};