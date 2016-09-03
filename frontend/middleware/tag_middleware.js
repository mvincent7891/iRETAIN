import { TagConstants,
         requestAllTags,
         receiveAllTags } from '../actions/tag_actions.js';
import * as UTILS from '../util/tag_api_util.js';
import { hashHistory } from 'react-router';

const TagMiddleware = ({dispatch}) => next => action => {

  switch(action.type) {
    case TagConstants.REQUEST_ALL_TAGS:
      const success = tags => dispatch(receiveAllTags(tags));
      UTILS.fetchTags(success);
      return next(action);
    default:
      return next(action);
  }
};

export default TagMiddleware;
