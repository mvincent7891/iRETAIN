import { connect } from 'react-redux';
import { DeckIndex } from './index';
import { requestDecks,
         chooseDeck,
         clearActiveDeck } from '../../actions/deck_actions';
import { deckSelector,
         subjectDeckSelector } from '../../util/deck_selector';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  user: state.session.currentUser,
  errors: state.errors.deck,
  showDeck: state.showDeck,
  activeDeck: state.activeDeck,
  decks: subjectDeckSelector(deckSelector(state.decks),
                             state.currentSubject,
                             state.session.currentUser),
  children: ownProps.children
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(requestDecks()),
  chooseDeck: deck => dispatch(chooseDeck(deck)),
  clearActiveDeck: () => dispatch(clearActiveDeck())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckIndex);
