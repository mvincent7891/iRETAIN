import DeckResults from './deck_results.jsx';
import { connect } from 'react-redux';
import { deckSelector } from '../../util/deck_selector';
// import { } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUser),
    user: state.session.currentUser,
    decks: deckSelector(state.decks)
  });

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  null
)(DeckResults);
