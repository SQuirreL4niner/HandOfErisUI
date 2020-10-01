import React from 'react';
import { Redirect } from 'react-router-dom';

// import { AuthConsumer } from '../assets/auth/authentication/user-context';
import Can from '../assets/auth/authorization/can';
import Logout from '../assets/auth/authentication/logout';
import BandMedia from '../assets/media/band-media';
import RehearsalContent from '../components/rehearsal-conent';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import rules from '../assets/auth/authorization/rbac-rules';
import User from '../components/user';
import { Container } from 'react-bootstrap';
import { UserContext } from '../assets/auth/authentication/user-context';

const DashboardPage = () => {
  const { user, isAuthenticated } = useAuth0();

  console.log(user);
  return (
    isAuthenticated ? (
        [<User/>,
          <Logout/>,
          <Can
            role={user[process.env.REACT_APP_AUTH0_ROLE_URL]}
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
              </div>
            )}
          />]
      ) :
      <Redirect to="/"/>
  );
};

export default DashboardPage;