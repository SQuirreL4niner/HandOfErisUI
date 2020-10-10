import React, { useState } from 'react';
import FormTemplate from '../hooks/form-template';
import InputFile from './input-file';

import DatePicker, { CalendarContainer } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Row, Form, Button, Col, Container } from 'react-bootstrap';

const UploadAudio = () => {
  const initialValues = {
    title: '',
    notes: '',
    file: null
  };
  const { values, errors, touched, handleChange, handleDPChange, handleFile, handleBlur, handleSubmit } = FormTemplate({
    initialValues,
    onSubmit: values => console.log({ values })
  });

  const [startDate, setStartDate] = useState(null);

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ padding: '16px', background: '#216ba5', color: '#fff' }}>
        <CalendarContainer className={className}>
          <div style={{ background: 'black' }}>
            Date of coolness
          </div>
          <div style={{ position: 'relative' }}>
            {children}
          </div>
        </CalendarContainer>
      </div>
    );
  };
  const [upload, setUpload] = useState(false);

  return (
    [<InputFile children={upload}/>,
      <Form onSubmit={handleSubmit}>
        <br/>
        <Row xs="auto">
          <Col xs="5">
          </Col>
          <Col xs="auto">
            <Button variant="warning" size='lg'> Upload Stuff</Button>
          </Col>
          <Col xs="5">
          </Col>
        </Row>
        <br/><br/>
        <Row>
          <Col>
            <Button variant="outline-danger" size='lg'> Jams </Button>
          </Col>
          <Col>
            <Button variant="outline-danger" size='lg'> DAW </Button>
          </Col>
          <Col>
            <Button variant="outline-danger" size='lg'> Lyrics </Button>
          </Col>
          <Col>
            <Button variant="outline-danger" size='lg'> Samples </Button>
          </Col>
          <Col>
            <Button variant="outline-danger" size='lg'> Snippets </Button>
          </Col>
        </Row>
        <br/><br/>

        <Form.Group>
          <Form.Label>Song Title</Form.Label>
          <Form.Control type="text" placeholder="Enter a Song Title" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        name="title" onChange={handleChange} value={values.title}>
          </Form.Control>
        </Form.Group>
        <br/>

        <Form.Group>
          <Form.Label>Notes</Form.Label>
          <Form.Control type="text" placeholder="Enter Some Notes" className="mb-3" aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        name="notes" onChange={handleChange} value={values.notes}>
          </Form.Control>
        </Form.Group>
        <br/>

        <Form.Group>
          <Form.Label>Jam Date</Form.Label>
          <br/>
          <DatePicker
            selected={startDate}
            onChange={date => {
              setStartDate(date);
              handleDPChange(date);
            }}
            calandarContainer={MyContainer}
          />
        </Form.Group>
        {/*value={values.date}*/}
        <br/><br/>

        <Form.Group>
          <Form.Label>Select Your File</Form.Label>
          <Form.File className="mb-3" aria-label="Default" aria-describedby="inputGroup-sizing-default" id="file"
                     type="file" name="file" onChange={handleFile}>
          </Form.File>
        </Form.Group>
        <br/>

        <Button variant="primary" id="submit" type="submit" name="submit">Upload Jam</Button>
      </Form>]
  );
};

export default UploadAudio;