import React from 'react';
class DeckResultItem extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="search-result-item">
        { this.props.deck.title }
      </div>
    );
  }

}

export default DeckResultItem;
