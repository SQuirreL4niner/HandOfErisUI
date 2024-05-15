import React, { useState, useMemo, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/home';
import Callback from './assets/auth/authentication/callback';
import DashboardPage from './pages/dashboard';
import UploadPage from './pages/upload';
import SplashPage from './pages/splash';
import Profile from './pages/profile';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import Main from './pages/main';

import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from './assets/auth/authentication/user-context';

import './App.css';

import { Col, Container, Row } from 'react-bootstrap';
import UserMenu from './components/user-menu';
import BandLogo from './components/band-logo';

const App = () => {
  const [userInfo, setUser] = useState({ role: 'visitor', accessToken: '' });

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    >
      <UserContext.Provider value={{ userInfo, setUser }}>
        <Container fluid="xs">
          <Router>
            <Main />
          </Router>
        </Container>
      </UserContext.Provider>
    </Auth0Provider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
