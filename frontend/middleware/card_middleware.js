import { CardConstants, requestCards,
        receiveCards } from '../actions/card_actions.js';
import { receiveErrors } from '../actions/session_actions.js';
import * as UTILS from '../util/card_api_util.js';


const CardMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case CardConstants.REQUEST_CARDS:
      console.log('fetching cards');
      const success = cards => dispatch(receiveCards(cards));
      const error = errors => dispatch(receiveErrors(errors));
      UTILS.fetchCards(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default CardMiddleware;
