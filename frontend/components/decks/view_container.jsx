import { connect } from 'react-redux';
import { DeckView } from './view';

const mapStateToProps = (state, ownProps) => ({
  deck: state.activeDeck,
  children: ownProps.children
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  null
)(DeckView);
