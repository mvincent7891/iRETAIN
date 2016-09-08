import { SubjectConstants,
         receiveSubjects,
         chooseSubjectId,
         receiveNewSubject,
         requestSubjects,
       } from '../actions/subject_actions.js';
import { DeckConstants,
         viewSingleDeck } from '../actions/deck_actions.js';
import * as UTILS from '../util/subject_api_util.js';
import { hashHistory } from 'react-router';
import isEmpty from 'lodash/isEmpty';

const SubjectMiddleware = ({getState, dispatch}) => next => action => {

  switch(action.type) {

    case SubjectConstants.CREATE_SUBJECT:
      const createSuccess = subjectAndDeck => {
        dispatch(receiveNewSubject(subjectAndDeck));
        const newSubjectId = Object.keys(subjectAndDeck.subject)[0];
        const newDeckId = Object.keys(subjectAndDeck.deck)[0];
        hashHistory.push(`/subjects/${newSubjectId}/decks/${newDeckId}`);
      };
      UTILS.createSubject(createSuccess, action.title);
      return next(action);

    case SubjectConstants.REQUEST_SUBJECTS:
      const success = subjects => dispatch(receiveSubjects(subjects));
      UTILS.fetchSubjects(success);
      return next(action);
    case DeckConstants.VIEW_SINGLE_DECK:
      const subjectId = action.deck.subject_id;
      let subjects = getState().subjects;
      if (isEmpty(subjects)) {
        dispatch(requestSubjects());
      }
      dispatch(chooseSubjectId(subjects, subjectId));
      return next(action);
    default:
      return next(action);
  }
};

export default SubjectMiddleware;
