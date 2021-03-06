import * as ACTIONS from '../actions/search_actions.js';
import { SearchConstants } from '../actions/search_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  decks: {},
  cards: {},
  subjects: {}
};

const SearchReducer = (state = defaultState, action) => {

  switch(action.type) {
    case SessionConstants.LOGOUT:
      return defaultState;
    case SearchConstants.RECEIVE_SEARCH_RESULTS:
      return merge({}, defaultState, {decks: action.decks});
    default:
      return state;
  }
};

export default SearchReducer;
