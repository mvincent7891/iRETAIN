import NavBar from './nav_bar.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  const user = state.session.currentUser ? state.session.currentUser.username : 'none';
  return ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors,
    children: ownProps.children,
    user
  });
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
