import { DeckConstants } from '../actions/deck_actions.js';
import { SubjectConstants } from '../actions/subject_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';
import { selectLastDeck } from '../util/deck_selector';

const defaultState = {

};

const ActiveDeckReducer = (state = defaultState, action) => {
  switch(action.type) {
    case DeckConstants.VIEW_SINGLE_DECK:
      return action.deck;
    case SubjectConstants.RECEIVE_NEW_SUBJECT:
      const deckObject = action.subjectAndDeck.deck;
      const deckItem = deckObject[Object.keys(deckObject)[0]];
      return deckItem;
    case DeckConstants.REMOVED_DECK:

      return defaultState;
    case DeckConstants.CREATED_DECK:
      const createdDeck = selectLastDeck(action.decks);
      return createdDeck;
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
