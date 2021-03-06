import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

function Login() {

  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated && (
      <Button className="btn-margin btn-primary" size="sm" onClick={loginWithRedirect}>
        Login
      </Button>
  );
}

export default Login;