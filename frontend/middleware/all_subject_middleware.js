import { SubjectConstants,
         receiveAllSubjects,
         requestAllSubjects,
       } from '../actions/subject_actions.js';
import * as UTILS from '../util/subject_api_util.js';
import isEmpty from 'lodash/isEmpty';

const AllSubjectMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type) {
    case SubjectConstants.REQUEST_ALL_SUBJECTS:
      const success = subjects => dispatch(receiveAllSubjects(subjects));
      UTILS.fetchAllSubjects(success);
      return next(action);
    default:
      return next(action);
  }
};

export default AllSubjectMiddleware;
