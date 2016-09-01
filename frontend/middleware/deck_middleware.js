import { DeckConstants,
         receiveDecks,
         requestSingleDeck,
         receiveSingleDeck
        } from '../actions/deck_actions.js';
import { receiveDecksErrors,
         receiveSingleDeckErrors,
         createDeckErrors } from '../actions/error_actions.js';
import * as UTILS from '../util/deck_api_util.js';
import { hashHistory } from 'react-router';

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
    case DeckConstants.CREATE_DECK:
      const createDeckSuccess = decks => {
        const id = Object.keys(decks)[Object.keys(decks).length - 1];
        dispatch(receiveDecks(decks));
        hashHistory.push(`/dashboard${id}`);
      };
      const createDeckError = errors => dispatch(createDeckErrors(errors));
      UTILS.createDeck(createDeckSuccess, createDeckError, action.deck);
      return next(action);
    default:
      return next(action);
  }
};

export default DeckMiddleware;
