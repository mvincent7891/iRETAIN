import React from 'react';
import CardIndexItem from './index_item';
import CardForm from './form';

export class CardsIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = { add: false,
                   editing: false,
                   deckId: this.props.deckId };
    this.toggleAdd = this.toggleAdd.bind(this);
  }

  componentDidMount () {
    this.props.fetchCards(this.props.deckId);
  }

  componentWillReceiveProps (newProps) {
    const errors = newProps.errors.create;
    if (errors && errors.responseJSON) {
      this.setState({ add: true });
    }

    if (newProps.deckId !== this.props.deckId) {
      this.props.fetchCards(newProps.deckId);
    }
  }

  toggleAdd () {
    this.props.deleteErrors();
    this.setState({ add: !this.state.add });
  }

  render () {
    const cardList = [];
    this.props.cards.forEach((card, idx) => {
      // HACKED Solution for lookup -> fix after lookup redux cycle finished
      if (card && card.id) {
        cardList.push(
          <CardIndexItem key={`${card.title}-${idx}`} card={card}
            removeCard={ this.props.removeCard }
            errors={ this.props.errors }
            deleteErrors={ this.props.deleteErrors }
            lookupCard={ this.props.lookupCard }
            lookup={ this.props.lookup }
            cardSaved={ this.props.cardSaved }
            deleteLookup={ this.props.deleteLookup }
            deckId={ this.props.deckId }
            processCard={ this.props.updateCard} />
        );
      }
    });

    const addCard = <li className="card-index-item card-form">
                      <CardForm body={""} title={""}
                                processCard={ this.props.createCard }
                                cancelForm={ this.toggleAdd }
                                errors={ this.props.errors}
                                lookupCard={ this.props.lookupCard }
                                lookup={ this.props.lookup }
                                cardSaved={ this.props.cardSaved }
                                deckId={ this.props.deckId }
                                deleteLookup={ this.props.deleteLookup }
                                type={ "create" } />
                    </li>;

    return (
      <div>

        <ul className="card-index">
          <li className="card-index-item add-card-index-item">
            <span>Cards</span>
            <button className={ this.state.add ? "cancel-add" : "add-card" } onClick={ this.toggleAdd }>
              <strong>{ this.state.add ? "" : "+" }</strong> { this.state.add ? "Cancel" : "Add" }
            </button>
          </li>
          { this.state.add ? addCard : ''}
          { cardList }
        </ul>
      </div>
    );
  }
}
