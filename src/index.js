import React, { useState, useMemo, useContext, useEffect } from 'react';
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
import logo from './assets/logo.png';
//import gridBackground from './assets/grid back.jpg';

import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from './assets/auth/authentication/user-context';

import './App.css';

import { Col, Container, Row } from 'react-bootstrap';
import splash from './components/band-logo';

const App = () => {
  const [userInfo, setUser] = useState({ role: 'visitor', accessToken: '' });
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 5000);
  }, []);

  return !splash ? (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    >
      <UserContext.Provider value={{ userInfo, setUser }}>
        <Container fluid="xs" className="">
          <Router>
            <Main />
          </Router>
        </Container>
      </UserContext.Provider>
    </Auth0Provider>
  ) : (
    <div
      style={{
        width: '100%',
        margin: '0 auto',
        height: '100vh',
        backgroundColor: 'black',
        backgroundSize: '100vw 100vh',
        //backgroundRepeat: 'repeat',
        minHeight: '100vh',
        /* display: 'flex'; */
        //flexDirection: 'column'
      }}
    >
      <img
        className="app-logo"
        src={logo}
        alt="Album Cover"
        style={{
          maxWidth: '80%',
          top: '30%',
          left: '10%',
          position: 'absolute',
          // margin: '0 auto',
          // marginLeft: 'auto',
          // marginRight: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
