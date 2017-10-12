import React, { Component } from 'react';

import SearchBar from './search_bar';
import WeatherList from './weather_list';

class HelloWorld extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="card">
              <p><strong>Weather</strong></p>
              <SearchBar />
              <WeatherList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HelloWorld;
