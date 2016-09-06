import DeckForm from './form.jsx';
import { connect } from 'react-redux';
import { createDeck,
         updateDeck,
         requestDecks,
         clearActiveDeck
       } from '../../actions/deck_actions';
import { requestAllTags } from '../../actions/tag_actions';
import { tagNameSelector } from '../../util/tag_name_selector';

const mapStateToProps = state => ({
  title: "",
  decks: state.decks,
  errors: state.errors.deck,
  allTags: tagNameSelector(state.tags)
});

const mapDispatchToProps = dispatch => ({
  createDeck: deck => dispatch(createDeck(deck)),
  updateDeck: deck => dispatch(updateDeck(deck)),
  fetchDecks: () => dispatch(requestDecks()),
  requestAllTags: () => dispatch(requestAllTags()),
  clearActiveDeck: () => dispatch(clearActiveDeck())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckForm);
