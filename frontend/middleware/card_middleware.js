import { CardConstants, requestCards,
        receiveCards, receiveSingleCard,
        createCard, removeSingleCard,
        updateCard } from '../actions/card_actions.js';
import { receiveCreateCardErrors,
         receiveUpdateCardErrors,
         receiveDeleteCardErrors,
         receiveCardsErrors } from '../actions/error_actions.js';
import * as UTILS from '../util/card_api_util.js';


const CardMiddleware = ({getState, dispatch}) => next => action => {
  const createError = errors => dispatch(receiveCreateCardErrors(errors));
  const updateError = errors => dispatch(receiveUpdateCardErrors(errors));
  const deleteError = errors => dispatch(receiveDeleteCardErrors(errors));
  const error = errors => dispatch(receiveCardsErrors(errors));
  const success = cards => dispatch(receiveCards(cards));
  const success2 = card => dispatch(receiveSingleCard(card));

  switch(action.type) {
    case CardConstants.REQUEST_CARDS:
      UTILS.fetchCards(success, error);
      return next(action);
    case CardConstants.CREATE_CARD:
      UTILS.createCard(success2, createError, action.card);
      return next(action);
    case CardConstants.REMOVE_SINGLE_CARD:
      UTILS.removeSingleCard(success, deleteError, action.card);
      return next(action);
    case CardConstants.UPDATE_CARD:
      UTILS.updateCard(success2, updateError, action.card);
      return next(action);
    default:
      return next(action);
  }
};

export default CardMiddleware;
