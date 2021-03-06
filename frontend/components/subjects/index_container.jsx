import { connect } from 'react-redux';
import { SubjectIndex } from './index';
import { requestSubjects,
         receiveCurrentSubject,
         clearActiveSubject } from '../../actions/subject_actions';
import { subjectSelector,
         selectSubjectFromArray } from '../../util/subject_selector';
import { userDeckSelector } from '../../util/deck_selector';
import { clearActiveDeck } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  user: state.session.currentUser,
  subjects: subjectSelector(state.subjects),
  errors: state.errors.subjects,
  decks: userDeckSelector(state.decks, state.session.currentUser),
  activeDeck: state.activeDeck,
  children: ownProps.children,
  currentSubject: state.currentSubject
});

const mapDispatchToProps = dispatch => ({
  chooseSubject: subject => dispatch(receiveCurrentSubject(subject)),
  clearActiveDeck: () => dispatch(clearActiveDeck()),
  clearActiveSubject: () => dispatch(clearActiveSubject()),
  selectSubjectFromArray: (subjectsArray, subjectId) => dispatch(selectSubjectFromArray(subjectsArray, subjectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectIndex);
