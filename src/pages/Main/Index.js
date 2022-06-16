import React, {useEffect, useState} from 'react';
import Weather from '../Weather/Index'
import Warning from '../Warning/Index';
import Loading from '../Loading/Index';
import openWeatherAPI from '../../services/api';
import './Index.css';

function Main() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (location) {
      asyncGetWeather();
    }
  }, [location]);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=> {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    })
  }

  async function asyncGetWeather() {
    let params = 'lang=pt_br&units=metric';
    let encodedLocation = `lat=${location.lat}&lon=${location.lon}&=${params}`;
    const response = await openWeatherAPI.get(`&${encodedLocation}`);
    setWeather(response.data);
  }

  function handleRefreshButton() {
    setWeather(false);
    getLocation();
  }

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
      <div className='app'>
      <div className="main-container">
      <Weather weather={weather} />
      <button className='updateBtn' onClick={handleRefreshButton}>Atualizar</button>
      </div>
      </div>
    );
  }
}
export default Main;
