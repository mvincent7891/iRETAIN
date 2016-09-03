import { connect } from 'react-redux';
import { DeckIndex } from './index';
import { requestDecks } from '../../actions/deck_actions';
import { deckSelector } from '../../util/deck_selector';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  decks: deckSelector(state.decks),
  errors: state.errors.deck,
  showDeck: state.showDeck,
  activeDeck: state.activeDeck
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(requestDecks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckIndex);
