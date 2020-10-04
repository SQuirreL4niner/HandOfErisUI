import { createContext, useState } from 'react';

export const UserContext = createContext({
  userInfo:null,
  setUser:() => {}
});