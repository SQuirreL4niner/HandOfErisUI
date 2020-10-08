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
import { UserContext } from './assets/auth/authentication/user-context';

const App = () => {

  const [userInfo, setUser] = useState({role: 'visitor', accessToken: ''});

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
    >
      <UserContext.Provider value={{userInfo, setUser}}>
        <body className="app" style={{backgroundColor: 'black', color: 'white',
        }}>
          <Container>
            <Router>
              <Navbar/>
              <br/>
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/callback" component={Callback}/>
                <Route exact path="/dashboard" component={DashboardPage}/>
                <Route path="/upload" component={UploadPage}/>
                <Route path="/profile" component={Profile}/>
              </Switch>
            </Router>
            <Footer/>
          </Container>
        </body>
      </UserContext.Provider>
    </Auth0Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);