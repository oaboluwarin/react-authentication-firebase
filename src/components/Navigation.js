import React from 'react';
import { Link } from 'react-router-dom';

import { SIGN_IN, LANDING, HOME, ACCOUNT } from '../constants';

const Navigation = () =>
  <div>
    <ul>
      <li><Link to={SIGN_IN}>Sign In</Link></li>
      <li><Link to={LANDING}>Landing</Link></li>
      <li><Link to={HOME}>Home</Link></li>
      <li><Link to={ACCOUNT}>Account</Link></li>
    </ul>
  </div>

export default Navigation;
