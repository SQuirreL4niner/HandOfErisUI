import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const BandLogo = () => (
  <div className="text-center">
    <Link to={`/`}>
      <img
        className="app-logo"
        src={logo}
        alt="Hand of Eris logo"
        style={{
          maxWidth: '70%',
          margin: '0 auto',
          maxHeight: '100%',
          display: 'flex',
        }}
      />
    </Link>
  </div>
);

export default BandLogo;
