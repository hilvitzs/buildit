import React, { Component } from 'react';
import './App.css';
import Input from './Input';

console.log(process.env)
const api_key = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      weather: {},
    };

    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(location) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${location}&appid=${api_key}&units=imperial`)
      .then(response => response.json())
      .then((weather) => {
        console.log(weather)
        this.setState({
          weather,
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Input getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;