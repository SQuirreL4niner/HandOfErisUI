import React, { useState } from 'react';
import { NavLink as RouterNavLink, withRouter } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import Can from '../assets/auth/authorization/can';

import { Nav, Navbar } from 'react-bootstrap';
import '../styles/sidebar.css';

const Links = ({ props }) => {

  const { user, isAuthenticated } = useAuth0();
  return (
    user ? (
        <Can
          role={user[process.env.REACT_APP_AUTH0_ROLE_URL]}
          perform='upload:music'
          yes={() => (
            <Navbar collapseOnSelect expand="lg" variant="dark">
              {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto col-sm-12 d-none d-md-block sidebar">
                  <Nav.Link
                    as={RouterNavLink}
                    to="/dashboard"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={RouterNavLink}
                    to="/profile"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </Nav.Link>
                  <Nav.Link
                    as={RouterNavLink}
                    to="/upload"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Upload
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          )}
          no={() => (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="col-md-12 d-none d-md-block sidebar">
                  <div className="sidebar-sticky"></div>
                  <Nav.Link
                    as={RouterNavLink}
                    to="/"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={RouterNavLink}
                    to="/profile"
                    exact
                    activeClassName="router-link-exact-active"
                  >
                    Test
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          )}
        />
      ) :
      (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="col-md-12 d-none d-md-block sidebar" fluid>
              <div className="sidebar-sticky"></div>
              <Nav.Link
                as={RouterNavLink}
                to="/dashboard"
                exact
                activeClassName="router-link-exact-active"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
              >
                Band
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
              >
                Discography
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
              >
                Shop
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
              >
                Pics
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
  );
};

const Sidebar = withRouter(Links);
export default Sidebar;