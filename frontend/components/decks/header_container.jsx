import Header from './header.jsx';
import { connect } from 'react-redux';
import { requestSingleDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  user: state.session.currentUser.username,
  deckId: ownProps.deckId
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  requestSingleDeck: (deckId) => dispatch(requestSingleDeck(deckId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
