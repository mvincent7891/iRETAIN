import { TagConstants } from '../actions/tag_actions.js';
import merge from 'lodash/merge';

const defaultState = [];

const TagReducer = (state = defaultState, action) => {

  switch(action.type) {
    case TagConstants.RECEIVE_ALL_TAGS:
      return action.tags;
    default:
      return state;
  }

};

export default TagReducer;
