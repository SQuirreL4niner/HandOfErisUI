import React from 'react';

import { Link } from 'react-router-dom';

const BandLogoPlaceholder = () => (
  <div className="text-center">
    <Link to={`/`}>
      <img
        style={{
          maxWidth: '100%',
          margin: '0 auto',
          maxHeight: '100%',
          display: 'flex',
        }}
      />
    </Link>
  </div>
);

export default BandLogoPlaceholder;
