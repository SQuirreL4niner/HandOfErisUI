import React from 'react';
import { Redirect } from 'react-router-dom';

const Callback = props => (
        ({handleAuthentication}) => {
            if(/access_token|id_token|error/.test(props.location.hash)) {
                handleAuthentication();
            }
            return <Redirect to="/"/>;
        }
);

export default Callback;