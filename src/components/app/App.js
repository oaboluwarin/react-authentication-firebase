import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import {
  ACCOUNT,
  HOME,
  LANDING,
  PASSWORD_FORGET,
  SIGN_IN,
  SIGN_UP
} from '../../constants'
import Navigation from '../Navigation';
import { HomePage, Landing, PasswordForgetPage, SigninPage, SignupPage, AccountPage} from '..';

const App = () =>
  <Router>
    <React.Fragment>
      <Navigation />

      <hr />

      <Route exact path={LANDING} component={Landing} />
      <Route exact path={HOME} component={HomePage} />
      <Route exact path={ACCOUNT} component={AccountPage} />
      <Route exact path={PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={SIGN_IN} component={SigninPage} />
      <Route exact path={SIGN_UP} component={SignupPage} />
    </React.Fragment>
  </Router>

export default App;
