import React from 'react';
import { deckSelector, subjectDeckSelector } from '../../util/deck_selector';

class SubjectIndexItem extends React.Component {

  constructor (props) {
    super(props);
    var decks = subjectDeckSelector(
                deckSelector(this.props.decks), this.props.subject);
    this.state = { decks };
  }

  componentWillReceiveProps(newProps) {
    var decks = subjectDeckSelector(
                deckSelector(newProps.decks), newProps.subject);
    this.setState({ decks });
  }

  render () {
    var count = this.state.decks.length;
    return (
      <li className="subject-index-item"
          id={ this.props.selected ? "selected-subject" : ""}
          onClick={ this.props.selectThis }>
        <div className="subject-title-index">{ this.props.subject.title }</div>
        <div className="subject-detail-index">
          { count } deck{ count === 1 ? "" : "s" }</div>
      </li>
    );
  }


}

export default SubjectIndexItem;
