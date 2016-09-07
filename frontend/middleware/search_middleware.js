import { SearchConstants,
         search,
         receiveSearchResults } from '../actions/search_actions.js';
import * as UTILS from '../util/search_api_util.js';
import { hashHistory } from 'react-router';
import { receiveDecks } from '../actions/deck_actions';

const SearchMiddleware = ({dispatch}) => next => action => {

  switch(action.type) {
    case SearchConstants.SEARCH_DECKS:
      const success = decks => dispatch(receiveSearchResults(decks));
      UTILS.searchDecks(success, action.query);
      return next(action);
    default:
      return next(action);
  }
};

export default SearchMiddleware;
