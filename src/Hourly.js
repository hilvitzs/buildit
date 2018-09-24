import React from 'react';
import './Hourly.css';

export const Hourly = ({ hourlyForecast }) => {
  return (
    <div className="hourly">
      <p id="time">{hourlyForecast.dateTime.time}</p>
      <img className="icon" alt={`${hourlyForecast.weatherDesc} weather`} src={`https://openweathermap.org/img/w/${hourlyForecast.weatherIcon}.png`} />
      <p id="desc">{hourlyForecast.weatherDesc}</p>
    </div>
  )
}