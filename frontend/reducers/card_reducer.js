import { CardConstants } from '../actions/card_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';
import { lookupSelector } from '../util/card_selector';

const defaultState = {
};

const CardReducer = (state = defaultState, action) => {

  switch(action.type) {
    case SessionConstants.LOGOUT:
      return defaultState;
    case CardConstants.RECEIVE_CARDS:
    // TODO: make cards come in as an array; construct a hash for state here
      return action.cards;
    case CardConstants.RECEIVE_SINGLE_CARD:
    // TODO: action.card may be in bad format - check
      const cardId = action.card.id;
      const card = action.card;
      return merge({}, state, { [cardId]: card, lookup: null, cardSaved: true } );
    default:
      return state;
  }

};

export default CardReducer;
