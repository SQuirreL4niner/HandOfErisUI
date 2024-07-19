import React, { useState, useMemo, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './pages/main';
import logoanimation from './assets/logo-moshed-06-14-19-54-12-936.gif';
import logoanimate6 from './assets/logoanimate7.gif';

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
    }, 3000);
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
    <>
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          height: '100vh',
          backgroundImage: `url('${camowaves}')`,
          backgroundSize: '100vw 100vh',
          //minHeight: '100vh',
        }}
      ></div>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <p
          className="justify-content-md-center"
          style={{
            position: 'absolute',
            top: '20%',
            fontWeight: 'bolder',
          }}
        >
          New EP and EP Video out now!!!
        </p>
      </div>
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          height: '100vh',
          overflow: 'hidden',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img
          src={logoanimate6}
          alt="Album Cover"
          style={{
            top: '30%',
            position: 'absolute',
            maxWidth: '80%',
            margin: 'auto',
          }}
        />
      </div>
    </>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
