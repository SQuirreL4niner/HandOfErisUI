import React, { useState } from 'react';

import UploadAudio from '../components/upload-audio';
import { UploadContext } from '../assets/auth/authentication/payload-context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UploadPage = () => {

  const [upload, setUpload] = useState({ upload: false });

  return (
    [<UploadContext.Provider value={{ upload, setUpload }}>
        <UploadAudio/>
      </UploadContext.Provider>]
  );
};

export default UploadPage;