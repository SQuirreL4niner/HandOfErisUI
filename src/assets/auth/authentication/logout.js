import React from 'react';

import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import User from '../../../components/user';


function Logout() {

  const {
    isAuthenticated,
    logout
  } = useAuth0();

  return isAuthenticated && (
    [<User/>,
      <Button to="/" className="btn btn-sm btn-danger" onClick={() => {
        logout({ returnTo: window.location.origin });
      }
      }> Logout
      </Button>]
  );

}

export default Logout;