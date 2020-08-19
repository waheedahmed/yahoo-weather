import React from 'react';
import './App.css';
import LocationInput from './app/components/location-input';
import WeatherComponent from './app/components/weather';

function WeatherApp() {
  return (
    <div className="Weather-App">
      <header className="App-header">
        <h2>Yahoo Weather App</h2>
        <LocationInput />
        <WeatherComponent />
      </header>
    </div>
  );
}

export default WeatherApp;
