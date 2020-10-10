import React, { useState, useContext } from 'react';

import { UserContext } from '../assets/auth/authentication/user-context';

import Highlight from "../styles/highlight";
import { Row, Col } from 'react-bootstrap';

const ProfilePage = (props) => {

  const user = useContext(UserContext);
  console.log('over here profile')
  console.log(user);
        return (
          user ? (
            <div>
                <Row className="align-items-center profile-header mb-5 text-center text-md-left">
                    <Col md={2}>
                        <img
                          src={user.userInfo.picture}
                          alt="Profile"
                          className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                        />
                    </Col>
                </Row>
                <Row>
                    <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
                </Row>
            </div>
          ) : (<div>No User Profile to show</div>)
    );
}
export default ProfilePage;