import { createContext } from 'react';

export const UploadContext = createContext({
  upload:false,
  payload: {
    title:'',
    notes:'',
    file:null
  },
  setUpload:() => {},
  setPayload:() => {}
});