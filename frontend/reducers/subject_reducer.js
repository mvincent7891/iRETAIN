import { SubjectConstants } from '../actions/subject_actions.js';
import { DeckConstants } from '../actions/deck_actions.js';
import { SessionConstants } from '../actions/session_actions.js';
import merge from 'lodash/merge';

const defaultState = {};

export const SubjectReducer = (state = defaultState, action) => {

  switch(action.type) {
    case SessionConstants.LOGOUT:
      return defaultState;
    case SubjectConstants.RECEIVE_NEW_SUBJECT:
      const newSubject = action.subjectAndDeck.subject;
      return merge({}, state, newSubject);
    case SubjectConstants.RECEIVE_SUBJECTS:
      return action.subjects;
    default:
      return state;
  }
};

export const CurrentSubjectReducer = (state = {}, action) => {
  switch(action.type) {
    case SessionConstants.LOGOUT:
      return defaultState;
    case SubjectConstants.RECEIVE_NEW_SUBJECT:
      const subjectObject = action.subjectAndDeck.subject;
      const subjectItem = subjectObject[Object.keys(subjectObject)[0]];
    return subjectItem;
    case SubjectConstants.RECEIVE_CURRENT_SUBJECT:
      return action.subject;
    case SubjectConstants.CHOOSE_SUBJECT_ID:
      const subject = action.subjects[action.id];
      if (!subject) {
        return state;
      } else {
        return subject;
      }
    case SubjectConstants.CLEAR_ACTIVE_SUBJECT:
    // TODO: changing defaultState with {} causes max stack exceeds
      return defaultState;
    default:
      return state;
  }
};
