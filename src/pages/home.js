import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import { AuthConsumer } from '../assets/auth/authentication/user-context';

import { useAuth0 } from '@auth0/auth0-react';
import DashboardPage from './dashboard';
import { Col, Row, Table } from 'react-bootstrap';
import homeimage from '../assets/blupic2.png';
import testhome from '../assets/blu6-01.png';
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
      <Row>
        <Col className="d-flex align-items-center">
          <div class="container-sm">
            <img
              className="bg-image-blend"
              src={testhome}
              alt="Home Page"
              style={{
                maxWidth: '100%',
                maxHeight: '80%',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </div>
        </Col>
      </Row>
      <br />

      {/* <Row>
        <Col className="col-lg-2"></Col>
        <Col className="col-lg-2 d-flex align-items-start justify-content-end"> */}
      <Link to={`/pestilant-evocation`}>
        <img
          src={button}
          style={{
            //width: '5vw',
            position: 'absolute',
            top: '28%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '7%',
            width: '10%',
            left: '20%',
            //marginBottom: '20px',
            textAlign: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
            fontSize: '4vw',
          }}
        ></img>
        <p
          style={{
            //width: '5vw',
            position: 'absolute',
            top: '35%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '7%',
            width: '13%',
            left: '19%',
            //marginBottom: '20px',
            textAlign: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
            fontSize: '4vw',
          }}
        >
          EP
        </p>
      </Link>
      {/* </Col>
        <Col className="col-lg-1 d-flex align-items-center justify-content-end"> */}
      {/* <Link to={`/pestilant-evocation`}>
        <p style={{ color: 'ghostWhite' }}>EP</p>
      </Link> */}

      <Link to={`/pestilant-evocation`}>
        <img
          src={button}
          style={{
            //width: '5vw',
            position: 'absolute',
            top: '28%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '7%',
            width: '10%',
            left: '70%',
            //marginBottom: '20px',
            textAlign: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
            fontSize: '4vw',
          }}
        ></img>
        <p
          style={{
            //width: '5vw',
            position: 'absolute',
            top: '35%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '7%',
            width: '13%',
            left: '68%',
            //marginBottom: '20px',
            textAlign: 'center',
            paddingLeft: '10px',
            paddingRight: '10px',
            fontSize: '4vw',
          }}
        >
          Video
        </p>
      </Link>
      <br />
      <br />
      <Table className="table">
        <Row className="mx-3">
          <Col className="col-md-3 align-items-end justify-content-center">
            <img
              className=""
              src={spotifiy}
              style={{
                maxWidth: '14vw',
              }}
            />
          </Col>
          <Col className="col-md-3 align-items-center justify-content-end">
            <img
              className=""
              src={itunes}
              style={{
                maxWidth: '14vw',
              }}
            />
          </Col>
          <Col className="col-md-3 align-items-center justify-content-start">
            <img
              className=""
              src={youtube}
              style={{
                maxWidth: '14vw',
              }}
            />
          </Col>
          <Col className="col-md-3 align-items-center justify-content-center">
            <img
              className=""
              src={youtubemusic}
              style={{
                maxWidth: '18vw',
              }}
            />
          </Col>
        </Row>
        <Row className="mx-3 mt-4 d-flex flex-row">
          <Col className="col-sm-3 align-items-center justify-content-center">
            <img
              className=""
              src={x}
              style={{
                maxWidth: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-3 align-items-center justify-content-center">
            <img
              className=""
              src={instagram}
              style={{
                maxWidth: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-3 align-items-center justify-content-center">
            <img
              className=""
              src={facebookimage}
              style={{
                maxWidth: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-3 align-items-center justify-content-center">
            <img
              className=""
              src={twitch}
              style={{
                maxWidth: '5vw',
              }}
            />
          </Col>
        </Row>
        <Row className="mx-auto mt-4 d-flex flex-row">
          <Col className="col-lg-3"></Col>
          <Col className="col-lg-2 d-flex align-items-center justify-content-center">
            <img
              className=""
              src={bandcamp}
              style={{
                maxWidth: '15vw',
              }}
            />
          </Col>
          <Col className="col-lg-2"></Col>
          <Col className="col-lg-2 d-flex align-items-center justify-content-center">
            <img
              className=""
              src={soundcloud}
              style={{
                maxWidth: '15vw',
              }}
            />
          </Col>
          <Col className="col-lg-3"></Col>
        </Row>
      </Table>
      <br />
    </div>
    //
  );
};

export default HomePage;
