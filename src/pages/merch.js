import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cover from '../assets/cover-01.png';
import shirt from '../assets/shirt mock-01.jpg';

const Merch = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="text-center">
        <img
          className=""
          src={shirt}
          alt="Cover Page"
          style={{
            objectFit: 'cover',
            width: '50%',

            margin: '0 auto',
          }}
        />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Merch;
