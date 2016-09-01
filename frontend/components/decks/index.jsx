import React from 'react';
import DeckIndexItem from './index_item';
import CardsIndexContainer from '../cards/index_container';

export class DeckIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = { selectedTab: null };
  }

  selectTab (deckId) {
    this.setState({ selectedTab: deckId });
  }

  componentDidMount () {
    this.props.fetchDecks();
  }

  renderDecks () {
    return this.props.decks.map((deck) => {
      const id = deck.id;
      return (<DeckIndexItem
                key={`${id}`}
                deck={deck}
                selected={ id === this.state.selectedTab ? true : false }
                selectThis={ this.selectTab.bind(this, id) }
              />);
    });
  }

  renderCards () {
    if ( this.state.selectedTab ) {
      return <CardsIndexContainer deckId={ this.state.selectedTab }/>;
    } else {
      // Render some other cool stuff
      return;
    }
  }

  render () {
    return (
      <div className="deck-index-container">
        <h3 className="decks">Decks</h3>
        <ul className="deck-index">
          { this.renderDecks() }
          <li className="deck-index-item">Fake Deck</li>
          <li className="deck-index-item">Test Deck</li>
          <li className="deck-index-item"><strong>{ " + "}</strong></li>
        </ul>
        { this.renderCards() }
      </div>
    );
  }
}
