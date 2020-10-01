import React from 'react';

import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import User from '../../../components/user';

function Login() {

  const {
    isAuthenticated,
    loginWithRedirect,
    user
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