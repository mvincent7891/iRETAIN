import { DeckConstants } from '../actions/deck_actions.js';
import merge from 'lodash/merge';

const defaultState = {

};

const DeckReducer = (state = defaultState, action) => {

  switch(action.type) {
    case DeckConstants.RECEIVE_DECKS:
      return action.decks;
    case DeckConstants.RECEIVE_SINGLE_DECK:
      const id = action.deck.id;
      return merge({}, state, {[id]: action.deck});
    default:
      return state;
  }

};

export default DeckReducer;
