import _ from 'lodash';
import { FETCH_WEATHER_CITIES } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_WEATHER_CITIES:
    // const post = action.payload.data;
    // const newState { ...state  };
    // newState[post.id] = post;
    // return newState;
    return _.mapKeys(action.payload.data, 'id');
  default:
    return state;
  }
}
