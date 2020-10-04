import React from 'react';

import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && (
      <Button className="btn-margin btn-primary" onClick={loginWithRedirect}>
        Login
      </Button>
  );
}

export default Login;