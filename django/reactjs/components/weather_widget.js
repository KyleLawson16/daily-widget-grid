import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import SearchBar from './search_bar';
import WeatherCityTab from './weather_city_tab';
import WeatherData from './weather_data';

import { fetchWeather, fetchWeatherCities } from '../actions/index';

class WeatherWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      city: 'Boston'
    }
  }

  componentDidMount() {
    this.props.fetchWeatherCities();
  }

  renderCities() {
    this.props.fetchWeatherCities();
    return _.map(this.props.cities, city => {

      return (
        <WeatherCityTab key={city.unique_id} id={city.unique_id} city={city.city} />
      );
    });
  }

  renderWeather(cityData) {
    if (!this.props.weather) {
      return <SearchBar full="true" />
    }

    const name = this.props.weather.name;
    const temp = Math.round(((this.props.weather.main.temp) * (9 / 5)) - 459.67);
    const description = this.props.weather.weather[0].description;

    return (
      <div>
        <SearchBar full="false" />
        <WeatherData name={name} temp={temp} desc={description} />
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <div className="card">
              <p className="widget-label"><strong>Weather</strong></p>
              {this.renderCities()}
              {this.renderWeather()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    weather: state.weather
   };
}

export default connect(mapStateToProps, { fetchWeather, fetchWeatherCities })(WeatherWidget);
