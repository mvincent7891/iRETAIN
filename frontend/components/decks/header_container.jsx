import Header from './header.jsx';
import { connect } from 'react-redux';
import { requestSingleDeck,
         removeDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  user: state.session.currentUser.username,
  deckId: ownProps.deckId,
  deck: state.activeDeck
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  requestSingleDeck: deckId => dispatch(requestSingleDeck(deckId)),
  removeDeck: deckId => dispatch(removeDeck(deckId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
