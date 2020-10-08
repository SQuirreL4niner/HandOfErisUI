import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { useAuth0 } from '@auth0/auth0-react';
import Label from 'reactstrap/lib/Label';
import ReactAudioPlayer from 'react-audio-player';
import { Card, Container } from 'react-bootstrap';
import CardHeader from 'reactstrap/lib/CardHeader';
import CardBody from 'reactstrap/es/CardBody';

const ExtraPropTypes = require('react-extra-prop-types');

const BandMedia = () => {

  const { getAccessTokenSilently } = useAuth0();
  const [data, setData] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: process.env.REACT_APP_AUTH0_AUDIENCE,
          scope: 'upload:music'
        });

        const getMedia = async () => {
          const options = {
            headers: {
              'Authorization': `Bearer ${accessToken}`
            }
          };

          const result = await axios.get(
            process.env.REACT_APP_API_URL + '/getjams',
            options
          );

          setData(result.data);
        };
        await getMedia();
      } catch (e) {
        console.log('trouble in paradise');
        console.log(e.message);
      }
    })();
  }, []);

  return (
    data ? (
      <Container>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              <Card>
                <CardHeader style={{color:'black', backgroundColor:'#007bff'}}>
                  <Label>{item.title}</Label><br/>
                  <Label>{item.notes}</Label><br/>
                  <Label>{item.jamDate}</Label><br/>
                </CardHeader>
                <CardBody>
                  <div >
                    <ReactAudioPlayer  className="player"  src={item.blobURL} controls>
                      {/*<source src={item.blobURL} type="audio/mpeg">*/}
                      {/*</source>*/}
                      {/*<source src={item.blobURL} type="audio/ogg">*/}
                      {/*</source>*/}
                    </ReactAudioPlayer>
                  </div>
                </CardBody>
              </Card>
              <br/>
            </li>
          ))}
        </ul>
      </Container>
    ) : <div> hello no data</div>
  );
};

BandMedia.propTypes = {
  id: ExtraPropTypes.uuid,
  title: PropTypes.string,
  blobURL: PropTypes.string,
  jamDate: PropTypes.instanceOf(Date)
};
export default BandMedia;