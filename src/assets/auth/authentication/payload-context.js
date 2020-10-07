import { createContext } from 'react';
import PropTypes from 'prop-types';
import User from '../../../components/user';

export const UploadContext = createContext({
  upload: false,
  payload: {
    title: '',
    notes: '',
    file: null,
    date: new Date()
  },
  setUpload: () => {},
  setPayload: () => {}
});

// UploadContext.propTypes = {
//   upload: PropTypes.bool,
//   payload: {
//     title: PropTypes.string,
//     notes: PropTypes.string,
//     file: PropTypes.string
//   }
// }