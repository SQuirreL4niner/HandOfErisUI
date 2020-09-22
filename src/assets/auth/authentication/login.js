import React from 'react';

import {AuthConsumer} from "./auth-context";

import {Button} from 'react-bootstrap';
import {useAuth0} from "@auth0/auth0-react";

function Login() {

    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();

    // <AuthConsumer>
    //     {({initiateLogin}) => (
    //         <div className='text-center'>
    //             <Button className="btn-margin btn-primary" onClick={initiateLogin}>
    //                 Login
    //             </Button>
    //         </div>
    //     )}
    {/*</AuthConsumer>*/
    }

    return !isAuthenticated && (
        <Button className="btn-margin btn-primary" onClick={loginWithRedirect}>
            Login
        </Button>
    );
}

export default Login;