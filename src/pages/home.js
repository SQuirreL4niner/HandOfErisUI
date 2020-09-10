import React from 'react';
import { Redirect } from "react-router-dom";

import {AuthConsumer} from "../assets/auth/authentication/auth-context";

import Login from '../assets/auth/authentication/login';
import BandLogo from "../components/band-logo";

const HomePage = () => (
    <AuthConsumer>
        {({authenticated}) =>
            authenticated ? (
                <Redirect to="/dashboard"/>
            ) : (
                [<Login/>, <BandLogo/>]
            )
        }
    </AuthConsumer>
);

export default HomePage;