import { connect } from 'react-redux';
import { SubjectIndexHeader } from './index_header';
import { requestAllSubjects,
         createSubject } from '../../actions/subject_actions';
import { subjectSelector,
         selectSubjectFromArray } from '../../util/subject_selector';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    user: state.session.currentUser,
    subjectHash: state.allSubjects,
    subjectArray: subjectSelector(state.allSubjects)
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllSubjects: () => dispatch(requestAllSubjects()),
  createSubject: title => dispatch(createSubject(title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectIndexHeader);
