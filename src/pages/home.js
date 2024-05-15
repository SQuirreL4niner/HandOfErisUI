import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import { AuthConsumer } from '../assets/auth/authentication/user-context';

import Login from '../assets/auth/authentication/login';
import BandLogo from '../components/band-logo';
import { useAuth0 } from '@auth0/auth0-react';
import ReactPlayer from 'react-player';
import User from '../components/user';
import Logout from '../assets/auth/authentication/logout';
import DashboardPage from './dashboard';
import homeimage from '../assets/Eris_portal_ghosts_demons.png';
import altlogo from '../assets/symbol-01.png';

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
            height: '100vw',
          }}
        />
        <Link to={`/pestilant-evocation`}>
          <button
            className="btn btn-danger"
            style={{
              position: 'absolute',
              top: '30%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'start',
              height: '10%',
              width: '30%',
              left: '35%',
              //marginBottom: '20px',
              textAlign: 'center',
              paddingLeft: '10px',
              paddingRight: '10px',
            }}
          >
            Play Latest
          </button>
        </Link>
        {/* <div className='mx-auto'>
          <img
            className=' center-block'
            src={altlogo}
            style={{
              width: '25vw',
              height: 'auto',
            }}
          />
        </div> */}
      </div>
      <br />
    </div>
    //
  );
};

export default HomePage;
