import React from 'react';
import { Redirect } from "react-router-dom";

import {AuthConsumer} from "../assets/auth/authentication/auth-context";

import Login from '../assets/auth/authentication/login';
import BandLogo from "../components/band-logo";
import {useAuth0} from "@auth0/auth0-react";

const HomePage = () => {

    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated ? (
                <Redirect to="/dashboard"/>
            ) : (
                [<Login/>, <BandLogo/>]
            )
        )
}

export default HomePage;