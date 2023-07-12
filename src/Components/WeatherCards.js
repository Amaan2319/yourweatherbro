import React from 'react';
import { FaCloud, FaSun, FaCloudRain, FaSnowflake } from 'react-icons/fa';

export const WeatherCards = ({ data }) => {
  const { name, main, weather } = data;

  const getWeatherIcon = (weatherCode) => {
    switch (weatherCode) {
      case '01':
        return <FaSun />;
      case '02':
      case '03':
      case '04':
        return <FaCloud />;
      case '09':
      case '10':
        return <FaCloudRain />;
      case '13':
        return <FaSnowflake />;
      default:
        return <FaSun />;
    }
  };

  return (
    <div className="weather-card border rounded p-4">
      <h3 className='text-danger'>{name}</h3>
      <div className="weather-info">
        <div className="weather-icon">{getWeatherIcon(weather[0].icon.slice(0, 2))}</div>
        <div className="weather-details">
          <p>Temperature: {Math.round(main.temp)}°C</p>
          <p>Weather: {weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCards;
