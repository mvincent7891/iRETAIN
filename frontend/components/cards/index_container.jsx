import { connect } from 'react-redux';
import { CardsIndex } from './index';
import { requestCards } from '../../actions/card_actions';
import { cardSelector } from '../../util/card_selector';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  cards: cardSelector(state.cards)
});

const mapDispatchToProps = dispatch => ({
  fetchCards: () => dispatch(requestCards())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsIndex);
