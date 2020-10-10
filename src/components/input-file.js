import React, { useContext } from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { UploadContext } from '../assets/auth/authentication/payload-context';
import { UserContext } from '../assets/auth/authentication/user-context';
import { Spinner } from 'react-bootstrap';

const InputFile = ({children}) => {

  const {upload, setUpload} = useContext(UploadContext)
  const user = useContext(UserContext)

  let loading = false;

  if (upload.upload === true) {

    (async () => {
      try {
        loading = true;
        if(user.userInfo.token && user.userInfo.role === 'admin') {
          const uploadMedia = async () => {
            const options = {
              headers: {
                'Authorization': `Bearer ${user.userInfo.token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };

            const data = new FormData();

            data.append('file', upload.payload.file);
            data.append('title', upload.payload.title);
            data.append('notes', upload.payload.notes);
            data.append('date', upload.payload.date);
            data.append('user', user.userInfo.email)


              await axios.post(process.env.REACT_APP_API_URL + '/uploadsong', data , options)
              .then(res => {
                loading = false;
                alert('File has finished uploading')
                console.log(res.statusText);
              });
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

  return (
    loading && (
      <Spinner animation="grow" variant="success">
        ...uploading
      </Spinner>)
      // {children}
  );
};

export default InputFile;