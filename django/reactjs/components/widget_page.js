import React, { Component } from 'react';

import WeatherWidget from './weather_widget';

class WidgetPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-4">
            <WeatherWidget />
          </div>
        </div>
      </div>
    )
  }
}

export default WidgetPage;
