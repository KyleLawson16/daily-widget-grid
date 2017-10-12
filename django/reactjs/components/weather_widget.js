import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchBar from './search_bar';
import WeatherData from './weather_data';

import { fetchWeatherCities } from '../actions/index';

class WeatherWidget extends Component {

  componentDidMount() {
    this.props.fetchWeatherCities();
  }

  renderCities() {
    return _.map(this.props.cities, city => {
      return (
        <div key={city.id}>
          <button>{city.city}</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="card">
              <p className="widget-label"><strong>Weather</strong></p>
              {this.renderCities()}
              <SearchBar />
              <WeatherData />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { cities: state.cities };
}
export default connect(mapStateToProps, { fetchWeatherCities })(WeatherWidget);
