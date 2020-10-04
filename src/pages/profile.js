import React, { useState, useContext } from 'react';

import { UserContext } from '../assets/auth/authentication/user-context';

import {Container, Row, Col} from "react-bootstrap";
import Highlight from "../styles/highlight";

const ProfilePage = (props) => {

  const user = useContext(UserContext);

        return (
          user ? (
            <Container className="mb-5">
                <Row className="align-items-center profile-header mb-5 text-center text-md-left">
                    <Col md={2}>
                        <img
                          src={user.picture}
                          alt="Profile"
                          className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                        />
                    </Col>
                </Row>
                <Row>
                    <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
                </Row>
            </Container>
          ) : (<div>No User Profile to show</div>)
    );
}
export default ProfilePage;