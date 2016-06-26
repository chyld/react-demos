/* eslint-disable react/prefer-stateless-function, no-useless-constructor, react/prop-types */

import React from 'react';

export default class Add extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <h1>my add component {this.props.a * this.props.b}</h1>;
  }
}
