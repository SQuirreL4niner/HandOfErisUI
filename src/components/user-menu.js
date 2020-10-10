import React, {} from 'react';
import { Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Logout from '../assets/auth/authentication/logout';
import User from './user';
import Login from '../assets/auth/authentication/login';

import { Row, Col, Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import { MdShoppingCart, MdPerson, MdAttachMoney } from 'react-icons/md';

const UserMenu = () => {

  const { user } = useAuth0();
  const history = useHistory();
  return (
    user ? (
        <Container fluid="md">
          <Row>
            <User/>
            <Col md={5}>
              <div>
                <Logout/>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <MdPerson className="material-icons md-36" style={{ color: 'white' }}
                          onClick={event => history.push('/profile')}/>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <MdShoppingCart className="material-icons md-36" style={{ color: 'white' }}/>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <MdAttachMoney className="material-icons md-36" style={{ color: 'white' }}/>
              </div>
            </Col>
          </Row>
        </Container>
      ) :
      (
        <Container fluid="lg">
          <Row>
            <Col md={5}>
              <div>
                <Login/>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <MdShoppingCart className="material-icons md-36" style={{ color: 'white' }}/>
              </div>
            </Col>
            <Col md={2}>
              <div>
                <MdAttachMoney className="material-icons md-36" style={{ color: 'white' }}/>
              </div>
            </Col>
            <Col md={3}>
            </Col>
          </Row>
        </Container>
      )
  );
};

export default UserMenu;