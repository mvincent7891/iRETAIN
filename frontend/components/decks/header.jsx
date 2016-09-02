import React from 'react';
import { hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayOptions: true };
    this.renderButtons = this.renderButtons.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  componentDidMount () {
    this.props.requestSingleDeck(this.props.deckId);
  }

  componentWillReceiveProps (newProps) {
    if ( newProps.deckId !== this.props.deckId ) {
      newProps.requestSingleDeck(newProps.deckId);
    }
  }

  editDeck (deckId) {
    hashHistory.push(`/edit-deck/${deckId}`);
  }

  renderButtons () {
    return (
      <div>
        <ul className="deck-header-options">
          <li className="deck-option-edit">
            <button className="edit-deck"
              onClick={ this.editDeck.bind(null, this.props.deckId) }>

            </button>
          </li>
          <li className="deck-option-delete">
            <button className="remove-deck"
              onClick={ this.props.removeDeck.bind(null, this.props.deckId) }>
              
            </button>
          </li>
        </ul>
      </div>
    );
  }

  renderOptions () {
    if (this.state.displayOptions) {
      return (this.renderButtons());
    } else {
      return <button className="tool-button">Tools</button>
    }
  }

  display () {
    return (
      this.props.children ?
      ( this.props.children ) : // ...DISPLAY THIS
      ( // ...OR THIS...
        <ul className="deck-header">
          <li className="deck-header-item">
              { this.props.deck.title }
          </li>
          <li>
              { this.renderOptions() }
          </li>
        </ul>

      )
    );
  }

  render () {

    return (
      <div className="deck-header">
        { this.display.bind(this)() }
      </div>
    );
  }
}

export default Header;
