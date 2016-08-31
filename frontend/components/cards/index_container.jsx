import { connect } from 'react-redux';
import { CardsIndex } from './index';
import { requestCards,
         createCard } from '../../actions/card_actions';
import { cardSelector } from '../../util/card_selector';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  cards: cardSelector(state.cards),
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(requestCards()),
  createCard: (card) => dispatch(createCard(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsIndex);
