import {SessionConstants, login, logout,
        signup, receiveCurrentUser, receiveErrors} from '../actions/session_actions.js';
import * as UTILS from '../util/session_api_util.js';


const SessionMiddleware = ({dispatch}) => next => action => {
  switch(action.type) {
    case SessionConstants.LOGIN:
      const success = user => dispatch(receiveCurrentUser(user));
      const error = errors => dispatch(receiveErrors(errors));
      UTILS.login(success, error, action.user);
      return next(action);
    case SessionConstants.SIGNUP:
      const success2 = user => dispatch(receiveCurrentUser(user));
      const error2 = errors => dispatch(receiveErrors(errors));
      UTILS.signup(success2, error2, action.user);
      return next(action);
    case SessionConstants.LOGOUT:
      const success3 = () => next(action);
      const error3 = errors => dispatch(receiveErrors(errors));
      UTILS.logout(success3, error3);
      break;
    default:
      return next(action);
  }
};

export default SessionMiddleware;
