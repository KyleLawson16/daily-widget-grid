import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class CalendarWidget extends Component {
  render() {

    const oauth_url = 'https://accounts.google.com/o/oauth2/auth?response_type=code'
    const client_id = '677994395021-25rr18sg4c1ctjla7b0a2ol1o8m9ang4.apps.googleusercontent.com';
    const redirect_uri = 'http://localhost:8000/dashboard';
    const scope = 'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar';

    return (
      <div className="card">
        <p className="widget-label"><strong>Calendar</strong></p>
        <div className="calendar-btn vertical-center">
          <a href={`${oauth_url}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`}>
            <button className="btn btn-custom-oauth center-block">Add Google Calendar</button>
          </a>
        </div>
      </div>
    )
  }
}

export default CalendarWidget;
