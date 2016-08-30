import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CardMiddleware from './card_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CardMiddleware
);

export default RootMiddleware;
