import { LookupConstants } from '../actions/lookup_actions.js';
import { CardConstants } from '../actions/card_actions.js';
import merge from 'lodash/merge';
import { lookupSelector } from '../util/card_selector';

const defaultState = {
  lookup: []
};

const LookupReducer = (state = defaultState, action) => {

  switch(action.type) {
    case LookupConstants.RECEIVE_LOOKUP:
      const lookupArray = lookupSelector(action.lookup);
      return merge({}, state, { lookup: lookupArray, cardSaved: false });
      case CardConstants.SET_CARD_SAVED_FALSE:
      return merge({}, state, { cardSaved: false });
    case LookupConstants.DELETE_LOOKUP:
      return merge({}, state, { lookup: null });
    case CardConstants.RECEIVE_SINGLE_CARD:
      return merge({}, state, { lookup: null, cardSaved: true } );
    default:
      return defaultState;
  }

};

export default LookupReducer;
