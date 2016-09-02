import { DeckConstants,
         receiveDecks,
         requestSingleDeck,
         receiveSingleDeck,
         removedDeck
        } from '../actions/deck_actions.js';
import { receiveDecksErrors,
         receiveSingleDeckErrors,
         createDeckErrors,
         receiveRemoveDeckErrors,
         receiveUpdateDeckErrors } from '../actions/error_actions.js';
import * as UTILS from '../util/deck_api_util.js';
import { hashHistory } from 'react-router';

const DeckMiddleware = ({getState, dispatch}) => next => action => {
  const success = decks => dispatch(receiveDecks(decks));
  switch(action.type) {
    case DeckConstants.UPDATE_DECK:
      const updateError = errors => dispatch(receiveUpdateDeckErrors(errors));
      UTILS.updateDeck(success, updateError, action.deck);
      return next(action);
    case DeckConstants.REQUEST_DECKS:
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
        hashHistory.push(`/dashboard/${id}`); };
      const createDeckError = errors => dispatch(createDeckErrors(errors));
      UTILS.createDeck(createDeckSuccess, createDeckError, action.deck);
      return next(action);
    case DeckConstants.REMOVE_DECK:
      const removeDeckError = errors => dispatch(receiveRemoveDeckErrors(errors));
      const removeSuccess = decks => {
        dispatch(receiveDecks(decks));
        dispatch(removedDeck(decks));
      };
      UTILS.removeDeck(removeSuccess, removeDeckError, action.deckId);
      return next(action);
    default:
      return next(action);
  }
};

export default DeckMiddleware;
