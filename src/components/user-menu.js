import React from 'react';
import { NavLink as RouterNavLink, Navigate, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Logout from '../assets/auth/authentication/logout';
import User from './user';
import Login from '../assets/auth/authentication/login';

import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

import { MdShoppingCart, MdPerson, MdAttachMoney } from 'react-icons/md';
import { FaGift } from 'react-icons/fa';
import DiscographyPage from '../pages/discography';
import Merch from '../pages/merch';

const UserMenu = () => {
  const { user } = useAuth0();
  const history = useNavigate();
  return user ? (
    <Navbar
      collapseOnSelect
      expand="xs"
      variant="dark"
      className="d-flex justify-content-end"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span>
          <MdPerson
            className="material-icons md-48"
            style={{ color: 'green' }}
          />
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
            <Logout />
          </Nav.Link>
          <Nav.Link
            as={RouterNavLink}
            to="/profile"
            exact
            activeClassName="router-link-exact-active"
          >
            <MdShoppingCart
              className="material-icons md-36"
              style={{ color: 'white' }}
            />
          </Nav.Link>
          <Nav.Link
            as={RouterNavLink}
            to="/upload"
            exact
            activeClassName="router-link-exact-active"
          >
            <FaGift
              className="material-icons md-36"
              style={{ color: 'white' }}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  ) : (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="justify-content-end"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span>
          <MdPerson className="material-icons md-48" style={{ color: 'red' }} />
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="col-md-12 d-md-block">
          <Nav.Link
            as={RouterNavLink}
            to="/merch"
            exact
            eventKey="2"
            activeClassName="router-link-exact-active"
            style={{ margin: '0 auto', paddingLeft: '200px' }}
          >
            <MdShoppingCart
              className="material-icons md-36"
              style={{ color: 'white' }}
            />
          </Nav.Link>
          <Nav.Link
            as={RouterNavLink}
            to="/dashboard"
            exact
            eventKey="1"
            activeClassName="router-link-exact-active"
            style={{ margin: '0 auto', paddingLeft: '170px' }}
          >
            <Login />
          </Nav.Link>
          <Nav.Link
            as={RouterNavLink}
            to="/upload"
            exact
            eventKey="3"
            activeClassName="router-link-exact-active"
            style={{ margin: '0 auto', paddingLeft: '200px' }}
          >
            <MdAttachMoney
              className="material-icons md-36"
              style={{ color: 'white' }}
            />
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard"
            exact
            eventKey="4"
            activeClassName="router-link-exact-active"
            style={{ margin: '0 auto', paddingLeft: '180px' }}
          >
            Links
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/dashboard"
            exact
            eventKey="5"
            activeClassName="router-link-exact-active"
            style={{ margin: '0 auto', paddingLeft: '170px' }}
          >
            Friends
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default UserMenu;
