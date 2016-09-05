import { connect } from 'react-redux';
import { SubjectIndex } from './index';
import { requestSubjects,
         receiveCurrentSubject } from '../../actions/subject_actions';
import { subjectSelector } from '../../util/subject_selector';
import { requestDecks } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  subjects: subjectSelector(state.subjects),
  errors: state.errors.subjects,
  children: ownProps.children
});

const mapDispatchToProps = dispatch => ({
  requestSubjects: () => dispatch(requestSubjects()),
  fetchDecks: subjectId => dispatch(requestDecks(subjectId)),
  chooseSubject: subject => dispatch(receiveCurrentSubject(subject))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectIndex);
