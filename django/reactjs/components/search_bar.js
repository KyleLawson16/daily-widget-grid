import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, postWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.props.postWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
      return (
        <div
          id="weatherSearch"
          className={this.props.full === 'true' ? 'vertical-center full-searchbar' : 'static-top-right'}>
          <p className={this.props.full === 'true' ? '' : 'hidden'}>
            Add a city to see it's current weather conditions
          </p>
          <form
            className={this.props.full === 'true' ? 'input-group' : 'input-group input-group-sm custom-search'}
            onSubmit={this.onFormSubmit}>
            <input
              placeholder="Get the current weather of your city"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange} />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-secondary">Search</button>
            </span>
          </form>
        </div>
      );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather, postWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
