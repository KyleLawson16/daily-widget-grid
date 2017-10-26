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
        <button
          type="button"
          className="btn btn-custom"
          onClick={() => this.onCityChange(this.props.city)}>
            {this.props.city} <i
              className="fa fa-trash-o"
              aria-hidden="true"
              onClick={() => this.onDeleteCity(this.props.id)}>
            </i>
        </button>
    );
  };
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, { fetchWeather, deleteWeather })(WeatherCityTab);
