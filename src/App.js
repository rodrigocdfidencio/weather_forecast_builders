import React, {useEffect, useState} from 'react';
import Main from './pages/Main/Main';
import Warning from './pages/Warning/Warning';
import Loading from './pages/Loading/Loading';
import openWeatherAPI from './services/api';

function App() {
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
    let encodedLocation = `lat=${location.lat}&lon=${location.lon}`;
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
      <div>
      <Main weather={weather} />
      <button onClick={handleRefreshButton}>Atualizar</button>
      </div>
    );
  }
}
export default App;
