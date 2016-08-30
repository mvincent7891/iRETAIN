import React from 'react';
import CardIndexItem from './index_item';

export class CardsIndex extends React.Component {

  componentDidMount () {
    this.props.fetchCards();
  }

  render () {
    const cardList = this.props.cards.map((card, idx) => (
      <CardIndexItem key={`${card.title}-${idx}`} card={card} />
    ));

    return (
      <div>

        <ul className="card-index">
          <li className="card-index-item add-card-index-item">
            <span>Cards</span>
            <button className="add-card">
              <strong>+</strong>Add Card
            </button>
          </li>
          { cardList }
        </ul>
      </div>
    );
  }
}
