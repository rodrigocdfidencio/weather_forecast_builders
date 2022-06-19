/* eslint-disable react/prop-types */
import React from 'react';
import './Index.css';

function Weather(props) {
  const { weather, lastUpdate } = props;

  return (
    <div>
      <div className="index">
        <div className="weather-container">
          <div className="top">
            <div className="location">
              <p>
                {weather.name}
                ,
                {' '}
                {weather.sys.country}
              </p>
            </div>
            <div className="temp">
              <h1>
                {Math.round(weather.main.temp)}
                {' '}
                °C
              </h1>
            </div>
            <div className="description">
              <p>
                A previsão para hoje é de
                {' '}
                {weather.weather[0].description}
                .
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="info">
              <p>
                {Math.round(weather.main.feels_like)}
                °C
              </p>
              <p>Sensação térmica</p>
            </div>
            <div className="info">
              <p>
                {weather.main.humidity}
                %
              </p>
              <p>Umidade do ar</p>
            </div>
            <div className="info">
              <p>
                {Math.round(weather.wind.speed)}
                {' '}
                km/h
              </p>
              <p>Velocidade do vento</p>
            </div>
          </div>
          <div className="last-update">
            <p>
              Última atualização:
              {' '}
              {lastUpdate}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
