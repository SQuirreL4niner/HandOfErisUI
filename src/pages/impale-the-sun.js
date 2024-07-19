import React, { useState } from 'react';
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
import Impale1 from '../assets/impale-images/impale1.png';
import Impale2 from '../assets/impale-images/impale2.png';
import Impale3 from '../assets/impale-images/impale3.png';
import Impale4 from '../assets/impale-images/impale4.png';
import Impale5 from '../assets/impale-images/impale5.png';
import Impale6 from '../assets/impale-images/impale6.png';
import Impale7 from '../assets/impale-images/impale7.png';
import Impale8 from '../assets/impale-images/impale8.png';
import button1 from '../assets/button-01.png';

const ImpaleTheSun = () => {
  const [isOn, setSlideShow] = useState(true);
  const [interval, setInterval] = useState(null);
  const { isAuthenticated } = useAuth0();
  let slideShow = false;

  function slideShowToggle() {
    setSlideShow(!isOn);
    let time = isOn ? 5000 : null;
    setInterval(time);
  }

  return isAuthenticated ? (
    <>
      <DashboardPage />
    </>
  ) : (
    <div>
      <div className="text-center">
        <Carousel
          //slide={true}
          interval={interval}
          indicators={false}
          prevLabel=""
          nextLabel=""
        >
          <Carousel.Item>
            <img src={Impale1} className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Impale3} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Impale4} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Impale2} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Impale5} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Impale6} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Impale7} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Impale8} alt="" className="flex w-50" />
          </Carousel.Item>
          {/* <Carousel.Item>
            <Link to={`/pestilant-evocation`}>
              <img src={PestilantEvocationCover} alt="" className="flex w-50" />
            </Link>
          </Carousel.Item> */}
        </Carousel>
        <br />
        <Row>
          <Col className="col-sm-1 d-flex align-items-start justify-content-end">
            <img
              src={button1}
              onClick={slideShowToggle}
              style={{ maxWidth: '75%', maxHeight: '75%' }}
            ></img>
          </Col>
          <Col className="col-sm-2 d-flex align-items-center justify-content-start">
            <p>Slideshow {isOn ? 'On' : 'Off'}</p>
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
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
