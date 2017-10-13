import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

const ROOT_URL = 'http://localhost:8000/api/';

const WEATHER_API_KEY = '7c2b16a0e331787165ab560df016c064';
const WEATHER_ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const FETCH_WEATHER_CITIES = 'FETCH_WEATHER_CITIES'
export const POST_WEATHER = 'POST_WEATHER';
export const DELETE_WEATHER = 'DELETE_WEATHER';

export function fetchWeather(city) {
  const url = `${WEATHER_ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function fetchWeatherCities(id) {
  const url = `${ROOT_URL}weather/`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER_CITIES,
    payload: request
  };
}

export function postWeather(city) {
  const values = { "city": city };
  const url = `${ROOT_URL}weather/create/`;
  const request = axios.post(url, values);

  return {
    type: POST_WEATHER,
    payload: request
  };
}

export function deleteWeather(unique_id) {
  const url = `${ROOT_URL}weather/${unique_id}/delete/`;
  const request = axios.delete(url);

  return {
    type: DELETE_WEATHER,
    payload: request
  };
}
