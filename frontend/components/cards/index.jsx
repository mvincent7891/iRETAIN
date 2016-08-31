import React from 'react';
import CardIndexItem from './index_item';
import CardForm from './form';

export class CardsIndex extends React.Component {

  constructor () {
    super();
    this.state = { add: false, editing: false };
    this.toggleAdd = this.toggleAdd.bind(this);
  }

  componentDidMount () {
    this.props.fetchCards();
  }

  componentWillReceiveProps (newProps) {
    const errors = newProps.errors.create;
    if (errors && errors.responseJSON) {
      this.setState({ add: true });
    }
  }

  toggleAdd () {
    this.setState({ add: !this.state.add });
  }

  render () {
    const cardList = this.props.cards.map((card, idx) => (
      <CardIndexItem key={`${card.title}-${idx}`} card={card}
                     removeCard={ this.props.removeCard }
                     errors={ this.props.errors }
                     deleteErrors={ this.props.deleteErrors }
                     processCard={ this.props.updateCard} />
    ));

    const addCard = <li className="card-index-item card-form">
                      <CardForm body={""} title={""}
                                processCard={ this.props.createCard }
                                cancelForm={ this.toggleAdd }
                                errors={ this.props.errors}
                                lookupCard={ this.props.lookupCard }
                                lookup={ this.props.lookup }
                                type={ "create" } />
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
