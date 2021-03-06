import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherData extends Component {
  render() {
    if (!this.props.name) {
      return <div>Select a city to get started!</div>;
    }

    return (
      <div key={this.props.name} className="weather-data">
        <h1>
          {this.props.name}
        </h1>
        <h3>
          Currently {this.props.temp}&#8457; with {this.props.desc}
        </h3>

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
