import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestSingleDeck(this.props.deckId);
  }

  componentWillReceiveProps (newProps) {
    if ( newProps.deckId !== this.props.deckId ) {
      newProps.requestSingleDeck(newProps.deckId);
    }
  }

  render () {
    return (
      <div className="deck-header">
        <ul className="deck-header">
          <li className="deck-header-item">
              { this.props.deck.title }
          </li>
          <li>
            <ul className="deck-header-options">
              <li className="deck-option-edit">
                <button className="edit-deck">
                  Edit Deck
                </button>
              </li>
              <li className="deck-option-delete">
                <button className="remove-deck"
                  onClick={ this.props.removeDeck.bind(null, this.props.deckId) }>
                  Remove Deck
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
