import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherData extends Component {
  renderWeather(cityData) {
    const name = cityData.name;
    const temp = Math.round(((cityData.main.temp) * (9 / 5)) - 459.67);
    const description = cityData.weather[0].description;

    return (
      <div key={name}>
        <h1>
          {name}
        </h1>
        <h3>
          Current Conditions:<br />
          {temp} &#8457;<br />
          {description}
        </h3>
        <h3>

        </h3>
      </div>

    )
  }

  render() {
    return (
      <div>
        {this.props.weather.map(this.renderWeather)}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherData);
