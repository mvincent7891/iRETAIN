import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CardReducer from './card_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cards: CardReducer,
  errors: ErrorReducer
});

export default RootReducer;
