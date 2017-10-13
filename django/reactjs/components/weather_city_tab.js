import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchWeather, deleteWeather } from '../actions/index';

class WeatherCityTab extends Component {
  constructor(props) {
    super(props)

    this.onCityChange = this.onCityChange.bind(this);
    this.onDeleteCity = this.onDeleteCity.bind(this);
  }

  onCityChange(city) {
    this.props.fetchWeather(city);
  }

  onDeleteCity(city) {
    this.props.deleteWeather(city);
  }

  render() {
    if (!this.props.id) {
      return <div></div>;
    }

    return (
      <div>
        <button onClick={() => this.onCityChange(this.props.city)}>{this.props.city}</button>
        <button onClick={() => this.onDeleteCity(this.props.id)}>delete</button>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, { fetchWeather, deleteWeather })(WeatherCityTab);
