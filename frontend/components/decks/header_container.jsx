import Header from './header.jsx';
import { connect } from 'react-redux';
import { requestSingleDeck,
         removeDeck,
         requestDecks } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  user: state.session.currentUser,
  deckId: ownProps.deckId,
  deck: state.activeDeck,
  children: ownProps.children
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
