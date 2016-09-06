import { connect } from 'react-redux';
import { SubjectIndex } from './index';
import { requestSubjects,
         receiveCurrentSubject,
         clearActiveSubject } from '../../actions/subject_actions';
import { subjectSelector } from '../../util/subject_selector';
import { clearActiveDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  subjects: subjectSelector(state.subjects),
  errors: state.errors.subjects,
  decks: state.decks,
  children: ownProps.children
});

const mapDispatchToProps = dispatch => ({
  chooseSubject: subject => dispatch(receiveCurrentSubject(subject)),
  clearActiveDeck: () => dispatch(clearActiveDeck()),
  clearActiveSubject: () => dispatch(clearActiveSubject())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectIndex);
