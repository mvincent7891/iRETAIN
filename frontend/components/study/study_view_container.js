import { StudyView } from './study_view.jsx';
import { connect } from 'react-redux';
import { deckCardSelector } from '../../util/card_selector';


const mapStateToProps = (state, ownProps) => ({
  deck: state.decks[parseInt(ownProps.params.deckId)],
  cards: deckCardSelector(state.cards, ownProps.params.deckId)
});

const mapDispatchToProps = dispatch => ({

});


export default connect(
  mapStateToProps,
  null
)(StudyView);
