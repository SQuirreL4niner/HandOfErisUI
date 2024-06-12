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
import logoanimation from './assets/logoanimation1.gif';
//import gridBackground from './assets/grid back.jpg';

import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from './assets/auth/authentication/user-context';

import './App.css';

import { Col, Container, Row } from 'react-bootstrap';
import splash from './components/band-logo';
import camowaves from './assets/camowaves1.jpg';

const App = () => {
  const [userInfo, setUser] = useState({ role: 'visitor', accessToken: '' });
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
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
        // backgroundColor: 'black',
        backgroundImage: `url('${camowaves}')`,
        backgroundSize: '100vw 100vh',
        //backgroundRepeat: 'repeat',
        minHeight: '100vh',
        /* display: 'flex'; */
        //flexDirection: 'column'
      }}
    >
      <img
        className="app-logo"
        src={logoanimation}
        alt="Album Cover"
        style={{
          maxWidth: '80%',
          top: '30%',
          left: '30%',
          position: 'absolute',
          // margin: '0 auto',
          // marginLeft: 'auto',
          // marginRight: 'auto',
          display: 'block',
        }}
      />
      New EP and EP Video out now!!!
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
