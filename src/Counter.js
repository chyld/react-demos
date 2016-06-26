/* eslint-disable */

import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.update = this.update.bind(this);
  }
  update() {
    const count = this.state.count + 1;
    this.setState({ count });
  }
  render() {
    return (
      <div>
        <Widget update={this.update} count={this.state.count} />
        <Widget update={this.update} count={this.state.count} />
        <Widget update={this.update} count={this.state.count} />
      </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <h2>Counter</h2>
      <button onClick={props.update}>++</button>
      <h3>{props.count}</h3>
    </div>
  );
};

export default Counter;
