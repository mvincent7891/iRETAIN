import Search from './search.jsx';
import { connect } from 'react-redux';
import { searchDecks } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUser),
    user: state.session.currentUser
  });

const mapDispatchToProps = (dispatch) => ({
  search: (query) => dispatch(searchDecks(query))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
