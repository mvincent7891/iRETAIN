import { connect } from 'react-redux';
import SubjectView from './view';
import { requestDecks } from '../../actions/deck_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  subjects: state.subjects
});

const mapDispatchToProps = dispatch => ({
  fetchDecks: subjectId => dispatch(requestDecks(subjectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubjectView);
