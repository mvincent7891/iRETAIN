import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CardMiddleware from './card_middleware';
import DeckMiddleware from './deck_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CardMiddleware,
  DeckMiddleware
);

export default RootMiddleware;
