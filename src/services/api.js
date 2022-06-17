import axios from 'axios';

const OPEN_WEATHER_KEY = process.env.REACT_APP_OPEN_WHEATHER_KEY;
  
export default axios.create({
  baseURL: `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_KEY}&`,
  params: {
    units: 'metric',
    lang: 'pt_br',
  },
  timeout: 10000,
});
