import React, { Component } from 'react';
import { Desktop, Mobile } from './Responsive';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <Desktop>
          <h1>Hello desktop users!</h1>
        </Desktop>
        <Mobile>
          <h1>Hello mobile users!</h1>
        </Mobile>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

module.exports = App;
