import { connect } from 'react-redux';
import { SubjectIndex } from './index';
import { requestSubjects } from '../../actions/subject_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  subjects: state.subjects,
  errors: state.errors.subjects,
  decks: state.decks
});

const mapDispatchToProps = dispatch => ({
  requestSubjects: () => dispatch(requestSubjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectIndex);
