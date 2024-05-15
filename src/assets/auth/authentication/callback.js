import React from 'react';
import { Navigate } from 'react-router-dom';

const Callback =
  (props) =>
  ({ handleAuthentication }) => {
    if (/access_token|id_token|error/.test(props.location.hash)) {
      handleAuthentication();
    }
    return <Navigate to="/" />;
  };

export default Callback;
