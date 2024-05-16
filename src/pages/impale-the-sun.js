import React from 'react';
import { Link } from 'react-router-dom';

import { AuthConsumer } from '../assets/auth/authentication/user-context';

import Login from '../assets/auth/authentication/login';
import BandLogo from '../components/band-logo';
import { useAuth0 } from '@auth0/auth0-react';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player';
import User from '../components/user';
import Logout from '../assets/auth/authentication/logout';
import DashboardPage from './dashboard';
import ImpaleCoverOne from '../assets/impale-1.png';
import ImpaleCoverTwo from '../assets/impale1.png';
import PestilantEvocationCover from '../assets/cover-01.png';

const ImpaleTheSun = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <DashboardPage />
    </>
  ) : (
    <div>
      <div className="text-center">
        <Carousel>
          <Carousel.Item>
            <img
              src={ImpaleCoverOne}
              alt=""
              style={{
                //objectFit: 'cover',
                width: '60%',
                //height: '100vh',
                margin: '0 auto',
              }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Lyrics</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={ImpaleCoverTwo}
              alt=""
              style={{
                //objectFit: 'cover',
                width: '60%',
                //height: '100vh',
                margin: '0 auto',
              }}
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Part 2 lyrics</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`/pestilant-evocation`}>
              <img
                src={PestilantEvocationCover}
                alt=""
                style={{
                  //objectFit: 'cover',
                  width: '60%',
                  //height: '100vh',
                  margin: '0 auto',
                }}
              />
            </Link>
            <Carousel.Caption>
              <h3>Click to go back to Pestilant Evocation</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        {/* <img
          className=""
          src={impale}
          alt="Splash Page"
          style={{
            objectFit: 'cover',
            width: '100%',
            margin: '0 auto',
          }}
        /> */}
        <br />
        <br />
      </div>
    </div>
  );
};

export default ImpaleTheSun;
