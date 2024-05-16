import React from 'react';
import { Redirect } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

import { AuthConsumer } from '../assets/auth/authentication/user-context';

import Login from '../assets/auth/authentication/login';
import BandLogo from '../components/band-logo';
import { useAuth0 } from '@auth0/auth0-react';
import ReactPlayer from 'react-player';
import User from '../components/user';
import Logout from '../assets/auth/authentication/logout';
import DashboardPage from './dashboard';
import { Col, Row } from 'react-bootstrap';
import splash from '../assets/splash.png';
import backcover from '../assets/back-cover.png';
import impaleTitle from '../assets/impale-title.png';
import sieTitle from '../assets/sie-title.png';
import serpantsTitle from '../assets/serpants-title.png';
import faithTitle from '../assets/faith-title.png';

const PestilantEvocation = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <DashboardPage />
    </>
  ) : (
    <div>
      <div className="text-center">
        <Row>
          <Col className="col-sm-4">
            <Row className="row h-25"></Row>
            <Row className="row h-25">
              <Link to={`/pestilant-evocation/impale-the-sun`}>
                <img
                  className="app-logo"
                  src={impaleTitle}
                  alt="Splash Page"
                  style={{
                    //objectFit: 'cover',
                    width: '100%',
                    //height: '100vh',
                    margin: '0 auto',
                  }}
                />
              </Link>
            </Row>
            <Row className="row h-25"></Row>
            <Row className="row h-25">
              <Link to={`/pestilant-evocation/impale-the-sun`}>
                <img
                  className="app-logo"
                  src={faithTitle}
                  alt="Splash Page"
                  style={{
                    width: '100%',
                    //height: '100vh',
                    margin: '0 auto',
                  }}
                />
              </Link>
            </Row>
          </Col>
          <Col className="col-sm-4">
            <Link to={`/pestilant-evocation/impale-the-sun`}>
              <img
                className="app-logo"
                src={backcover}
                alt="Splash Page"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  //height: '100vh',
                  margin: '0 auto',
                }}
              />
            </Link>
          </Col>
          <Col className="col-sm-4">
            <Row className="row h-25"></Row>
            <Row className="row h-25">
              <img
                className="app-logo"
                src={serpantsTitle}
                alt="Splash Page"
                style={{
                  width: '100%',
                  margin: '0 auto',
                }}
              />
            </Row>
            <Row className="row h-25"></Row>
            <Row className="row h-25">
              <img
                className="app-logo"
                src={sieTitle}
                alt="Splash Page"
                style={{
                  width: '100%',
                  //height: '100vh',
                  margin: '0 auto',
                }}
              />
            </Row>
          </Col>
        </Row>
        <br />
        <br />
      </div>
    </div>
  );
};

export default PestilantEvocation;
