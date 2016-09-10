import { TagConstants } from '../actions/tag_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const defaultState = [];

const TagReducer = (state = defaultState, action) => {

  switch(action.type) {
    case SessionConstants.LOGOUT:
      return defaultState;
    case TagConstants.RECEIVE_ALL_TAGS:
      return action.tags;
    default:
      return state;
  }

};

export default TagReducer;
