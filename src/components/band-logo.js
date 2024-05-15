import React from 'react';

import logo from '../assets/logo.png';

const BandLogo = () => (
  <div className="text-center">
    <img
      className="app-logo"
      src={logo}
      alt="Hand of Eris logo"
      style={{
        maxWidth: '100%',
        margin: '0 auto',
        maxHeight: '100%',
        display: 'flex',
      }}
    />
  </div>
);

export default BandLogo;
