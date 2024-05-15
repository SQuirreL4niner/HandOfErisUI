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
import homeimage from '../assets/home-image.png';

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <DashboardPage />
    </>
  ) : (
    <div>
      <div className="">
        <img
          className=""
          src={homeimage}
          alt="Home Page"
          style={{
            width: '100vw',
            height: '45vw',
          }}
        />
        <button
          className="btn btn-danger"
          style={{
            padding: '30px',
            position: 'absolute',
            left: '800px',
            top: '200px',
          }}
        >
          Click to play latest
        </button>
      </div>
      <br />
    </div>
    //
  );
};

export default HomePage;
