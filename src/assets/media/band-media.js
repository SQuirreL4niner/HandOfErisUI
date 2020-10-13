import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import { useAuth0 } from '@auth0/auth0-react';
import { Container, Row, Col, Button, Card, Lab } from 'react-bootstrap';


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
      <Container fluid="md">
        <br/>
        <Row>
          <Col md={5}>
          </Col>
          <Col md={5}>
            <Button variant="warning" size='lg'> Jams </Button>
          </Col>
          <Col md={5}>
          </Col>
        </Row>
        <br/><br/>
        <Row>
          <Col md={3}>
            <Button variant="outline-danger" size='lg'> Pinned </Button>
          </Col>
          <Col md={3}>
            <Button variant="outline-danger" size='lg'> By Date </Button>
          </Col>
          <Col md={3}>
            <Button variant="outline-danger" size='lg'> By Song </Button>
          </Col>
          <Col md={3}>
            <Button variant="outline-danger" size='lg'> Snippets </Button>
          </Col>
        </Row>
        <br/><br/>
        {
          data.map(item =>
            <Card key={item.id}>
              <Card.Body style={{ color: 'black', backgroundColor: '#9e9a75' }}>
                <Card.Title>{item.title}</Card.Title><br/>
                <div style={{ backgroundColor: '#41533b' }}>
                <Card.Subtitle>{item.notes}</Card.Subtitle><br/>
                <Card.Subtitle>{item.jamDate}</Card.Subtitle><br/>
                <Card.Text>
                    <br/><br/>
                    <audio controls style={{ maxWidth:'100%',width: '90%',
                      margin: '0 auto',
                      maxHeight:'100%', display: 'flex'}}>
                      <source src={item.blobURL} type="audio/mpeg">
                      </source>
                      <source src={item.blobURL} type="audio/ogg">
                      </source>
                    </audio>
                </Card.Text>
                </div>
              </Card.Body>
            </Card>
          )
        }
        <br/>
      </Container>
    ) : <div>...loading</div>
  );
};

BandMedia.propTypes = {
  id: ExtraPropTypes.uuid,
  title: PropTypes.string,
  blobURL: PropTypes.string,
  jamDate: PropTypes.instanceOf(Date)
};
export default BandMedia;