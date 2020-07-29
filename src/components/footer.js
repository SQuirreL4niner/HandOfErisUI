import React from "react";

import metal from '../assets/metal.png';
import logo from "../assets/logo.jpg";

const Footer = () => (
  <footer className="bg-light p-3 text-center">
      <img className="mb-3 metal-logo" src={metal} alt="metal" width="25" />
    <p>
        Made with Metal
    </p>
  </footer>
);

export default Footer;
