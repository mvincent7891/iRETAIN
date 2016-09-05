import { SubjectConstants } from '../actions/subject_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const defaultState = [];

export const SubjectReducer = (state = defaultState, action) => {

  switch(action.type) {
    case SubjectConstants.RECEIVE_SUBJECTS:
      return action.subjects;
    default:
      return state;
  }

};