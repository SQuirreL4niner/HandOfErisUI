import React, { useState, useEffect, useRef, useContext } from 'react';
import { UploadContext } from '../assets/auth/authentication/payload-context';

const FormTemplate = ({ initialValues, onSubmit }) => {

  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [onSubmitting, setOnSubmitting] = useState(false);
  const [onBlur, setOnBlur] = useState(false);
  const {upload, payload, setUpload} = useContext(UploadContext);

  const formRendered = useRef(true);

  useEffect(() => {
    if(formRendered.current){
      setValues(initialValues);
      setErrors({});
      setTouched({});
      setOnSubmitting(false);
      setOnBlur(false);
    }
    formRendered.current = false;
  }, [initialValues]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({...values, [name]: value});
  }

  const handleDPChange = (event) => {
    let date = event;
    setValues({...values, ['date']: date});
  }

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name } = target.files[0];
    const data = new FormData();
    data.append('file', target.files[0]);
    event.persist();
    setValues({...values, 'file': target.files[0]});
  }

  const handleBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name } = target;
    setTouched({...touched, [name]: true});
    setErrors({...errors});
  }

  const handleSubmit = (event: any) => {
    if (event) {
      event.preventDefault();
      setErrors({...errors});
      onSubmit({ values, errors });
      setUpload({upload: true, payload: { title:values.title, notes:values.notes, file:values.file, date:values.date }});
    }
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleDPChange,
    handleFile,
    handleBlur,
    handleSubmit
  };
}

export default FormTemplate