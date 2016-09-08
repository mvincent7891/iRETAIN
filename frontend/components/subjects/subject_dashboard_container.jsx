import { connect } from 'react-redux';
import { SubjectDashboard } from './subject_dashboard';
import { subjectSelector,
         selectSubjectFromArray } from '../../util/subject_selector';

const mapStateToProps = (state, ownProps) => {
  return ({
    loggedIn: Boolean(state.session.currentUser),
    user: state.session.currentUser,
    subjects: subjectSelector(state.subjects)
  });
};

export default connect(
  mapStateToProps,
  null
)(SubjectDashboard);
