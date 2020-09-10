import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Container} from "react-bootstrap";

import HomePage from './pages/home';
import Callback from './assets/auth/authentication/callback';
import DashboardPage from './pages/dashboard';
import UploadPage from "./pages/upload";

import Auth from './assets/auth/authentication/auth';
import Profile from "./pages/profile";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import {Auth0Provider} from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const redirectUri = `${window.location.origin}/callback`;

function App() {
    return (
        <Auth0Provider domain={domain} clientId={clientId} redirectUri={redirectUri}>
        <div className="app" className="d-flex flex-column h-100">
            <Container className="flex-grow-1 mt-5">
                <Auth>
                    <Router>
                        <Navbar/>
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/callback" component={Callback}/>
                            <Route exact path="/dashboard" component={DashboardPage}/>
                            <Route path="/upload" component={UploadPage}/>
                            <Route path="/profile" component={Profile}/>
                        </Switch>
                    </Router>
                    <Footer/>
                </Auth>
            </Container>
        </div>
        </Auth0Provider>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);