import React, { useState } from 'react';
import { NavLink as RouterNavLink, useNavigate, Link } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import Can from '../assets/auth/authorization/can';

import { Nav, Navbar } from 'react-bootstrap';
import { MdMenu } from 'react-icons/md/index';

import '../styles/sidebar.css';

const Sidebar = ({ props }) => {
  const { user, isAuthenticated } = useAuth0();
  let navigate = useNavigate();
  return user ? (
    <Can
      role={user[process.env.REACT_APP_AUTH0_ROLE_URL]}
      perform="upload:music"
      yes={() => (
        <Navbar
          collapseOnSelect
          expand="xs"
          variant="dark"
          className="justify-content-start"
        >
          {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span>
              <MdMenu className="material-icons md-48" />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" style={{}}>
            <Nav className="col-md-12 d-md-block">
              <Nav.Link
                as={RouterNavLink}
                navigate="/dashboard"
                exact
                activeClassName="router-link-exact-active"
                style={{ margin: '0 auto', paddingLeft: '10px' }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
                style={{ margin: '0 auto', paddingLeft: '10px' }}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/upload"
                exact
                activeClassName="router-link-exact-active"
                style={{ margin: '0 auto', paddingLeft: '10px' }}
              >
                Upload
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
      no={() => (
        <Navbar
          collapseOnSelect
          expand="xs"
          bg="dark"
          variant="dark"
          className="justify-content-center"
          style={{ right: '0', left: 'auto' }}
        >
          {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span>
              <MdMenu className="material-icons md-48" />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="col-md-12 d-md-block">
              <div className=""></div>
              <Nav.Link
                as={RouterNavLink}
                to="/"
                exact
                activeClassName="router-link-exact-active"
                style={{ margin: '0 auto', paddingLeft: '10px' }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
                style={{ margin: '0 auto', paddingLeft: '10px' }}
              >
                Test
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    />
  ) : (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="d-flex align-items-center"
    >
      {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span>
          <MdMenu className="material-icons md-48" />
        </span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="col-md-12 d-md-block">
          <div className="sidebar-sticky"></div>
          <Nav.Link
            as={Link}
            to="/home"
            exact
            eventKey="1"
            activeClassName="router-link-exact-active"
            style={{ margin: '0 auto', paddingLeft: '10px' }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/profile"
            exact
            eventKey="2"
            activeClassName="router-link-exact-active"
            style={{ margin: '0 auto', paddingLeft: '10px' }}
          >
            Profile
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/profile"
            exact
            eventKey="3"
            activeClassName="router-link-exact-active"
            style={{ margin: '0 auto', paddingLeft: '10px' }}
          >
            Band
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/discography"
            exact
            eventKey="4"
            activeClassName="router-link-exact-active"
            style={{ margin: '0 auto', paddingLeft: '10px' }}
          >
            Releases
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/pics"
            exact
            eventKey="5"
            activeClassName="router-link-exact-active"
            style={{ margin: '0 auto', paddingLeft: '10px' }}
          >
            Pics
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/links"
            exact
            eventKey="5"
            activeClassName="router-link-exact-active"
            style={{ margin: '0 auto', paddingLeft: '10px' }}
          >
            Links
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// const Sidebar = ({props}) => {
//   let navigate = useNavigate();
//   navigate(Links);
// }
export default Sidebar;
