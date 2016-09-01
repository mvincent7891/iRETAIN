import React from 'react';


export class DeckIndex extends React.Component {

  componentDidMount () {
    this.props.fetchDecks();
  }

  renderDecks () {
    return this.props.decks.map((deck, idx) => {
      return (<li key={`${deck.title}-${idx}`}>
        {deck.title}
      </li>);
    });
  }

  render () {
    console.log(this.props.decks);


    return (
      <div>
        <ul>
          { this.renderDecks() }
        </ul>
      </div>
    );
  }
}
