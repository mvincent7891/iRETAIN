import { ErrorConstants } from '../actions/error_actions.js';
import { CardConstants } from '../actions/card_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  session: [],
  card: []
};

const SessionReducer = (state = defaultState, action) => {
  switch(action.type) {
    // SESSION ERRORS --> Delete the first two and dispatch a delete_session_errors instead?
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, state, { session: [] });
    case SessionConstants.LOGOUT:
      return merge({}, state, { session: [] });
    case ErrorConstants.RECEIVE_SESSION_ERRORS:
      return merge({}, state, { session: action.errors });
    case ErrorConstants.DELETE_SESSION_ERRORS:
      return merge({}, state, { session: [] });

    // CARD ERRORS --> Delete the first two and dispatch a delete_card_errors instead?
    case CardConstants.RECEIVE_CARDS:
      return merge({}, state, {card: [] });
    case CardConstants.RECEIVE_SINGLE_CARD:
      return merge({}, state, {card: [] });
    case ErrorConstants.RECEIVE_CARD_ERRORS:
      return merge({}, state, {card: action.errors });
    case ErrorConstants.DELETE_CARD_ERRORS:
      return merge({}, state, { card: [] });

    default:
      return state;
  }

};

export default SessionReducer;
