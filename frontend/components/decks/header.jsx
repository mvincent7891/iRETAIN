import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestSingleDeck(this.props.deckId);
  }

  render () {
    return (
      <div className="deck-header">
        <ul className="deck-header">
          <li className="deck-header-item">
              Deck Header
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
