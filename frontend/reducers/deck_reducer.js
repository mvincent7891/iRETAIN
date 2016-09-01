import { DeckConstants } from '../actions/deck_actions.js';
import merge from 'lodash/merge';

const defaultState = {

};

const DeckReducer = (state = defaultState, action) => {

  switch(action.type) {
    case DeckConstants.RECEIVE_DECKS:
      return action.decks;
    default:
      return state;
  }

};

export default DeckReducer;
