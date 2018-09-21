import React, { Component } from 'react';
import './App.css';
import Input from './Input';

const api_key = process.env.api_key;

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
    console.log(process.env)
    return (
      <div className="App">
        <Input getWeather={this.getWeather} />
      </div>
    );
  }
}

export default App;