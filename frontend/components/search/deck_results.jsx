import React from 'react';
import DeckResultItem from './deck_result_item';

class DeckResults extends React.Component {

  constructor (props) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
  }

  renderResults () {
    return (
      this.props.decks.map((deck) => (
        <DeckResultItem deck={deck} />
      ))
    );
  }

  render () {
    console.log(this.props.decks);
    return (
      <div>
        <div className="search-header-item">
          Results
        </div>
        <div className="search-results-index">
          { this.renderResults() }
        </div>
      </div>
    );
  }

}

export default DeckResults;
