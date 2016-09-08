import { StudyView } from './study_view.jsx';
import { connect } from 'react-redux';
import { requestCards } from '../../actions/card_actions';
import { deckCardSelector,
         cardSelector } from '../../util/card_selector';
import isEmpty from 'lodash/isEmpty';

const shuffle = (array) => {
 var i = 0
   , j = 0
   , temp = null;

 for (i = array.length - 1; i > 0; i -= 1) {
   j = Math.floor(Math.random() * (i + 1));
   temp = array[i];
   array[i] = array[j];
   array[j] = temp;
 }
 return array;
};

const mapStateToProps = (state, ownProps) => {
  let deck, decks, cards;
  if (ownProps.params.deckId) {
    decks = state.decks;
    deck = state.decks[parseInt(ownProps.params.deckId)];
    cards = deckCardSelector(state.cards, ownProps.params.deckId);
  } else {
    decks = state.decks;
    deck = null;
    cards = cardSelector(state.cards);
  }
  const ready = !isEmpty(state.subjects) &&
                !isEmpty(state.decks) &&
                cards.length > 0;
  return ({
    deck,
    decks,
    cards: shuffle(cards),
    ready
  });
};

const mapDispatchToProps = dispatch => ({
  requestCards: () => dispatch(requestCards())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudyView);
