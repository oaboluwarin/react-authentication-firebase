import React from 'react';
import { Link } from 'react-router-dom';
import { SIGN_UP } from '../constants';

export const SignupLink = () => {
  return (
    <p>
      Do not have an account?
      {' '}
      <Link to={SIGN_UP}>Sign Up</Link>
    </p>
  );
}
