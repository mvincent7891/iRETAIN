import { connect } from 'react-redux';
import { DeckView } from './view';

const mapStateToProps = (state, ownProps) => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  null
)(DeckView);
