import React, { Component } from 'react';

export class SignupForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    const { handleSubmit } = this;
    return (
      <form onSubmit={handleSubmit}>

      </form>
    );
  }
}
