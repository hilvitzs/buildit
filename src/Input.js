import React, { Component } from 'react';
import './Input.css';

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
    let { city } = this.props;


    return (
      <section className="header-section">
        <div className="city">{city}</div>
        <form className="zip-form" onSubmit={this.onSubmit}>
          <input className="zip-input" placeholder="Zip Code" value={this.state.input} onChange={this.updateState} />
          <button className="submit-btn">SEARCH</button>
        </form>
      </section>
    );
  }
}