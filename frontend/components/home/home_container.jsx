import { Home } from './home.jsx';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({
  dispatch
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
