import React, { Component, useContext, useState } from 'react';
import axios from 'axios';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputFile from '../components/input-file';
import UploadAudio from '../components/upload-audio';
import { UploadContext } from '../assets/auth/authentication/payload-context';

const UploadPage = () => {

  const [upload, setUpload] = useState({ upload: false });

  return (
    [<UploadContext.Provider value={{ upload, setUpload }}>
        <UploadAudio/>
      </UploadContext.Provider>]
  );
};

export default UploadPage;