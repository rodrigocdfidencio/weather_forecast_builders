import React, { useEffect, useState } from 'react';
import Weather from '../Weather/Index'
import Warning from '../Warning/Index';
import Loading from '../Loading/Index';
import Button from '../../component/Button';
import openWeatherAPI from '../../services/api';
import './Index.css';

const Main = () => {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const [lastUpdate, setLastUpdate] = useState('');

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const lastUpdate = () => {
      setLastUpdate(new Date().toLocaleTimeString());
    }

    async function asyncGetWeather() {
      let encodedLocation = `lat=${location.lat}&lon=${location.lon}`;
      const response = await openWeatherAPI.get(`&${encodedLocation}`);
      setWeather(response.data);
    }

    if (location) {
      asyncGetWeather();
      lastUpdate();
    }
  }, [location]);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    })
  }

  const handleRefreshButton = () => {
    setWeather(false);
    getLocation();
  };

  if (location === false) {
    return (
      <Warning />
    )
  } else if (weather === false) {
    return (
      <Loading />
    )
  } else {
    return (
      <div className="main-container">
        <Weather weather={weather} lastUpdate={lastUpdate} />
        <Button handleRefreshButton={handleRefreshButton} />
      </div>
    );
  }
}
export default Main;
