import React from "react";

import {AuthConsumer} from "../assets/auth/authentication/auth-context";

import {Container, Row, Col} from "react-bootstrap";
import Highlight from "../styles/highlight";

const ProfilePage = () => (
    <AuthConsumer>
        {({user, accessToken}) => (
            <Container className="mb-5">
                <Row className="align-items-center profile-header mb-5 text-center text-md-left">
                    <Col md={2}>
                        <img
                            src={user.picture}
                            alt="Profile"
                            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                        />
                    </Col>
                    <Col md>
                        <h2>{user.name}</h2>
                        <p className="lead text-muted">{user.email}</p>
                        <p className="lead">{user.role}</p>
                        <p className="lead">{accessToken}</p>
                    </Col>
                </Row>
                <Row>
                    <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
                </Row>
            </Container>
        )}
    </AuthConsumer>
);

export default ProfilePage;