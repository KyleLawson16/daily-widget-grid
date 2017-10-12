import { combineReducers } from 'redux';

import weatherReducer from './reducer_weather';
import weatherCitiesReducer from './reducer_weather_cities';

const rootReducer = combineReducers({
  weather: weatherReducer,
  cities: weatherCitiesReducer
});

export default rootReducer;
