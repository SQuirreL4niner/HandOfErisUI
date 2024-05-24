import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import { AuthConsumer } from '../assets/auth/authentication/user-context';

import { useAuth0 } from '@auth0/auth0-react';
import DashboardPage from './dashboard';
import { Col, Row } from 'react-bootstrap';
import homeimage from '../assets/blupic2.png';
import button from '../assets/button-01.png';
import itunes from '../assets/applemusic.svg';
import spotifiy from '../assets/spotify.png';
import youtube from '../assets/youtube.png';
import youtubemusic from '../assets/youtubemusic.png';
import twitch from '../assets/twitch5.png';
import x from '../assets/x.png';
import instagram from '../assets/instagram.png';
import facebookimage from '../assets/facebook.png';
import bandcamp from '../assets/bandcamp.png';
import soundcloud from '../assets/soundcloud.png';

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <DashboardPage />
    </>
  ) : (
    <div>
      <div className="">
        <Row>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-2 d-flex align-items-center justify-content-end">
            <Link to={`/pestilant-evocation`}>
              <img
                src={button}
                style={{ maxWidth: '50%', maxHeight: '50%' }}
              ></img>
            </Link>
          </Col>
          <Col className="col-sm-2 d-flex align-items-center justify-content-start">
            <h4>Latest Release</h4>
          </Col>
          <Col className="col-sm-2 col-sm-2 d-flex align-items-center justify-content-end">
            <Link to={`/pestilant-evocation`}>
              <img
                src={button}
                style={{ maxWidth: '50%', maxHeight: '50%' }}
              ></img>
            </Link>
          </Col>
          <Col className="col-sm-2 d-flex align-items-center justify-content-start">
            <h4>Release Video</h4>
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center">
            <img
              className="bg-image-blend"
              src={homeimage}
              alt="Home Page"
              style={{
                maxWidth: '100%',
                maxHeight: '90%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </Col>
        </Row>
        {/* <Link to={`/pestilant-evocation`}>
          <img
            className=""
            src={button}
            style={{
              position: 'absolute',
              top: '25%',
              display: 'flex',
              // flexDirection: 'column',
              // justifyContent: 'center',
              // alignItems: 'center',
              height: '4%',
              width: '5%',
              left: '48%',
              //marginBottom: '20px',
              // textAlign: 'center',
              // paddingLeft: '10px',
              // paddingRight: '10px',
              // fontSize: '4vw',
              textAnchor: 'Newest Release',
            }}
          />
        </Link> */}
        <br />
        <br />
        <br />
        <Row>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={spotifiy}
              style={{
                maxWidth: '15vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={itunes}
              style={{
                maxWidth: '20vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={youtube}
              style={{
                maxWidth: '15vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3 align-items-center">
            <img
              className=""
              src={youtubemusic}
              style={{
                maxWidth: '22vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={x}
              style={{
                maxWidth: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={instagram}
              style={{
                maxWidth: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={facebookimage}
              style={{
                maxWidth: '7vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={twitch}
              style={{
                maxWidth: '8vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={bandcamp}
              style={{
                maxWidth: '25vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={soundcloud}
              style={{
                maxWidth: '35vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
      </div>
      <br />
    </div>
    //
  );
};

export default HomePage;
