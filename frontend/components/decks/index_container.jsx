import { connect } from 'react-redux';
import { DeckIndex } from './index';
import { requestDecks } from '../../actions/deck_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  decks: state.decks,
  errors: state.errors.deck
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: () => dispatch(requestDecks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckIndex);
