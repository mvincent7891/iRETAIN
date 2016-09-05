import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CardReducer from './card_reducer';
import ErrorReducer from './error_reducer';
import { DeckReducer, ShowDeckReducer } from './deck_reducer';
import ActiveDeckReducer from './active_deck_reducer';
import SearchReducer from './search_reducer';
import { SubjectReducer, CurrentSubjectReducer } from './subject_reducer';
import TagReducer from './tag_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cards: CardReducer,
  errors: ErrorReducer,
  decks: DeckReducer,
  showDeck: ShowDeckReducer,
  activeDeck: ActiveDeckReducer,
  search: SearchReducer,
  tags: TagReducer,
  subjects: SubjectReducer,
  currentSubject: CurrentSubjectReducer
});

export default RootReducer;
