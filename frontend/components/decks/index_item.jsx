import React from 'react';

class DeckIndexItem extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <li className="deck-index-item"
          id={ this.props.selected ? "selected" : ""}
          onClick={ this.props.selectThis }>
        { this.props.deck.title }
      </li>
    );
  }


}

export default DeckIndexItem;
