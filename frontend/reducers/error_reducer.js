import { ErrorConstants } from '../actions/error_actions.js';
import { CardConstants } from '../actions/card_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import { DeckConstants } from '../actions/deck_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  session: [],
  card: {},
  deck: {}
};

const ErrorReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SessionConstants.LOGOUT:
      return defaultState;

    // DECKS ERRORS
    case ErrorConstants.RECEIVE_DECKS_ERRORS:
      return merge({}, state, {deck: action.errors} );
    case ErrorConstants.CREATE_DECK_ERRORS:
      return merge({}, state, {deck: {create: action.errors} });
    case ErrorConstants.RECEIVE_UPDATE_DECK_ERRORS:
      return merge({}, state, {deck: {update: action.errors} });
    case ErrorConstants.RECEIVE_SINGLE_DECK:
      return defaultState;

    // SESSION ERRORS --> Delete the first two and dispatch a delete_session_errors instead?
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, state, { session: [] });
    case SessionConstants.LOGOUT:
      return merge({}, state, { session: [] });
    case ErrorConstants.RECEIVE_SESSION_ERRORS:
      return merge({}, state, { session: action.errors });
    case ErrorConstants.DELETE_SESSION_ERRORS:
      return merge({}, state, { session: [] });

    // CARD ERRORS

    case ErrorConstants.RECEIVE_CREATE_CARD_ERRORS:
      return merge({}, state, {card: {create: action.errors} });
    case ErrorConstants.RECEIVE_DELETE_CARD_ERRORS:
      return merge({}, state, {card: {delete: action.errors} });
    case ErrorConstants.RECEIVE_UPDATE_CARD_ERRORS:
      return merge({}, state, {card: {update: action.errors} });
    case ErrorConstants.DELETE_CARD_ERRORS:
      return merge({}, state, { card: [] });
    case ErrorConstants.RECEIVE_CARDS_ERRORS:
      return merge({}, state, { card: action.errors });
    case ErrorConstants.RECEIVE_LOOKUP_ERRORS:
      return merge({}, state, { card: {lookup: action.errors} });

    default:
      return defaultState;
  }

};

export default ErrorReducer;
