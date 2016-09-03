import { DeckConstants } from '../actions/deck_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const defaultState = {

};

const ActiveDeckReducer = (state = defaultState, action) => {

  switch(action.type) {
    case DeckConstants.RECEIVE_SINGLE_DECK:
      return action.deck;
    case DeckConstants.VIEW_SINGLE_DECK:
      return action.deck;
    case SessionConstants.LOGOUT:
      return defaultState;
    default:
      return state;
  }

};

export default ActiveDeckReducer;
