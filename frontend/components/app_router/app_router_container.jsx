import { connect } from 'react-redux';
import AppRouter from './app_router';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps
)(AppRouter);
