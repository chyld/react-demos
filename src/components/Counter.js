/* eslint-disable */

import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div>
        <button onClick={this.props.x}>++</button>
        <button onClick={this.props.y}>--</button>
      </div>
    );
  }
}
