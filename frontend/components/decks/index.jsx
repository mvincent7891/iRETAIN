import React from 'react';


export class DeckIndex extends React.Component {

  componentDidMount () {
    this.props.fetchDecks();
  }

  render () {
    return (
      <div>
          Deck Index
      </div>
    );
  }
}
