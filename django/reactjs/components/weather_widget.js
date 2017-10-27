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
      city: 'Boston',
      activeCity: ''
    }
  }

  componentDidMount() {
    this.props.fetchWeatherCities();
  }

  onCityClick(city) {
    this.setState({ activeCity: city });
  }

  renderCities() {
    return _.map(this.props.cities, city => {
      return (
        <div
          key={city.unique_id}
          className={this.state.activeCity === city.city ? 'btn-group btn-custom-active' : 'btn-group'}
          onClick={() => this.onCityClick(city.city)}>
          <WeatherCityTab
            id={city.unique_id}
            city={city.city} />
        </div>
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
      <div className="card">
        <p className="widget-label"><strong>Weather</strong></p>
        <div className="btn-group" role="group">
            {this.renderCities()}
        </div>
        {this.renderWeather()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    weather: state.weather,
   };
}

export default connect(mapStateToProps, { fetchWeather, fetchWeatherCities })(WeatherWidget);
