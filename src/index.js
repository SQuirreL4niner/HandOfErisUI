import React, { useState, useMemo, useContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import HomePage from './pages/home';
import Callback from './assets/auth/authentication/callback';
import DashboardPage from './pages/dashboard';
import UploadPage from './pages/upload';

import Profile from './pages/profile';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './assets/auth/authentication/login';
import Logout from './assets/auth/authentication/logout';
import { UserContext } from './assets/auth/authentication/user-context';
import User from './components/user';
import { useAuth0 } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = `${window.location.origin}/callback`;
const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

const App = () => {

  const [userInfo, setUser] = useState({role: 'visitor', accessToken: ''});
  //const [userInfo, setUser] = useState();
  //const initialState = useMemo(() => ({userInfo, setUser}), [userInfo, setUser])
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      audience={audience}
      scope="read:messages read:music upload:dawfile upload:music"
    >
      <UserContext.Provider value={{userInfo, setUser}}>
        <div className="app" className="d-flex flex-column h-100">
          <Container className="flex-grow-1 mt-5">
            <Router>
              <Navbar/>
              {/*<Login/>*/}
              {/*<Logout/>*/}
              <Switch>
                <Route exact path="/" component={HomePage}/>
                {/*<Route path="/callback" component={Callback}/>*/}
                <Route exact path="/dashboard" component={DashboardPage}/>
                <Route path="/upload" component={UploadPage}/>
                <Route path="/profile" component={Profile}/>
              </Switch>
            </Router>
            <Footer/>
          </Container>
        </div>
      </UserContext.Provider>
    </Auth0Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);