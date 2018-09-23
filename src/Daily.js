import React from 'react';
import { Hourly } from './Hourly';
import './Daily.css';

export const Daily = ({ dailyForecast, weather }) => {
  return (
    <section className="day">
      <div className="daily-forecast-container">
        <p id="date">{dailyForecast.date}</p>
        <div className="temp-container">
          <p id="high-temp">{dailyForecast.highTemp}ºF</p>
          <p id="low-temp">{dailyForecast.lowTemp}ºF</p>
        </div>
      </div>
      {
        weather[dailyForecast.date].map(hourlyForecast =>
          <Hourly key={hourlyForecast.dt} hourlyForecast={hourlyForecast} />
        )
      }
    </section>
  )
}