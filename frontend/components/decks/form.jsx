import React from 'react';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {

  }

  componentWillReceiveProps (newProps) {

  }

  render () {
    return (
      <div className="deck-index-container">
        <h3 className="decks">New Deck</h3>
        <ul className="deck-index">
          <li className="deck-form-item">
              Item 1
          </li>
          <li className="deck-form-item">
            Item 2
          </li>
        </ul>
      </div>
    );
  }
}

export default DeckForm;
