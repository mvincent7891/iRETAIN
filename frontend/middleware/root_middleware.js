import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CardMiddleware from './card_middleware';
import DeckMiddleware from './deck_middleware';
import SearchMiddleware from './search_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CardMiddleware,
  DeckMiddleware,
  SearchMiddleware
);

export default RootMiddleware;
