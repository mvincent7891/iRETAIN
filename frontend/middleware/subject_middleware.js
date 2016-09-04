import { SubjectConstants,
         receiveSubjects,
         requestSubjects,
       } from '../actions/subject_actions.js';
import {  } from '../actions/error_actions.js';
import * as UTILS from '../util/subject_api_util.js';
import { hashHistory } from 'react-router';

const SubjectMiddleware = ({getState, dispatch}) => next => action => {

  switch(action.type) {
    case SubjectConstants.REQUEST_SUBJECTS:
      const success = subjects => {
        dispatch(receiveSubjects(subjects));
      };
      UTILS.fetchSubjects(success);
      return next(action);
    default:
      return next(action);
  }
};

export default SubjectMiddleware;
