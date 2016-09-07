import DeckResults from './deck_results.jsx';
import { connect } from 'react-redux';
import { deckSelector } from '../../util/deck_selector';
import { viewSingleDeck,
          cloneDeck } from '../../actions/deck_actions';
// import { } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUser),
    user: state.session.currentUser,
    decks: deckSelector(state.search.decks)
  });

const mapDispatchToProps = (dispatch) => ({
  viewOwnDeck: deck => dispatch(viewSingleDeck(deck)),
  cloneDeck: deck => dispatch(cloneDeck(deck))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckResults);
