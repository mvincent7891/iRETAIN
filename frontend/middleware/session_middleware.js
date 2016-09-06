import { SessionConstants,
         login, logout, signup,
         receiveCurrentUser } from '../actions/session_actions.js';
import * as UTILS from '../util/session_api_util.js';
import { receiveSessionErrors } from '../actions/error_actions.js';
import { hashHistory } from 'react-router';

const SessionMiddleware = ({dispatch}) => next => action => {

  const error = errors => dispatch(receiveSessionErrors(errors));
  const success = user => {
    dispatch(receiveCurrentUser(user));
    hashHistory.push('/subjects');
  };

  switch(action.type) {
    case SessionConstants.LOGIN:
      UTILS.login(success, error, action.user);
      return next(action);
    case SessionConstants.SIGNUP:
      UTILS.signup(success, error, action.user);
      return next(action);
    case SessionConstants.LOGOUT:
      const successLogout = () => {
        next(action);
        hashHistory.push('/');
      };
      UTILS.logout(successLogout, error);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
