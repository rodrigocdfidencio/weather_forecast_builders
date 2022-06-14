import React from 'react'

export default function Main(props) {
    const { weather } = props;
    
    return (
        <div>
            <h3>Clima em sua localidade ({weather['weather'][0]['description']})</h3>
            <hr/>
            <ul>
            <li>Temperatura atual: {weather['main']['temp']}°</li>
            <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
            <li>Temperatura minima: {weather['main']['temp_min']}°</li>
            <li>Pressão: {weather['main']['pressure']} hpa</li>
            <li>Humidade: {weather['main']['humidity']}%</li>
            </ul>
        </div>
    )
}
