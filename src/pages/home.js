import React from 'react';
import { Redirect } from 'react-router-dom';

import { AuthConsumer } from '../assets/auth/authentication/user-context';

import Login from '../assets/auth/authentication/login';
import BandLogo from '../components/band-logo';
import { useAuth0 } from '@auth0/auth0-react';
import ReactPlayer from 'react-player';
import User from '../components/user';
import Logout from '../assets/auth/authentication/logout';
import DashboardPage from './dashboard';

const HomePage = () => {

  const { isAuthenticated } = useAuth0();

  return (
    isAuthenticated ? (
      <>
        <DashboardPage/>
      </>
    ) : (
      [
        <div>
          <br/><br/>
          <ReactPlayer style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                       url="https://soundcloud.com/user-165647041/sets/shrine-of-the-seventh-planet"/>
          <br/><br/>
        </div>
        // <BandLogo/>
      ]
    )
  );
};

export default HomePage;