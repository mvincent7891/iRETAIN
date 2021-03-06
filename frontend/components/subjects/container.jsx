import { connect } from 'react-redux';
import SubjectView from './view';


const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  subjects: state.subjects,
  children: ownProps.children
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  null
)(SubjectView);
