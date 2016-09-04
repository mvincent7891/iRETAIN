import SessionForm from './session_form.jsx';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import { deleteSessionErrors } from '../../actions/error_actions';

const mapStateToProps = (state, {type}) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  type
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.type;
  const processForm = (formType === 'Sign Up') ? signup : login;

  return {
    processForm: user => dispatch(processForm(user)),
    deleteErrors: () => dispatch(deleteSessionErrors())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
