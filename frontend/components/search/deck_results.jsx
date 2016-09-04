import React from 'react';
import DeckResultItem from './deck_result_item';

class DeckResults extends React.Component {

  constructor (props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults () {
    return (
      this.props.decks.map((deck, idx) => (
        <DeckResultItem deck={deck}
                        key={`${deck.title}-${idx}`}
                        viewOwnDeck={ this.props.viewOwnDeck }
                        cloneDeck={ this.props.cloneDeck }
                        user={ this.props.user }/>
      ))
    );
  }

  render () {
    return (
      <div>
        <div className="search-header-item">
          Flashcard Decks
        </div>
        <div className="search-results-index">
          { this.renderResults() }
        </div>
      </div>
    );
  }

}

export default DeckResults;
