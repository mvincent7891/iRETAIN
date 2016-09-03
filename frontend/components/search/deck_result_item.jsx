import React from 'react';
import { hashHistory } from 'react-router';

class DeckResultItem extends React.Component {

  constructor (props) {
    super(props);
    this.renderOptions = this.renderOptions.bind(this);
    this.viewOwnDeck = this.viewOwnDeck.bind(this);
    this.cloneDeck = this.cloneDeck.bind(this);
  }

  cloneDeck () {
    this.props.cloneDeck(this.props.deck);
  }

  viewOwnDeck () {
    this.props.viewOwnDeck(this.props.deck);
    hashHistory.push('/dashboard');
  }

  renderOptions () {
    if (!this.props.user) {
      return;
    }
    if (this.props.user.id !== this.props.deck.author_id) {
      return (<button className="add-card"
                      onClick={ this.cloneDeck }>
                Add
              </button>);
    } else {
      return (<button className="add-new-deck"
                      onClick={ this.viewOwnDeck }>
                View
              </button>);
    }
  }

  render () {
    return (
      <div className="search-result-item">
        { this.props.deck.title }
        { this.renderOptions() }
      </div>
    );
  }

}

export default DeckResultItem;
