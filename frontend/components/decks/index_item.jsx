import React from 'react';

class DeckIndexItem extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    console.log(this.props.selected);
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
