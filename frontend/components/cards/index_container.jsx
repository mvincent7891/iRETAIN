import { connect } from 'react-redux';
import { CardsIndex } from './index';
import { requestCards,
         createCard,
         lookupCard,
         removeSingleCard,
         deleteLookup,
         updateCard } from '../../actions/card_actions';
import { cardSelector } from '../../util/card_selector';
import { deleteCardErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  cards: cardSelector(state.cards),
  errors: state.errors.card,
  deckId: ownProps.deckId,
  lookup: state.cards.lookup,
  cardSaved: state.cards.cardSaved
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchCards: (deckId) => dispatch(requestCards(deckId)),
  createCard: (card, deckId = ownProps.deckId) => dispatch(createCard(card, deckId)),
  removeCard: card => dispatch(removeSingleCard(card)),
  updateCard: (card, deckId = ownProps.deckId) => dispatch(updateCard(card, deckId)),
  deleteErrors: () => dispatch(deleteCardErrors()),
  deleteLookup: () => dispatch(deleteLookup()),
  lookupCard: card => dispatch(lookupCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsIndex);
