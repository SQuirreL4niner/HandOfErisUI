import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';
import User from '../../../components/user';

export const UserContext = createContext({
  userInfo:null,
  setUser:() => {}
});

//{role: 'visitor', accessToken: ''}