import React from 'react';
class DeckResultItem extends React.Component {

  constructor (props) {
    super(props);
    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOptions () {
    if (!this.props.user) {
      return;
    }
    if (this.props.user.id !== this.props.deck.author_id) {
      return (<button className="add-card">Add</button>);
    } else {
      return (<button className="add-new-deck">View</button>);
    }
  }

  render () {
    return (
      <div className="search-result-item">
        { this.props.deck.title }
        { this.renderOptions() }
      </div>
    );
  }

}

export default DeckResultItem;
