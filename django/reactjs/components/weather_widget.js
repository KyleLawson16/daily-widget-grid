import React, { Component } from 'react';

import SearchBar from './search_bar';
import WeatherData from './weather_data';

class WeatherWidget extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="card">
              <p className="widget-label"><strong>Weather</strong></p>
              <SearchBar />
              <WeatherData />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeatherWidget;
