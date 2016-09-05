import { connect } from 'react-redux';
import SubjectView from './view';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  subjects: state.subjects
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  null
)(SubjectView);
