import DeckForm from './form.jsx';
import { connect } from 'react-redux';
import { createDeck } from '../../actions/deck_actions';

const mapStateToProps = state => ({
  title: "",
  decks: state.decks
});

const mapDispatchToProps = dispatch => ({
  createDeck: deck => dispatch(createDeck(deck))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckForm);
