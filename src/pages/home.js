import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import { AuthConsumer } from '../assets/auth/authentication/user-context';

import { useAuth0 } from '@auth0/auth0-react';
import DashboardPage from './dashboard';
import { Col, Row } from 'react-bootstrap';
import homeimage from '../assets/blupic3.png';
import button from '../assets/button-01.png';
import itunes from '../assets/itunes.png';
import spotifiy from '../assets/spotify.png';
import youtube from '../assets/youtube.png';
import youtubemusic from '../assets/youtubemusic.png';
import twitch from '../assets/twitch.png';
import x from '../assets/x.png';
import instagram from '../assets/instagram.png';
import facebookimage from '../assets/facebook.png';

const HomePage = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? (
    <>
      <DashboardPage />
    </>
  ) : (
    <div>
      <div className="">
        <img
          className=""
          src={homeimage}
          alt="Home Page"
          style={{
            width: '70%',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <Link to={`/pestilant-evocation`}>
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
        </Link>
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
                width: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={itunes}
              style={{
                width: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
        <br />
        <Row>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={youtube}
              style={{
                width: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={youtubemusic}
              style={{
                width: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
        <br />
        <Row>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={x}
              style={{
                width: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={instagram}
              style={{
                width: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
        <Row>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={facebookimage}
              style={{
                width: '5vw',
                //float: 'right'
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={twitch}
              style={{
                width: '5vw',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
        </Row>
      </div>
      <br />
      <br />
      <br />
    </div>
    //
  );
};

export default HomePage;
