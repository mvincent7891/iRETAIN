import { Home } from './home.jsx';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
});

const mapDispatchToProps = dispatch => ({
  dispatch
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
