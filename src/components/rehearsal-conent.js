import React, { Component } from 'react';

import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Form} from "react-bootstrap";
import {AuthConsumer} from "../assets/auth/authentication/auth-context";
import BandMedia from "../assets/media/band-media";

const RehearsalContent = (props) => {

        return (
            <AuthConsumer>
                {({user, accessToken}) => (
                    <BandMedia/>
                )
                }
            </AuthConsumer>
        );
}

export default RehearsalContent;