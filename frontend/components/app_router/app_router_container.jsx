import { connect } from 'react-redux';
import AppRouter from './app_router';
import { requestSubjects } from '../../actions/subject_actions.js';
import { requestDecks } from '../../actions/deck_actions.js';
import { requestCards } from '../../actions/card_actions.js';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  subjects: state.subjects,
  cards: state.cards,
  decks: state.decks
});

const mapDispatchToProps = dispatch => ({
  requestCards: () => dispatch(requestCards()),
  requestDecks: () => dispatch(requestDecks()),
  requestSubjects: () => dispatch(requestSubjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppRouter);
