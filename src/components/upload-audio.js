import React, { useContext, useState } from 'react';
import FormTemplate from '../hooks/form-template';
import InputFile from './input-file';

import DatePicker from 'react-datepicker';
import { UploadContext } from '../assets/auth/authentication/payload-context';

import { Container, Row, Form, InputGroup, Button } from 'react-bootstrap';

import "react-datepicker/dist/react-datepicker.css";
import Input from 'reactstrap/es/Input';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
// import FormGroup from 'react-bootstrap/lib/FormGroup';
// import ControlLabel from 'react-bootstrap/lib/ControlLabel';
// import HelpBlock from 'react-bootstrap/lib/HelpBlock';

const UploadAudio = () => {
  const initialValues = {
    title: '',
    notes: '',
    file: null
  }
  const { values, errors, touched, handleChange, handleDPChange, handleFile, handleBlur, handleSubmit } = FormTemplate({
    initialValues,
    onSubmit: values => console.log({values})});

  const [startDate, setStartDate] = useState(new Date());
  const [upload, setUpload] = useState(false)
  //const { upload, setUpload } = useContext(UploadContext);

  return (
    [<InputFile children={upload}/>,
    <Container className="container">
      <Row>
        <div className="offset-md-3 col-md-6">
          <Form onSubmit={handleSubmit}>
            <h1>Upload Jams</h1>

            <label>Song Title</label>
            <Input type="text" name="title" onChange={handleChange} value={values.title}/>
            <br/>

            <label>Notes</label>
            <Input type="text" name="notes" onChange={handleChange} value={values.notes}/>
            <br/>

            <label>Jam Date</label>
            <br/>
            <DatePicker onChange={handleDPChange} value={values.date} />
            <br/><br/>

            <label>Select Your File</label>
            <Input id="file" type="file" name="file" className="" onChange={handleFile}/>
            <br/>

            <Button id="submit" type="submit" name="submit">Upload Jam</Button>
          </Form>
        </div>
      </Row>
      <br/><br/>
    </Container>]
  )
}

export default UploadAudio;