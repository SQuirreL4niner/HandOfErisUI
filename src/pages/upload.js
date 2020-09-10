import React, { Component } from 'react';
import axios from 'axios';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputFile from "../components/input-file";

const UploadPage = () =>  {
    return (
        <InputFile />
    );
};

export default UploadPage;