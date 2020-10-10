import React from "react";

import metal from '../assets/metal.png';

const test = process.env.REACT_APP_CONFIG_TEST;

const Footer = () => (
  <div className="text-center">
      <img src={metal} alt="metal" />
    <p>
        Made with Metal
    </p>
  </div>
);

export default Footer;
