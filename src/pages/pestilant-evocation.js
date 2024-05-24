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
import faithtitle from '../assets/faithtext.png';
import serpantstitle from '../assets/serpantstext.png';
import impaletitle from '../assets/impaletext.png';
import sietitle from '../assets/sietext.png';
import cover from '../assets/cover-01.png';

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
          <Col className="col-sm-6">
            <Row className="row h-25">
              <Link to={`/pestilant-evocation/impale-the-sun`} className="link">
                <img
                  className="--hover-color: green"
                  src={impaletitle}
                  alt="Splash Page"
                  style={{
                    //objectFit: 'cover',
                    maxWidth: '45%',
                    //height: '100vh',
                    margin: '0 auto',
                  }}
                />
              </Link>
            </Row>
            <Row className="row h-25">
              <Link to={`/pestilant-evocation/impale-the-sun`}>
                <img
                  className="app-logo"
                  src={faithtitle}
                  alt="Splash Page"
                  style={{
                    //objectFit: 'cover',
                    maxWidth: '45%',
                    //height: '100vh',
                    margin: '0 auto',
                  }}
                />
              </Link>
            </Row>
            <Row className="row h-25">
              <Link to={`/pestilant-evocation/impale-the-sun`}>
                <img
                  className="app-logo"
                  src={serpantstitle}
                  alt="Splash Page"
                  style={{
                    //objectFit: 'cover',
                    maxWidth: '90%',
                    //height: '100vh',
                    margin: '0 auto',
                  }}
                />
              </Link>
            </Row>
            <Row className="row h-25">
              <Link to={`/pestilant-evocation/impale-the-sun`}>
                <img
                  className="app-logo"
                  src={sietitle}
                  alt="Splash Page"
                  style={{
                    //objectFit: 'cover',
                    maxWidth: '45%',
                    //height: '100vh',
                    margin: '0 auto',
                  }}
                />
              </Link>
            </Row>
            <Row className="row h-25"></Row>
          </Col>
          <Col className="col-sm-6">
            <img
              className="app-logo"
              src={cover}
              alt="Splash Page"
              style={{
                objectFit: 'cover',
                width: '100%',
                //height: '100vh',
                margin: '0 auto',
              }}
            />
          </Col>
        </Row>
        <br />
        <br />
      </div>
    </div>
  );
};

export default PestilantEvocation;
