import React from 'react';
import CardIndexItem from './index_item';
import CardForm from './form';

export class CardsIndex extends React.Component {

  constructor () {
    super();
    this.state = { add: false };
    this.toggleAdd = this.toggleAdd.bind(this);
  }

  componentDidMount () {
    this.props.fetchCards();
  }

  toggleAdd () {
    this.setState({ add: !this.state.add });
  }

  render () {
    const cardList = this.props.cards.map((card, idx) => (
      <CardIndexItem key={`${card.title}-${idx}`} card={card} />
    ));

    const addCard = <li className="card-index-item card-form">
          <CardForm body={""} title={""} createCard={ this.props.createCard }
            closeAdd={ this.toggleAdd } />
    </li>;

    return (
      <div>

        <ul className="card-index">
          <li className="card-index-item add-card-index-item">
            <span>Cards</span>
            <button className={ this.state.add ? "cancel-add" : "add-card" } onClick={ this.toggleAdd }>
              <strong>{ this.state.add ? "-" : "+" }</strong> { this.state.add ? "Cancel" : "Add" }
            </button>
          </li>
          { this.state.add ? addCard : ''}
          { cardList }
        </ul>
      </div>
    );
  }
}
