import React from 'react';
import {Redirect} from "react-router-dom";

import {AuthConsumer} from "../assets/auth/authentication/auth-context";
import Can from '../assets/auth/authorization/can';
import Logout from "../assets/auth/authentication/logout";
import BandMedia from "../assets/media/band-media";
import RehearsalContent from "../components/rehearsal-conent";

const DashboardPage = () => (
    <AuthConsumer>
        {({user, authenticated}) =>
            authenticated ? (
                    <Can
                        role={user.role}
                        perform='upload:music'
                        yes={() => (
                            <div>
                                <h1>Dashboard</h1>
                                <br/>
                                <Logout/>
                                <br/>
                                <br/>
                                <p>"soundcloud tracks will be shown here"<br/>
                                    "there will also be a special admin dashboard"
                                </p>
                                <BandMedia/>
                            </div>
                        )}
                        no={() => (
                            <div>
                                <h1>Dashboard</h1>
                                <br/>
                                <Logout/>
                                <br/>
                                <br/>
                                <p>"soundcloud tracks will be shown here"<br/>
                                    "there will also be a special regular user dashboard"
                                </p>
                            </div>
                        )}
                    />
                ) :
                <Redirect to="/"/>
        }
    </AuthConsumer>
);

export default DashboardPage;