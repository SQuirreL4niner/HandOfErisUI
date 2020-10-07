import React, { Component, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { UploadContext } from '../assets/auth/authentication/payload-context';
import { UserContext } from '../assets/auth/authentication/user-context';

const InputFile = ({children}) => {

  const { getAccessTokenSilently } = useAuth0();
  const {upload, setUpload} = useContext(UploadContext)
  const user = useContext(UserContext)

  if (upload.upload === true) {

    (async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
          scope: 'upload:music'
        });

        if(accessToken) {
          const uploadMedia = async () => {
            const options = {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };

            const data = new FormData();

            data.append('file', upload.payload.file);
            data.append('title', upload.payload.title);
            data.append('notes', upload.payload.notes);
            data.append('date', upload.payload.date);
            data.append('user', user.userInfo.email)


            const result = await axios.post(process.env.REACT_APP_API_URL + '/uploadsong', data , options)
              .then(res => {
                console.log(res.statusText);
              });

            if (result) {
              setUpload({ ...upload, upload: false })
            }
            setUpload({ ...upload, upload: false })
          }
          await uploadMedia();
        }
      } catch (e) {
        console.log('trouble in paradise');
        console.log(e.message);
      }
    })();
  }
  //}, []);

  return (
    <>
      {children}
    </>
  );
};

export default InputFile;