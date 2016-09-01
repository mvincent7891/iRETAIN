import { DeckConstants,
         receiveDecks
        } from '../actions/deck_actions.js';
import { receiveDecksErrors } from '../actions/error_actions.js';
import * as UTILS from '../util/deck_api_util.js';

const DeckMiddleware = ({getState, dispatch}) => next => action => {

  switch(action.type) {
    case DeckConstants.REQUEST_DECKS:
      const success = decks => dispatch(receiveDecks(decks));
      const error = decks => dispatch(receiveDecksErrors);
      UTILS.fetchDecks(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default DeckMiddleware;
