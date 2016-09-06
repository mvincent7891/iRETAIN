import { DeckConstants } from '../actions/deck_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const defaultState = {

};

const ActiveDeckReducer = (state = defaultState, action) => {

  switch(action.type) {
    case DeckConstants.REMOVED_DECK:
      return defaultState;
    case DeckConstants.CHOOSE_DECK:
      let deck;
      if (action.deck.deck) {
        deck = action.deck.deck;
      } else {
        deck = action.deck;
      }
      return deck;
    case DeckConstants.CLEAR_ACTIVE_DECK:
      return defaultState;
    case SessionConstants.LOGOUT:
      return defaultState;
    case DeckConstants.UPDATE_DECK:
      if (action.deck.deck) {
        deck = action.deck.deck;
      } else {
        deck = action.deck;
      }
      return deck;
    default:
      return state;
  }

};

export default ActiveDeckReducer;
