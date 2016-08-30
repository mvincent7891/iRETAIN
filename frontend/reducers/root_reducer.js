import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CardReducer from './card_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cards: CardReducer
});

export default RootReducer;
