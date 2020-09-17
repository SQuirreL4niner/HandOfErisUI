import React from 'react';
import {Redirect} from "react-router-dom";

import {AuthConsumer} from "../assets/auth/authentication/auth-context";
import Can from '../assets/auth/authorization/can';
import Logout from "../assets/auth/authentication/logout";
import BandMedia from "../assets/media/band-media";
import RehearsalContent from "../components/rehearsal-conent";
import {useAuth0} from "@auth0/auth0-react";
import rules from "../assets/auth/authorization/rbac-rules";

const DashboardPage = () => {
    const { user, isAuthenticated} = useAuth0();

    console.log(user);
    return (
        isAuthenticated ? (
                [<Logout/>,
                    <Can
                        role={user[process.env.REACT_APP_AUTH0_ROLE_URL] }
                        perform='upload:music'
                        yes={() => (
                            <div>
                                <h1>Dashboard</h1>
                                <br/>
                                {/*<Logout/>*/}
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
                                {/*<Logout/>*/}
                                <br/>
                                <br/>
                                <p>"soundcloud tracks will be shown here"<br/>
                                    "there will also be a special regular user dashboard"
                                </p>
                                <BandMedia/>
                            </div>
                        )}
                    />]
            ) :
            <Redirect to="/"/>
    )
};

export default DashboardPage;