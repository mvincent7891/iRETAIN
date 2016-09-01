import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CardReducer from './card_reducer';
import ErrorReducer from './error_reducer';
import DeckReducer from './deck_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cards: CardReducer,
  errors: ErrorReducer,
  decks: DeckReducer
});

export default RootReducer;
