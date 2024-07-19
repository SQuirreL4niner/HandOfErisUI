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
import button1 from '../assets/button-01.png';
import Sie1 from '../assets/sie-images/sei1.jpg';
import Sie2 from '../assets/sie-images/sei-2.png';
import Sie3 from '../assets/sie-images/sei-3.png';
import Sie4 from '../assets/sie-images/sei-4.png';
import Sie5 from '../assets/sie-images/sei-5.png';
import Sie6 from '../assets/sie-images/sei-6.png';
import Sie7 from '../assets/sie-images/sei-7.png';
import Sie8 from '../assets/sie-images/sei-8.png';

const SieSindHier = () => {
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
            <img src={Sie1} className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Sie2} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Sie3} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Sie4} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Sie5} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Sie6} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Sie7} alt="" className="flex w-50" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Sie8} alt="" className="flex w-50" />
          </Carousel.Item>
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
            src="https://filestoragehandoferis.blob.core.windows.net/test/SeiSeinHeir.mp3"
            type="audio/mpeg"
          ></source>
          <source
            src="https://filestoragehandoferis.blob.core.windows.net/test/SeiSeinHeir.mp3"
            type="audio/ogg"
          ></source>
        </audio>
        <br />
        <br />
      </div>
    </div>
  );
};

export default SieSindHier;
