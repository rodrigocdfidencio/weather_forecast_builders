import React, { useEffect, useState } from 'react';
import Weather from '../Weather/Index';
import Warning from '../Warning/Index';
import Loading from '../Loading/Index';
import Button from '../../component/Button/Index';
import openWeatherAPI from '../../services/api';
import './Index.css';

function Main() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  const [lastUpdate, setLastUpdate] = useState('');

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    const updateDateTime = () => {
      setLastUpdate(new Date().toLocaleTimeString('pt-BR'));
    };

    async function asyncGetWeather() {
      const encodedLocation = `lat=${location.lat}&lon=${location.lon}`;
      const response = await openWeatherAPI.get(`&${encodedLocation}`);
      setWeather(response.data);
    }

    if (location) {
      asyncGetWeather();
      updateDateTime();
    }
  }, [location]);

  const handleRefreshButton = () => {
    setWeather(false);
    getLocation();
  };

  if (location === false) {
    return <Warning />;
  } if (weather === false) {
    return <Loading />;
  }
  return (
    <div className="main-container">
      <Weather weather={weather} lastUpdate={lastUpdate} />
      <Button handleRefreshButton={handleRefreshButton} />
    </div>
  );
}
export default Main;
