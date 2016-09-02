import Search from './search.jsx';
import { connect } from 'react-redux';
// import { } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUser),
    user: state.session.currentUser
  });

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  null
)(Search);
