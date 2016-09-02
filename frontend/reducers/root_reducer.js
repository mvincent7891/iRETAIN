import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CardReducer from './card_reducer';
import ErrorReducer from './error_reducer';
import { DeckReducer, ShowDeckReducer } from './deck_reducer';
import ActiveDeckReducer from './active_deck_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cards: CardReducer,
  errors: ErrorReducer,
  decks: DeckReducer,
  showDeck: ShowDeckReducer,
  activeDeck: ActiveDeckReducer
});

export default RootReducer;
