import DeckForm from './form.jsx';
import { connect } from 'react-redux';
import { createDeck,
         updateDeck,
         requestDecks
       } from '../../actions/deck_actions';

const mapStateToProps = state => ({
  title: "",
  decks: state.decks,
  errors: state.errors.deck
});

const mapDispatchToProps = dispatch => ({
  createDeck: deck => dispatch(createDeck(deck)),
  updateDeck: deck => dispatch(updateDeck(deck)),
  fetchDecks: () => dispatch(requestDecks())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckForm);
