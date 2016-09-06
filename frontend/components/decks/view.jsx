import React from 'react';
import DeckHeaderContainer from './header_container';
import CardsIndexContainer from '../cards/index_container';
import { hashHistory } from 'react-router';

export class DeckView extends React.Component {

  constructor (props) {
    super(props);
    const deckId = this.props.params.deckId;
    const subjectId = this.props.params.subjectId;
    this.state = { deckId, subjectId };
    this.renderCards = this.renderCards.bind(this);
  }

  componentWillReceiveProps (newProps) {
    this.setState({ deckId: newProps.deck.id });
  }

  componentDidMount () {

  }

  renderCards () {
    return (
      <CardsIndexContainer deckId={ this.state.deckId } />
    );
  }

  render () {
    return (
      <div className="deck-view-container">
        <div>
          { this.props.children }
          { this.renderCards() }
        </div>
      </div>
    );
  }
}
