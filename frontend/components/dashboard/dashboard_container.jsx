import { Dashboard } from './dashboard.jsx';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  user: state.session.currentUser.username
});

const mapDispatchToProps = dispatch => ({
  dispatch
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
