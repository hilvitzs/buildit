import React, { Component } from 'react';
import './App.css';
import Input from './Input';
import { Daily } from './Daily';
const api_key = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor() {
    super();
    this.state = {
      city: {},
      weather: {},
      fiveDay: []
    };

    this.getWeather = this.getWeather.bind(this);
    this.splitDays = this.splitDays.bind(this);
    this.calculateDailyTemps = this.calculateDailyTemps.bind(this);
  }

  getWeather(location) {
    if (Object.keys(this.state.weather).length > 0) {
      this.setState({
        city: {},
        weather: {},
        fiveDay: [],
      });
    }
    var reg = /^\d+$/;

    let locationCheck = (location) => {
      if (reg.test(location)) {
        return `zip=${location}`
      } else {
        return `q=${location}`
      }
    }

    fetch(`https://api.openweathermap.org/data/2.5/forecast?${locationCheck(location)}&appid=${api_key}&units=imperial&cnt=40`)
      .then(response => response.json())
      .then((myWeather) => {
        this.setState({
          city: myWeather.city,
          weather: this.splitDays(myWeather.list),
        }, () => {
          this.calculateDailyTemps();
        });
      })
      .catch(err => {
        console.error(err); alert('Something went wrong. Please check your zip code.');
      });
  }

  cleanTime(time) {
    let month = time.getMonth() + 1;
    let day = time.getDate();
    let militaryTime = parseInt(time.getHours(), 10);
    let pm = militaryTime > 12;
    let hour = militaryTime > 12 ? militaryTime - 12 : militaryTime;
    let minutes = time.getMinutes();

    if (hour === 0) {
      hour = 12
    };

    return {
      date: `${month}/${day}`,
      time: `${hour}:${minutes}0${pm ? 'pm' : 'am'}`
    };
  }

  splitDays(list) {
    let weatherDays = list.reduce((acc, current) => {
      let dt = current.dt * 1000;

      let cleanedObj = {};

      let mst = new Date(dt);

      cleanedObj.dateTime = this.cleanTime(mst);
      cleanedObj.dt = current.dt;
      cleanedObj.temp = current.main.temp;
      cleanedObj.weatherIcon = current.weather[0].icon;
      cleanedObj.weatherDesc = current.weather[0].main;

      !acc[cleanedObj.dateTime.date] ? acc[cleanedObj.dateTime.date] = [cleanedObj] : acc[cleanedObj.dateTime.date].push(cleanedObj);

      return acc;
    }, {});

    return weatherDays;
  }

  calculateDailyTemps() {
    let { weather } = this.state;
    let fiveDay = [];

    Object.keys(weather).forEach(date => {
      let tempArr = [];

      weather[date].forEach(forecast => {
        tempArr.push(forecast.temp);
      });

      let dayObj = {};

      dayObj.date = date;
      dayObj.highTemp = Math.round(Math.max(...tempArr));
      dayObj.lowTemp = Math.round(Math.min(...tempArr));

      fiveDay.push(dayObj);
    });

    this.setState({
      fiveDay
    });
  }

  render() {
    let { fiveDay, weather, city } = this.state;

    return (
      <div className="App">
        <div className="header-section">
          <div className="city">{city.name}</div>
          <Input getWeather={this.getWeather} />
        </div>
        <section className="forecast-container">
          {
            fiveDay.map(dailyForecast =>
              <Daily key={dailyForecast.date} dailyForecast={dailyForecast} weather={weather} />
            )
          }
        </section>
        <div></div>
      </div>
    );
  }
}

export default App;