import AccountMenu from './account_menu.jsx';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';


const mapStateToProps = (state, {type}) => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout()),
  closeModal: () => ownProps.closeModal()
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountMenu);
