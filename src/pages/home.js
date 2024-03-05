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
import cover1 from '../assets/cover1.jif';

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <DashboardPage />
    </>
  ) : (
    <div>
      <br />
      <br />
      <div className="text-center">
        <img
          className="app-logo"
          src={cover1}
          alt="Album Cover"
          style={{
            maxWidth: '100%',
            margin: '0 auto',
            maxHeight: '100%',
            display: 'flex',
          }}
        />
      </div>
      <br />
      <br />
    </div>
    // <BandLogo/>
  );
};

export default HomePage;
