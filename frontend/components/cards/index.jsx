import React from 'react';
import CardIndexItem from './index_item';
import CardForm from './form';

export class CardsIndex extends React.Component {

  constructor () {
    super();
    this.state = { add: false, editing: false };
    this.toggleAdd = this.toggleAdd.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
  }

  componentDidMount () {
    this.props.fetchCards();
  }

  componentWillReceiveProps (newProps) {
    if (newProps.errors.responseJSON && !this.state.editing) {
      this.setState({ add: true });
    }
  }

  toggleEditing () {
    this.setState({ editing: !this.state.editing });
  }

  toggleAdd () {
    this.setState({ add: !this.state.add });
  }

  render () {
    const cardList = this.props.cards.map((card, idx) => (
      <CardIndexItem key={`${card.title}-${idx}`} card={card}
                     removeCard={ this.props.removeCard }
                     errors={ this.props.errors }
                     processCard={ this.props.updateCard}
                     disableAdd={ this.toggleEditing }
                     enableAdd={ this.toggleEditing } />
    ));

    const addCard = <li className="card-index-item card-form">
                      <CardForm body={""} title={""}
                                processCard={ this.props.createCard }
                                cancelForm={ this.toggleAdd }
                                errors={ this.props.errors}
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
