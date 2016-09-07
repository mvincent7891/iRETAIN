import React from 'react';
import { hashHistory } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayOptions: true };
    this.renderButtons = this.renderButtons.bind(this);
    this.studyDeck = this.studyDeck.bind(this);
  }

  studyDeck () {
    hashHistory.push(`study/${this.props.deckId}`);
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
    hashHistory.push(`${this.props.location.pathname}/edit`);
  }

  renderButtons () {
    return (
      <div>
        <ul className="deck-header-options">
          <li className="deck-option-edit">
            <button className="edit-deck"
              onClick={ this.editDeck.bind(this, this.props.deckId) }>

            </button>
          </li>
          <li className="deck-option-delete">
            <button className="remove-deck"
              onClick={ this.props.removeDeck.bind(this, this.props.deckId) }>

            </button>
          </li>
        </ul>
      </div>
    );
  }


  display () {
    return (
      this.props.children ?
      ( this.props.children ) : // ...DISPLAY THIS
      ( // ...OR THIS...
        <ul className="deck-header">
          <li className="deck-header-item">
              <span className="deck-header-title"
                    onClick={ this.studyDeck }>
                { this.props.deck.title }
              </span>
          </li>
          <li>
              { this.renderButtons() }
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
