import React from 'react';

class CardIndexItem extends React.Component {

  constructor (props) {
    super(props);
    this.state = { selected: false };
    this.toggleSelect = this.toggleSelect.bind(this);
  }

  toggleSelect (event) {
    event.preventDefault();
    this.setState({ selected: !this.state.selected });
  }

  render () {

    const item = this.state.selected ?
      <li onClick={ this.toggleSelect } className="card-index-item-selected" >
        <ul className ="card-index-item">
          <li className = "card-title">{ this.props.card.title }</li>
          <li className = "card-body">{ this.props.card.body }</li>
        </ul>
      </li> :
      <li onClick={ this.toggleSelect } className="card-index-item" >{ this.props.card.title }</li>;

    return (
      <div>
        { item }
      </div>
    );
  }

}

export default CardIndexItem;
