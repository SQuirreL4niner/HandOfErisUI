import React, { useContext, useState } from 'react';
import FormTemplate from '../hooks/form-template';
import InputFile from './input-file';

import DatePicker from 'react-datepicker';
import { UploadContext } from '../assets/auth/authentication/payload-context';


import "react-datepicker/dist/react-datepicker.css";
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
    <div className="container">
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <form className="upload" onSubmit={handleSubmit}>
            <h1>Upload Jams</h1>

            <label>Song Title</label>
            <input type="text" name="title" onChange={handleChange} value={values.title}/>
            <br/>

            <label>Notes</label>
            <input type="text" name="notes" onChange={handleChange} value={values.notes}/>
            <br/>

            <DatePicker onChange={handleDPChange} dateFormat="dd/MM/yyyy" value={values.date} placeholder="Placeholder" id="datepicker" />
            <br/><br/>

            <label>Select Your File</label>
            <input id="file" type="file" name="file" className="" onChange={handleFile}/>
            <br/>

            <button id="submit" type="submit" name="submit">Upload Jam</button>
          </form>
        </div>
      </div>
      <br/><br/>
    </div>]
  )
}

export default UploadAudio;