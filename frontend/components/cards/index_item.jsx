import React from 'react';
import CardForm from './form';

class CardIndexItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = { selected: false, editing: false };
    this.toggleSelect = this.toggleSelect.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleSelect (event) {
    if (event) {
      event.preventDefault();
    }
    if ( !this.state.editing ) {
      this.setState({ selected: !this.state.selected });
    }
  }

  toggleEdit (event) {
    if (event) {
      event.preventDefault();
    }
    if (this.state.editing) {
      this.props.deleteErrors();
    }
    this.setState({ editing: !this.state.editing });
  }

  render () {
    const item = this.state.selected ?
      <li onClick={ this.toggleSelect } className="card-index-item-selected" >

        <ul className="card-index-item">
          <li className="card-title">{ this.props.card.title }</li>
          <li className="card-body">{ this.props.card.body }</li>
        </ul>

        <ul className="card-options">
          <li className="card-option-edit">
            <button className="edit-card"
                    onClick={ this.toggleEdit }
                    >Edit</button>
          </li>
          <li className="card-option-delete">
            <button className="remove-card"
                    onClick={ this.props.removeCard.bind(null, this.props.card) }>
              Remove
            </button>
          </li>
        </ul>

      </li> :
      <li onClick={ this.toggleSelect } className="card-index-item" >
        { this.state.editing ?
        <CardForm body={ this.props.card.body }
          title={ this.props.card.title }
          id={ this.props.card.id }
          processCard={ this.props.processCard }
          cancelForm={ this.toggleEdit }
          errors={ this.props.errors }
          lookupCard={ this.props.lookupCard }
          lookup={ this.props.lookup }
          cardSaved={ this.props.cardSaved }
          type={ "edit" } /> :
          this.props.card.title }
      </li>;

    return (
      <div>
        { item }
      </div>
    );
  }

}

export default CardIndexItem;
