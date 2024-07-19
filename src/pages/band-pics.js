import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import FullSizeR1 from '../assets/band-pics/FullSizeR1.jpg';
import FullSizeR2 from '../assets/band-pics/FullSizeR2.jpg';
import FullSizeR3 from '../assets/band-pics/FullSizeR3.jpg';
import FullSizeR5 from '../assets/band-pics/FullSizeR5.jpg';
import IMG_1 from '../assets/band-pics/IMG_3043.jpg';
import IMG_2 from '../assets/band-pics/IMG_5713.jpeg';
import IMG_3 from '../assets/band-pics/IMG_5727.jpeg';
import IMG_4 from '../assets/band-pics/IMG_5729.jpeg';

const BandPics = () => {
  return (
    <>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img
          src={FullSizeR1}
          style={{
            maxWidth: '80%',
            margin: 'auto',
          }}
        ></img>
      </div>
      <br />
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img
          src={FullSizeR2}
          style={{
            maxWidth: '80%',
            margin: 'auto',
          }}
        ></img>
      </div>
      <br />
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img
          src={FullSizeR3}
          style={{
            maxWidth: '80%',
            margin: 'auto',
          }}
        ></img>
      </div>
      <br />
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img
          src={FullSizeR5}
          style={{
            maxWidth: '80%',
            margin: 'auto',
          }}
        ></img>
      </div>
      <br />
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img
          src={IMG_1}
          style={{
            maxWidth: '30%',
            margin: 'auto',
          }}
        ></img>
      </div>
      <br />
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img
          src={IMG_2}
          style={{
            maxWidth: '30%',
            margin: 'auto',
          }}
        ></img>
      </div>
      <br />
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img
          src={IMG_3}
          style={{
            maxWidth: '30%',
            margin: 'auto',
          }}
        ></img>
      </div>
      <br />
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <img
          src={IMG_4}
          style={{
            maxWidth: '30%',
            margin: 'auto',
          }}
        ></img>
      </div>
      <br />
    </>
  );
};

export default BandPics;
