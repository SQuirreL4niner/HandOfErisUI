import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import { useAuth0 } from '@auth0/auth0-react';

import User from '../components/user';
import Can from '../assets/auth/authorization/can';
import Logout from '../assets/auth/authentication/logout';
import BandMedia from '../assets/media/band-media';
import UploadAudio from '../components/upload-audio';
import InputFile from '../components/input-file';

const DashboardPage = () => {
  const initialValues = {
    title: '',
    notes: '',
    file: null
  }

  const { user, isAuthenticated } = useAuth0();
  // const [upload, setUpload] = useState({initialValues});

  console.log(user);
  return (
    isAuthenticated ? (
        [<User/>,
          <Logout/>,
          <Can
            role={user[process.env.REACT_APP_AUTH0_ROLE_URL]}
            perform='upload:music'
            yes={() => (
              <div>
                <h1>Dashboard</h1>
                <br/>
                {/*<Logout/>*/}
                <br/>
                <br/>
                <p>"soundcloud tracks will be shown here"<br/>
                  "there will also be a special admin dashboard"
                </p>
                <BandMedia/>
              </div>
            )}
            no={() => (
              <div>
                <h1>Dashboard</h1>
                <br/>
                {/*<Logout/>*/}
                <br/>
                <br/>
                <p>"soundcloud tracks will be shown here"<br/>
                  "there will also be a special regular user dashboard"
                </p>
              </div>
            )}
          />]
      ) :
      <Redirect to="/"/>
  );
};

export default DashboardPage;