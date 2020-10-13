import React, {} from 'react';
import { NavLink as RouterNavLink, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Logout from '../assets/auth/authentication/logout';
import User from './user';
import Login from '../assets/auth/authentication/login';

import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import { MdShoppingCart, MdPerson, MdAttachMoney } from 'react-icons/md';

const UserMenu = () => {

  const { user } = useAuth0();
  const history = useHistory();
  return (
    user ? (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="justify-content-start">
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span>
              <MdPerson className="material-icons md-48" style={{ color: 'green' }}/>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="col-md-12">
              <Nav.Link
                as={RouterNavLink}
                to="/dashboard"
                exact
                activeClassName="router-link-exact-active"
              >
                <Logout/>
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
              >
                <MdShoppingCart className="material-icons md-36" style={{ color: 'white' }}/>
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/upload"
                exact
                activeClassName="router-link-exact-active"
              >
                <MdAttachMoney className="material-icons md-36" style={{ color: 'white' }}/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      ) :
      (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="justify-content-end">

          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span>
              <MdPerson className="material-icons md-48" style={{ color: 'red' }}/>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="col-md-12">
              <Nav.Link
                as={RouterNavLink}
                to="/dashboard"
                exact
                activeClassName="router-link-exact-active"
              >
                <Login/>
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
              >
                <MdShoppingCart className="material-icons md-36" style={{ color: 'white' }}/>
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/upload"
                exact
                activeClassName="router-link-exact-active"
              >
                <MdAttachMoney className="material-icons md-36" style={{ color: 'white' }}/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
  );
};

export default UserMenu;