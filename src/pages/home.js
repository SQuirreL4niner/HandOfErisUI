import React from 'react';
import { Redirect, Link } from 'react-router-dom';

import { AuthConsumer } from '../assets/auth/authentication/user-context';

import { useAuth0 } from '@auth0/auth0-react';
import ReactPlayer from 'react-player';
import DashboardPage from './dashboard';
import { Col, Row } from 'react-bootstrap';
import homeimage from '../assets/Eris_portal_ghosts_demons.png';
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
            width: '100vw',
            height: '50vw',
          }}
        />
        <Link to={`/pestilant-evocation`}>
          <button
            className="btn btn-danger"
            style={{
              position: 'absolute',
              top: '15%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '8%',
              width: '23%',
              left: '38%',
              //marginBottom: '20px',
              textAlign: 'center',
              paddingLeft: '10px',
              paddingRight: '10px',
              fontSize: '4vw',
            }}
          >
            Play Latest
          </button>
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
                width: '25vw',
                height: 'auto',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={itunes}
              style={{
                width: '25vw',
                height: 'auto',
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
                width: '25vw',
                height: 'auto',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={youtubemusic}
              style={{
                width: '25vw',
                height: 'auto',
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
                width: '20vw',
                height: 'auto',
              }}
            />
          </Col>
          <Col className="col-sm-2"></Col>
          <Col className="col-sm-3">
            <img
              className=""
              src={instagram}
              style={{
                width: '12vw',
                verticalAlign: 'center',
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
                width: '15vw',
                height: 'auto',
                position: 'absolute',
                left: '25%',
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
                width: '20vw',
                height: 'auto',
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
