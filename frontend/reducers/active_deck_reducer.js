import { DeckConstants } from '../actions/deck_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const defaultState = {

};

const ActiveDeckReducer = (state = defaultState, action) => {

  switch(action.type) {
    case DeckConstants.CHOOSE_DECK:
      return action.deck;
    case DeckConstants.CLEAR_ACTIVE_DECK:
      return defaultState;
    case SessionConstants.LOGOUT:
      return defaultState;
    default:
      return state;
  }

};

export default ActiveDeckReducer;
