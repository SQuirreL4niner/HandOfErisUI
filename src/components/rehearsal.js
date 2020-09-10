import React, {Component} from 'react';
import axios from 'axios';
import {Progress} from 'reactstrap';
import {ToastContainer, toast} from 'react-toastify';
import {AuthConsumer} from "../assets/auth/authentication/auth-context";
import 'react-toastify/dist/ReactToastify.css';
import RehearsalContent from "../components/rehearsal-content";
import Can from "../assets/auth/authorization/can";
import Logout from "../assets/auth/authentication/logout";
import {Redirect} from "react-router-dom";

const RehearsalPage = () => {
    return (
        <AuthConsumer>
            {({user, authenticated}) =>
                authenticated && (
                        <Can
                            role={user.role}
                            perform='read:music'
                            yes={() => (
                                <div>
                                    <RehearsalContent/>
                                </div>
                            )}
                        />
                    )
            }
        </AuthConsumer>
    );
};

export default RehearsalPage;