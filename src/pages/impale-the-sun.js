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
        <Carousel
          fade
          slide={false}
          interval={null}
          indicators={false}
          prevLabel=""
          nextLabel=""
        >
          <Carousel.Item>
            <img src={ImpaleCoverOne} className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={ImpaleCoverTwo} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <Link to={`/pestilant-evocation`}>
              <img src={PestilantEvocationCover} alt="" className="flex w-50" />
            </Link>
          </Carousel.Item>
        </Carousel>
        <br />
        <audio
          controls
          style={{
            maxWidth: '100%',
            width: '90%',
            margin: '0 auto',
            maxHeight: '100%',
            display: 'flex',
          }}
        >
          <source
            src="https://filestoragehandoferis.blob.core.windows.net/test/ImpaleTheSun.mp3"
            type="audio/mpeg"
          ></source>
          <source
            src="https://filestoragehandoferis.blob.core.windows.net/test/ImpaleTheSun.mp3"
            type="audio/ogg"
          ></source>
        </audio>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ImpaleTheSun;
