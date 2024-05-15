import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import Can from '../assets/auth/authorization/can';
import BandMedia from '../assets/media/band-media';

const DashboardPage = () => {
  const initialValues = {
    title: '',
    notes: '',
    file: null,
  };

  const { user, isAuthenticated } = useAuth0();

  console.log(user);
  return isAuthenticated ? (
    <div>
      <Can
        role={user[process.env.REACT_APP_AUTH0_ROLE_URL]}
        perform="upload:music"
        yes={() => (
          <div>
            <br />
            <BandMedia />
          </div>
        )}
        no={() => (
          <div>
            <h1>Dashboard</h1>
            <br />
            <BandMedia />
            <br />
          </div>
        )}
      />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default DashboardPage;
