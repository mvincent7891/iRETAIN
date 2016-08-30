import { connect } from 'react-redux';
import { CardsIndex } from './index';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = dispatch => ({
  dispatch
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsIndex);
