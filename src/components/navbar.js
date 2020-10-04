import {Nav} from "react-bootstrap";
import {NavLink as RouterNavLink, Redirect} from "react-router-dom";
import React, { useEffect } from 'react';
import Can from "../assets/auth/authorization/can";
import { useAuth0 } from '@auth0/auth0-react';
import rules from '../assets/auth/authorization/rbac-rules';


const Navbar = () => {

  const { user, isAuthenticated } = useAuth0();

  useEffect( () => {
    if(user){
      console.log(user[process.env.REACT_APP_AUTH0_ROLE_URL]);
    }
  })


  return(
    user ? (
    <Can
      role={user[process.env.REACT_APP_AUTH0_ROLE_URL]}
      perform='upload:music'
      yes={() => (
        <Nav className="mr-auto">
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
      )}
      no={() => (
        <Nav className="mr-auto">
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
      )}
    />
    ) :
      (
        <Nav className="mr-auto">
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
      )
  )
};

export default Navbar;