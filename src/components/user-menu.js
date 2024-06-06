import React from 'react';
import { NavLink as RouterNavLink, useLocation, Link } from 'react-router-dom';

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
  const location = useLocation();
  const size = location.pathname.match(/pest.*/) ? 'xs' : 'lg';
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
    <>
      {/* <span> */}
      <MdPerson
        className="material-icons md-48"
        size={25}
        style={{ color: 'red', marginLeft: '50%', marginTop: '16%' }}
        // style={{  }}
      />
      {/* </span> */}
    </>
  );
};

export default UserMenu;
