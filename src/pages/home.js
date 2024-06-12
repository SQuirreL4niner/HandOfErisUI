import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import { AuthConsumer } from '../assets/auth/authentication/user-context';

import { useAuth0 } from '@auth0/auth0-react';
import DashboardPage from './dashboard';
import { Col, Image, Row, Table } from 'react-bootstrap';
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

import '.././App.css';

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <DashboardPage />
    </>
  ) : (
    <>
      <div className="mb-sm-5 mb-lg-5">
        <Row>
          <Col className="align-items-center">
            <div class="text-center">
              <img
                className="mr-auto d-block"
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
        <Link to={`/pestilant-evocation`}>
          <img
            src={button}
            className="mt-lg-5"
            style={{
              position: 'absolute',
              top: '35%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '7%',
              width: '11%',
              left: '20%',
              objectFit: 'contain',
              textAlign: 'center',
              paddingLeft: '10px',
              paddingRight: '10px',
              fontSize: '4vw',
            }}
          ></img>
          <p
            className="mt-lg-5"
            style={{
              position: 'absolute',
              top: '41%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '7%',
              width: '13%',
              left: '19%',
              textAlign: 'center',
              paddingLeft: '10px',
              paddingRight: '10px',
              fontSize: '4vw',
              color: 'ghostwhite',
            }}
          >
            EP
          </p>
        </Link>
        <Link to={`/pestilant-evocation`}>
          <img
            className="mt-lg-5"
            src={button}
            style={{
              position: 'absolute',
              top: '35%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '7%',
              width: '11%',
              left: '69%',
              objectFit: 'contain',
              textAlign: 'center',
              paddingLeft: '10px',
              paddingRight: '10px',
              fontSize: '4vw',
            }}
          ></img>
          <p
            className="pt-sm-4 mt-lg-5"
            style={{
              position: 'absolute',
              top: '40%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '7%',
              width: '13%',
              left: '68%',
              textAlign: 'center',
              paddingLeft: '10px',
              paddingRight: '10px',
              fontSize: '4vw',
              color: 'ghostwhite',
            }}
          >
            Video
          </p>
        </Link>
      </div>
      <br />
      <div class="row mb-lg-5"></div>
      <Table className="table">
        <Row className="mx-2 pt-sm-5 pt-lg-5">
          <Col className="col-sm-3 m-auto">
            <Image
              fluid
              className="d-block mx-auto my-auto"
              src={spotifiy}
              style={{
                maxWidth: '40%',
                minWidth: '3em',
              }}
            />
          </Col>
          <Col className="col-sm-3 m-auto">
            <Image
              className="d-block mx-auto my-auto"
              src={itunes}
              style={{
                maxWidth: '50%',
                minWidth: '3em',
              }}
            />
          </Col>
          <Col className="col-sm-3 m-auto">
            <Image
              className="d-block mx-auto my-auto"
              src={youtube}
              style={{
                maxWidth: '35%',
                minWidth: '2.5em',
              }}
            />
          </Col>
          <Col className="col-sm-3 m-auto">
            <Image
              className="d-block mx-auto my-auto"
              src={youtubemusic}
              style={{
                maxWidth: '50%',
                minWidth: '3em',
              }}
            />
          </Col>
        </Row>
        <br />
        <Row className="pt-sm-2 pt-lg-5 mx-2">
          <Col className="col-sm-3 m-auto">
            <img
              className="d-block mx-auto my-auto"
              src={x}
              style={{
                maxWidth: '12%',
                minWidth: '1em',
              }}
            />
          </Col>
          <Col className="col-sm-3 m-auto">
            <img
              className="d-block mx-auto my-auto"
              src={instagram}
              style={{
                maxWidth: '12%',
                minWidth: '1em',
              }}
            />
          </Col>
          <Col className="col-sm-3 m-auto">
            <img
              className="d-block mx-auto my-auto"
              src={facebookimage}
              style={{
                maxWidth: '12%',
                minWidth: '1em',
              }}
            />
          </Col>
          <Col className="col-sm-3 m-auto">
            <img
              className="d-block mx-auto my-auto"
              src={twitch}
              style={{
                maxWidth: '12%',
                minWidth: '1em',
              }}
            />
          </Col>
        </Row>
        <br />
        <Row className="p-2 pt-lg-5  pb-lg-5 mx-2">
          <Col className="col-sm-3"></Col>
          <Col className="col-lg-2 m-auto">
            <img
              className="d-block mx-auto my-auto"
              src={bandcamp}
              style={{
                maxWidth: '15vw',
              }}
            />
          </Col>
          <Col className="col-lg-2 m-auto"></Col>
          <Col className="col-lg-2 m-auto">
            <img
              className="d-block mx-auto my-auto"
              src={soundcloud}
              style={{
                maxWidth: '15vw',
              }}
            />
          </Col>
          <Col className="col-sm-3 m-auto"></Col>
        </Row>
      </Table>
      <br />
      {/* </div> */}
    </>
  );
};

export default HomePage;
