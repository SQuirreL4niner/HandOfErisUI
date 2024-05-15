import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

import { AuthConsumer } from '../assets/auth/authentication/user-context';

import Login from '../assets/auth/authentication/login';
import BandLogo from '../components/band-logo';
import { useAuth0 } from '@auth0/auth0-react';
import ReactPlayer from 'react-player';
import User from '../components/user';
import Logout from '../assets/auth/authentication/logout';
import DashboardPage from './dashboard';
import splash from '../assets/splash.png';
import cover from '../assets/cover-01.png';

const PestilantEvocation = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <DashboardPage />
    </>
  ) : (
    <div>
      <div className="text-center">
        <Link to={`/impale-the-sun`}>
          <img
            className="app-logo"
            src={cover}
            alt="Splash Page"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100vh',
              margin: '0 auto',
            }}
          />
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default PestilantEvocation;
