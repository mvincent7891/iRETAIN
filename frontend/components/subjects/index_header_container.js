import { connect } from 'react-redux';
import { SubjectIndexHeader } from './index_header';
import { requestAllSubjects } from '../../actions/subject_actions';
import { subjectSelector,
         selectSubjectFromArray } from '../../util/subject_selector';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    user: state.session.currentUser,
    subjects: subjectSelector(state.subjects)
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllSubjects: () => dispatch(requestAllSubjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectIndexHeader);
