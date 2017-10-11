import React, { Component } from 'react';

import SearchBar from './search_bar';
import WeatherList from './weather_list';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <p><strong>Weather</strong></p>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}

export default HelloWorld;
