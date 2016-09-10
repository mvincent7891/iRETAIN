import { SubjectConstants } from '../actions/subject_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const defaultState = {};

const AllSubjectReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SessionConstants.LOGOUT:
      return defaultState;
    case SubjectConstants.RECEIVE_ALL_SUBJECTS:
      return action.subjects;
    default:
      return state;
  }
};

export default AllSubjectReducer;
