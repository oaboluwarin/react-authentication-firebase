import React, { Component } from 'react';
import { doCreateUserWithEmailAndPassword as createUser } from '../firebase';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

export class SignupForm extends Component {
  state = {
    ...INITIAL_STATE
  };

  handleSubmit = async (e) => {
    const { username, email, passwordOne , error } = this.state;
    try {
      const authUser = createUser(email, passwordOne);
      this.setState(() => ({ ...INITIAL_STATE }));
    } catch (err) {
      this.setState(() => {
        byPropKey('error', error);
      })
    }
    e.preventDefault();
  }

  render() {
    const {
      handleSubmit,
      state: {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      }
    } = this;

    const isInvalid =
      (passwordOne !== passwordTwo) ||
      (passwordOne === '') ||
      (email === '') ||
      (username === '');

    return (
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={event => this.setState(byPropKey('username', event.target.value))}
          type="text"
          placeholder="Full Name"
        />
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={passwordOne}
          onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <input
          value={passwordTwo}
          onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}
