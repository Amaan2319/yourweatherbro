import React, { useState } from 'react';
import axios from 'axios';
import WeatherCards from './WeatherCards';
import '../index.css';

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '0a2fd750448cabcae34fa8833ba90af4';
  const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric',
        },
      });

      setWeatherData(response.data);
      setError('');
    }catch (error) {
      setWeatherData(null);
      setError('Error fetching weather data. Please try again.');
    }

    setCity('');
  };

  return (
    <div className="container w-100" >
      <h4 className='text-center my-2 text-secondary'> Enter a city name to get its current weather</h4>
     <div id='weatherContainer' className="container m-auto my-4">
     <form onSubmit={handleFormSubmit} action="">
      <input 
        className=" mx-2 p-2 border rounded "
        id='inputCity'
        type="text" 
        value={city} 
        placeholder='Enter a city name'
        onChange={(e) => { setCity(e.target.value) }} />

      <button type='submit' className="btn btn-outline-danger p-2">Get Weather</button>
      </form>


      <div className="my-3  mx-2">
      {error && <p className="error">{error}</p>}

      {weatherData && <WeatherCards data={weatherData} />}
      </div>  
      </div>
    </div>
  )
}
