import * as ACTIONS from '../actions/session_actions.js';
import { CardConstants } from '../actions/card_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultState, action) => {

  switch(action.type) {
    case ACTIONS.SessionConstants.RECEIVE_CURRENT_USER:
      const newObject = {};
      return merge({}, defaultState, {currentUser: action.user});
    case ACTIONS.SessionConstants.RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case ACTIONS.SessionConstants.LOGOUT:
      return defaultState;
    case CardConstants.RECEIVE_CARDS:
      return merge({}, state, {errors: []});
    case CardConstants.RECEIVE_SINGLE_CARD:
      return merge({}, state, {errors: []});
    default:
      return state;
  }
};

export default SessionReducer;
