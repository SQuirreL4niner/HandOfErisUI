import React from "react";

import metal from '../assets/metal.png';
import logo from "../assets/logo.jpg";
const test = process.env.REACT_APP_CONFIG_TEST;
console.log('test');
console.log(test);
const Footer = () => (
  <footer className="bg-light p-3 text-center">
      <img className="mb-3 metal-logo" src={metal} alt="metal" width="25" />
    <p>
        Made with Metal {test}
    </p>
  </footer>
);

export default Footer;
