import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import cover from '../assets/cover-01.png';
import nirubucat from '../assets/ep cover fb-01.jpg';
import twelth from '../assets/front background-01.jpg';

const DiscographyPage = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="text-center">
        <Link to={`/impale-the-sun`}>
          <img
            className=""
            src={cover}
            alt="Cover Page"
            style={{
              objectFit: 'cover',
              width: '25%',

              margin: '0 auto',
            }}
          />
        </Link>
        <br />
        <br />
        <br />
        <img
          className=""
          src={nirubucat}
          alt="Cover Page"
          style={{
            objectFit: 'cover',
            width: '25%',

            margin: '0 auto',
          }}
        />
        <br />
        <br />
        <br />
        <img
          className=""
          src={twelth}
          alt="Cover Page"
          style={{
            objectFit: 'cover',
            width: '25%',

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

export default DiscographyPage;
