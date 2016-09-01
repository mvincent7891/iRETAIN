import { CardConstants, requestCards,
        receiveCards, receiveSingleCard,
        createCard, removeSingleCard,
        updateCard, lookupCard,
        receiveLookup } from '../actions/card_actions.js';
import { receiveCreateCardErrors,
         receiveUpdateCardErrors,
         receiveDeleteCardErrors,
         receiveCardsErrors,
         receiveLookupErrors } from '../actions/error_actions.js';
import * as UTILS from '../util/card_api_util.js';


const CardMiddleware = ({getState, dispatch}) => next => action => {
  const createError = errors => dispatch(receiveCreateCardErrors(errors));
  const updateError = errors => dispatch(receiveUpdateCardErrors(errors));
  const deleteError = errors => dispatch(receiveDeleteCardErrors(errors));
  const error = errors => dispatch(receiveCardsErrors(errors));
  const success = cards => dispatch(receiveCards(cards));
  const successSingle = card => dispatch(receiveSingleCard(card));
  const lookupSuccess = card => dispatch(receiveLookup(card));
  const lookupError = errors => dispatch(receiveLookupErrors(errors));

  switch(action.type) {
    case CardConstants.REQUEST_CARDS:
      UTILS.fetchCards(success, error, action.deckId);
      return next(action);
    case CardConstants.CREATE_CARD:
      UTILS.createCard(successSingle, createError, action.card);
      return next(action);
    case CardConstants.REMOVE_SINGLE_CARD:
      UTILS.removeSingleCard(success, deleteError, action.card);
      return next(action);
    case CardConstants.UPDATE_CARD:
      UTILS.updateCard(successSingle, updateError, action.card);
      return next(action);
    case CardConstants.LOOKUP_CARD:
      UTILS.lookupCard(lookupSuccess, lookupError, action.card);
      return next(action);
    default:
      return next(action);
  }
};

export default CardMiddleware;
