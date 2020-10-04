import React, { useState } from 'react';
import FormTemplate from '../hooks/form-template';
import InputFile from './input-file';

const UploadAudio = () => {
  const initialValues = {
    title: '',
    notes: '',
    file: null
  }
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = FormTemplate({
    initialValues,
    onSubmit: values => console.log({values})});
  const [upload, setUpload] = useState(false)

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

            <label>Upload Your File</label>
            <input id="file" type="file" name="file" className="" onChange={handleChange} value={values.file || ''}/>
            <br/>

            <button id="submit" type="submit" name="submit">Upload Jam</button>
          </form>
          {/*<div className="form-group files">*/}
          {/*  <label>Upload Your File</label>*/}
          {/*  <input type="file" name="file" onChange={this.onChangeHandler}/>*/}
          {/*</div>*/}
          {/*<button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>*/}
        </div>
      </div>
      <br/><br/>
    </div>]
  )
}

export default UploadAudio;