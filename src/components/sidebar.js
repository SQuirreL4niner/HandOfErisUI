import React, { useState } from 'react';
import { NavLink as RouterNavLink, withRouter } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import Can from '../assets/auth/authorization/can';

import { Nav, Navbar } from 'react-bootstrap';
import { MdMenu } from 'react-icons/md/index';

const Links = ({ props }) => {

  const { user, isAuthenticated } = useAuth0();
  return (
    user ? (
        <Can
          role={user[process.env.REACT_APP_AUTH0_ROLE_URL]}
          perform='upload:music'
          yes={() => (
            <Navbar collapseOnSelect expand="lg" variant="dark" className="justify-content-start">
              {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
              <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <span>
                  <MdMenu className="material-icons md-48"/>
                </span>
              </Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav" style={{}}>
                <Nav className="col-md-12 d-md-block">
                  <Nav.Link
                    as={RouterNavLink}
                    to="/dashboard"
                    exact
                    activeClassName="router-link-exact-active"
                    style={{margin:"0 auto", paddingLeft:"10px"}}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={RouterNavLink}
                    to="/profile"
                    exact
                    activeClassName="router-link-exact-active"
                    style={{margin:"0 auto", paddingLeft:"10px"}}
                  >
                    Profile
                  </Nav.Link>
                  <Nav.Link
                    as={RouterNavLink}
                    to="/upload"
                    exact
                    activeClassName="router-link-exact-active"
                    style={{margin:"0 auto", paddingLeft:"10px"}}
                  >
                    Upload
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          )}
          no={() => (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-center" style={{ right:'0', left:'auto' }}>
              {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
              <Navbar.Toggle aria-controls="responsive-navbar-nav">
                <span>
                  <MdMenu className="material-icons md-48"/>
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
                    style={{margin:"0 auto", paddingLeft:"10px"}}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    as={RouterNavLink}
                    to="/profile"
                    exact
                    activeClassName="router-link-exact-active"
                    style={{margin:"0 auto", paddingLeft:"10px"}}
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
        <Navbar collapseOnSelect expand="lg" variant="dark" className="justify-content-start" >
          {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span>
              <MdMenu className="material-icons md-48"/>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="col-md-12 d-md-block">
              <div className="sidebar-sticky"></div>
              <Nav.Link
                as={RouterNavLink}
                to="/dashboard"
                exact
                activeClassName="router-link-exact-active"
                style={{margin:"0 auto", paddingLeft:"10px"}}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
                style={{margin:"0 auto", paddingLeft:"10px"}}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
                style={{margin:"0 auto", paddingLeft:"10px"}}
              >
                Band
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
                style={{margin:"0 auto", paddingLeft:"10px"}}
              >
                Catalog
              </Nav.Link>
              <Nav.Link
                as={RouterNavLink}
                to="/profile"
                exact
                activeClassName="router-link-exact-active"
                style={{margin:"0 auto", paddingLeft:'10px'}}
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