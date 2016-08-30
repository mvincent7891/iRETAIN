import { CardConstants } from '../actions/card_actions.js';
import merge from 'lodash/merge';

const defaultState = {

};

const CardReducer = (state = defaultState, action) => {

  switch(action.type) {
    case CardConstants.RECEIVE_CARDS:
    // TODO: make cards come in as an array; construct a hash for state here
      return action.cards;
    default:
      return state;
  }

};

export default CardReducer;
