import React from 'react';

import splash from '../assets/splash.png';

const SplashImage = () => (
  <div className="text-center">
    <img
      className="app-logo"
      src={splash}
      alt="Enter"
      style={{
        maxWidth: '100%',
        margin: '0 auto',
        maxHeight: '100%',
        display: 'flex',
      }}
    />
  </div>
);

export default SplashImage;
