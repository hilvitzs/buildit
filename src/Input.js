import React, { Component } from 'react';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };

    this.updateState = this.updateState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  updateState(e) {
    const { value } = e.target;
    
    this.setState({
      input: value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { getWeather } = this.props;

    getWeather(this.state.input);
    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input value={this.state.input} onChange={this.updateState} />
        <button>Submit</button>
      </form>
    );
  }
}