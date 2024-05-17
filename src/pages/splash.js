import React from 'react';
import { Redirect, Link, NavLink } from 'react-router-dom';
import HomePage from '../pages/main';
import splash from '../assets/splash.png';

const SplashPage = () => (
  <div>
    <div className="text-center">
      <Link to={`/home`}>
        <img
          className="app-logo"
          src={splash}
          alt="Album Cover"
          style={{
            width: '100%',
            margin: '0 auto',
            height: '100vh',
          }}
        />
      </Link>
    </div>
  </div>
);

export default SplashPage;
