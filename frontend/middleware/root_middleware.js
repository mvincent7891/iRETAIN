import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CardMiddleware from './card_middleware';
import DeckMiddleware from './deck_middleware';
import SearchMiddleware from './search_middleware';
import TagMiddleware from './tag_middleware';
import SubjectMiddleware from './subject_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CardMiddleware,
  DeckMiddleware,
  SearchMiddleware,
  TagMiddleware,
  SubjectMiddleware
);

export default RootMiddleware;
