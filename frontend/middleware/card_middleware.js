import { CardConstants, requestCards,
        receiveCards, receiveSingleCard,
         createCard } from '../actions/card_actions.js';
import { receiveErrors } from '../actions/session_actions.js';
import * as UTILS from '../util/card_api_util.js';


const CardMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case CardConstants.REQUEST_CARDS:
      const success = cards => dispatch(receiveCards(cards));
      const error = errors => dispatch(receiveErrors(errors));
      UTILS.fetchCards(success, error);
      return next(action);
    case CardConstants.CREATE_CARD:
      const success2 = card => dispatch(receiveSingleCard(card));
      const error2 = errors => dispatch(receiveErrors(errors));
      UTILS.createCard(success2, error2, action.card);
      return next(action);
    default:
      return next(action);
  }
};

export default CardMiddleware;
