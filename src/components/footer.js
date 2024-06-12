import React from 'react';

import metal from '../assets/metal.png';
import { Image } from 'react-bootstrap';

const test = process.env.REACT_APP_CONFIG_TEST;

const Footer = () => (
  <div
    className="text-center"
    style={{
      marginTop: 'auto',
      // width: '100%',
      // padding: '0',
      // clear: 'both',
      // bottom: '0',
      //position: 'absolute'
    }}
  >
    <Image
      src={metal}
      alt="metal"
      style={{ minHeight: '1em', maxHeight: '1.5em' }}
    />
    <p>Made with Metal</p>
  </div>
);

export default Footer;
