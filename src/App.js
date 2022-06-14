import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [location, setLocation] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    }, (err) => { console.log(err) });
  }, []);

  return (
    <div>
      <h3>Previsão do tempo na sua localidade</h3>
      <hr />
      <ul>
        <li>Temperatura atual: x°</li>
        <li>Temperatura máxima: x°</li>
        <li>Temperatura minima: x°</li>
        <li>Pressão: x hpa</li>
        <li>Umidade: x%</li>
      </ul>
    </div>
  );
}

export default App;
