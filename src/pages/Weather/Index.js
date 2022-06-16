import React from 'react'
import './Index.css';

export default function Main(props) {
    const { weather } = props;
    return (
        <div>
        <div className='index'>
            <div className='container'>
                <div className="top">
                    <div className="location">
                        <p>{weather['name']}, {weather['sys']['country']}</p>
                    </div>
                    <div className="temp">
                        <h1>{weather['main']['temp']} °C</h1>
                    </div>
                    <div className="description">
                        <p>{weather['weather'][0]['description']}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className="info">
                        <p>{weather['main']['feels_like']}°C</p>
                        <p>Sensação térmica</p>
                    </div>
                    <div className="info">
                        <p>{weather['main']['humidity']}%</p>
                        <p>Umidade do ar</p>
                    </div>
                    <div className="info">
                        <p>{weather['wind']['speed']} KM/h</p>
                        <p>Velocidade do vento</p>
                        </div>
                </div>
            </div>
        </div>
            </div>
    )
}
