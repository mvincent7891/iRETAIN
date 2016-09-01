import { DeckConstants,
         receiveDecks,
         requestSingleDeck,
         receiveSingleDeck
        } from '../actions/deck_actions.js';
import { receiveDecksErrors,
         receiveSingleDeckErrors } from '../actions/error_actions.js';
import * as UTILS from '../util/deck_api_util.js';

const DeckMiddleware = ({getState, dispatch}) => next => action => {

  switch(action.type) {
    case DeckConstants.REQUEST_DECKS:
      const success = decks => dispatch(receiveDecks(decks));
      const error = decks => dispatch(receiveDecksErrors);
      UTILS.fetchDecks(success, error);
      return next(action);
    case DeckConstants.REQUEST_SINGLE_DECK:
      const singleDeckSuccess = deck => dispatch(receiveSingleDeck(deck));
      const singleDeckError = decks => dispatch(receiveSingleDeckErrors());
      UTILS.fetchDeck(singleDeckSuccess, singleDeckError, action.deckId);
      return next(action);
    default:
      return next(action);
  }
};

export default DeckMiddleware;
