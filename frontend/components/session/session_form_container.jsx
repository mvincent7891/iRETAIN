import SessionForm from './session_form.jsx';
import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';


const mapStateToProps = (state, {type}) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors,
  type
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.type;
  const processForm = (formType === 'Login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
