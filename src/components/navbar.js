import {Nav} from "react-bootstrap";
import {NavLink as RouterNavLink, Redirect} from "react-router-dom";
import React from "react";
import {AuthConsumer} from "../assets/auth/authentication/auth-context";
import Can from "../assets/auth/authorization/can";

const Navbar = () => (
    <AuthConsumer>
        {({user}) => (
            <Can
                role={user.role}
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
        )}
    </AuthConsumer>
);

export default Navbar;