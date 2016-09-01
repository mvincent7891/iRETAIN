import DeckForm from './form.jsx';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  title: ""
});

const mapDispatchToProps = dispatch => ({
  dispatch
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckForm);
