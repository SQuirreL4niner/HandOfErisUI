import React from "react";

import logo from '../assets/logo.jpg';

const BandLogo = () => (
    <div className="text-center band-logo my-5">
        <img className="mb-3 app-logo" src={logo} alt="Hand of Eris logo" width="240"/>
        <h1 className="mb-4">Welcome to the Hand of Eris</h1>

        <p className="lead">
            This application with have auth with roles, content, soundcloud content, and an e-shop
        </p>
    </div>
);

export default BandLogo;
