import React, { useState, useMemo, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import HomePage from './pages/home';
import Callback from './assets/auth/authentication/callback';
import DashboardPage from './pages/dashboard';
import UploadPage from './pages/upload';
import Profile from './pages/profile';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from './assets/auth/authentication/user-context';

import './app.css';
import './styles/sidebar.css';

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
        <Container fluid>
          <Router>
            <Row>
              <Col xs={2} id="sidebar-wrapper">
                <Sidebar/>
              </Col>
              <Col xs={8} id="">
                <BandLogo/>
              </Col>
              <Col xs={2}>
                <UserMenu/>
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
              </Col>
              <Col xs={8} id="">
                <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/callback" component={Callback}/>
                  <Route exact path="/dashboard" component={DashboardPage}/>
                  <Route path="/upload" component={UploadPage}/>
                  <Route path="/profile" component={Profile}/>
                </Switch>
              </Col>
              <Col xs={2}>
              </Col>
            </Row>
          </Router>
          <Footer/>
        </Container>
      </UserContext.Provider>
    </Auth0Provider>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);