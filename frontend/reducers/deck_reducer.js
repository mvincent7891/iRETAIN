import { DeckConstants } from '../actions/deck_actions.js';
import { SubjectConstants } from '../actions/subject_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const defaultState = {

};

export const DeckReducer = (state = defaultState, action) => {

  switch(action.type) {
    case SubjectConstants.RECEIVE_NEW_SUBJECT:
      const newDeck = action.subjectAndDeck.deck;
      return merge({}, state, newDeck);
    case DeckConstants.REMOVED_DECK:
      return action.decks;
    case DeckConstants.RECEIVE_DECKS:
      return merge({}, state, action.decks);
    case DeckConstants.RECEIVE_SINGLE_DECK:
      const id = action.deck.id;
      return merge({}, state, {[id]: action.deck});
    default:
      return state;
    case SessionConstants.LOGOUT:
      return defaultState;
  }

};

export const ShowDeckReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SessionConstants.LOGOUT:
      return defaultState;
    case DeckConstants.RECEIVE_SINGLE_DECK:
      return defaultState;
    case DeckConstants.REMOVED_DECK:
      const deckIds = Object.keys(action.decks);
      const numDecks = deckIds.length;
      const showDeck = deckIds[numDecks - 1];
      return {id: showDeck, tabPos: (numDecks - 1)};
    case DeckConstants.CREATED_DECK:
      const deckIds2 = Object.keys(action.decks);
      const numDecks2 = deckIds2.length;
      const showDeck2 = deckIds2[numDecks2 - 1];
      return {id: showDeck2, tabPos: (numDecks2 - 1)};
    default:
      return state;
    }
};
