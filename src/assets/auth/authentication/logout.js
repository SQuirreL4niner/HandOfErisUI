import React from 'react';

import { AuthConsumer } from "./auth-context";
import {Link, Redirect} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

import {Button} from 'react-bootstrap';

function Logout() {

    const {
        isAuthenticated,
        logout
    } = useAuth0();

    return isAuthenticated && (
    <Button to="/" className="btn btn-sm btn-danger" onClick={() => {
        logout({returnTo: window.location.origin});
    }
    }> Logout
    </Button>
        );

}

export default Logout;