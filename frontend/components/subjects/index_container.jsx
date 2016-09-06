import { connect } from 'react-redux';
import { SubjectIndex } from './index';
import { requestSubjects,
         receiveCurrentSubject } from '../../actions/subject_actions';
import { subjectSelector } from '../../util/subject_selector';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  subjects: subjectSelector(state.subjects),
  errors: state.errors.subjects,
  decks: state.decks,
  children: ownProps.children
});

const mapDispatchToProps = dispatch => ({
  chooseSubject: subject => dispatch(receiveCurrentSubject(subject))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectIndex);
