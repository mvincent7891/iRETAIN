import { LookupConstants } from '../actions/lookup_actions.js';
import { CardConstants } from '../actions/card_actions.js';
import merge from 'lodash/merge';
import { lookupSelector } from '../util/card_selector';
import { DeckConstants } from '../actions/deck_actions';

const defaultState = {
  lookup: [],
  cardSaved: false
};

const LookupReducer = (state = defaultState, action) => {

  switch(action.type) {

    case LookupConstants.RECEIVE_LOOKUP:
      const lookupArray = lookupSelector(action.lookup);
      return merge({}, state, { lookup: lookupArray, cardSaved: false });
      case CardConstants.SET_CARD_SAVED_FALSE:
      return merge({}, state, { cardSaved: false });
    case LookupConstants.DELETE_LOOKUP:
      return merge({}, state, { lookup: null, cardSaved: false });
    case CardConstants.RECEIVE_SINGLE_CARD:
      return merge({}, state, { cardSaved: true } );
    default:
      return state;
  }

};

export default LookupReducer;
