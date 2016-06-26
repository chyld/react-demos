/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';

class Color extends React.Component {
  constructor() {
    super();
    this.state = { red: 0, grn: 0, blu: 0 };
    this.update = this.update.bind(this);
  }
  update(e) {
    this.setState({
      red: this.refs.a.refs.gamma.value * 1,
      grn: this.refs.b.refs.gamma.value * 1,
      blu: this.refs.c.refs.gamma.value * 1
    });

    console.log('master:', this.state);
  }
  render() {
    return (
      <div ref='aa'>
        <div ref='bb'>
          <div ref='cc'>
            <Slider ref='a' value={3} change={this.update} />
            <Slider ref='b' value={4} change={this.update} />
            <Slider ref='c' value={5} change={this.update} />
          </div>
        </div>
      </div>
    );
  }
}

class Slider extends React.Component {
  constructor(){
    super();
    this.state = {number: 0};
  }
  changed(e){
    this.setState({number: this.refs.gamma.value});
    this.props.change(e);
  }
  componentWillMount(){
    // 1
  }
  componentDidMount(){
    // 3
  }
  render() {
    // 2
    return (
      <div ref='alpha'>
        <label ref='beta'>{this.state.number}</label>
        <input ref='gamma' type='range' min='0' max='255' onChange={this.changed.bind(this)} />
      </div>
    );
  }
}

export default Color;
