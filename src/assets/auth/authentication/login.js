import React from 'react';

import {AuthConsumer} from "./auth-context";

import {Button} from 'react-bootstrap';

const Login = () => (
    <AuthConsumer>
        {({initiateLogin}) => (
            <div className='text-center'>
                <Button className="btn-margin btn-primary" onClick={initiateLogin}>
                    Login
                </Button>
            </div>
        )}
    </AuthConsumer>
);

export default Login;