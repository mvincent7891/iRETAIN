import { connect } from 'react-redux';
import { CardsIndex } from './index';
import { requestCards,
         createCard,
         lookupCard,
         removeSingleCard,
         updateCard } from '../../actions/card_actions';
import { cardSelector } from '../../util/card_selector';
import { deleteCardErrors } from '../../actions/error_actions';

const mapStateToProps = (state,ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  cards: cardSelector(state.cards),
  errors: state.errors.card,
  deckId: ownProps.deckId,
  lookup: state.cards.lookup
});

const mapDispatchToProps = dispatch => ({
  fetchCards: (deckId) => dispatch(requestCards(deckId)),
  createCard: card => dispatch(createCard(card)),
  removeCard: card => dispatch(removeSingleCard(card)),
  updateCard: card => dispatch(updateCard(card)),
  deleteErrors: () => dispatch(deleteCardErrors()),
  lookupCard: card => dispatch(lookupCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsIndex);
