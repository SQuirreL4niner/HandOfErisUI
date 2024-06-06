import React, { useState, useMemo, useContext } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import HomePage from '../pages/home';
import Callback from '../assets/auth/authentication/callback';
import DashboardPage from '../pages/dashboard';
import UploadPage from '../pages/upload';
import Profile from '../pages/profile';
import Discography from '../pages/discography';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import SplashPage from './splash';
import Footer from '../components/footer';

import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from '../assets/auth/authentication/user-context';

import '../App.css';
import './../styles/sidebar.css';

import { Col, Container, Row } from 'react-bootstrap';
import UserMenu from '../components/user-menu';
import BandLogo from '../components/band-logo';
import ImpaleTheSun from './impale-the-sun';
import PestilantEvocation from './pestilant-evocation';
import Merch from './merch';
import BiographyPage from './biography';

const Main = () => {
  const [userInfo, setUser] = useState({ role: 'visitor', accessToken: '' });
  const location = useLocation();
  const showLogo = location.pathname.match(/pestilant-evocation.*/)
    ? false
    : true;

  return (
    <>
      <Row>
        <Col xs={2} id="sidebar-wrapper">
          <Sidebar />
        </Col>
        <Col xs={8} id="">
          {showLogo ? <BandLogo /> : <></>}
        </Col>
        <Col xs={2}>
          <UserMenu />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/callback" element={<Callback />} />
            <Route exact path="/dashboard" element={<DashboardPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route path="/discography" element={<Discography />} />
            <Route path="/biography" element={<BiographyPage />} />
            <Route
              path="/pestilant-evocation"
              element={<PestilantEvocation />}
            />
            <Route
              path="/pestilant-evocation/impale-the-sun"
              element={<ImpaleTheSun />}
            />
            <Route path="/merch" element={<Merch />} />
          </Routes>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Main;

// const rootElement = document.getElementById('root');
// ReactDOM.render(<App/>, rootElement);
