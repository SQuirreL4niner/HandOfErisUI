import React, { Component, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import { UploadContext } from '../assets/auth/authentication/payload-context';

const InputFile = ({children}) => {

  const { getAccessTokenSilently } = useAuth0();
  const {upload, setUpload} = useContext(UploadContext)

  let test = upload;
  console.log('hello upload')
  //useEffect(() => {
  console.log(test.valueOf());
    if (test.valueOf() === true) {
      (async () => {
        try {
          let accessToken = await getAccessTokenSilently({
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
            scope: 'upload:music'
          });

          if(accessToken) {
            let options = {
              headers: {
                'Authorization': `Bearer ${accessToken}`
              }
            };

            let result = await axios.post(process.env.REACT_APP_API_URL + '/uploadsong', {}, options)
              .then(res => {
                console.log(res.statusText);
              });

            if(result){
              setUpload({...upload, upload:false})
            }
            setUpload({...upload, upload:false})
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