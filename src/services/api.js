import axios from 'axios';

const OPEN_WEATHER_KEY = process.env.REACT_APP_OPEN_WHEATHER_KEY;
  
export default axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_KEY}&units=metric`,
  timeout: 10000,
});
