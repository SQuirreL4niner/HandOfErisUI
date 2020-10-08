import React from "react";

import metal from '../assets/metal.png';
import { Image } from 'react-bootstrap';
const test = process.env.REACT_APP_CONFIG_TEST;

const Footer = () => (
  <footer className="text-center" style={{backgroundColor:'black', color:'white'}}>
      <img src={metal} alt="metal" width="25" />
    <p>
        Made with Metal
    </p>
  </footer>
);

export default Footer;
