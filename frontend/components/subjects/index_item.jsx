import React from 'react';

class SubjectIndexItem extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <li className="subject-index-item"
          id={ this.props.selected ? "selected-subject" : ""}
          onClick={ this.props.selectThis }>
        <div className="subject-title-index">{ this.props.subject.title }</div>
        <div className="subject-detail-index">
          { this.props.subject.deckCount } deck{ this.props.subject.deckCount === 1 ? "" : "s" }</div>
      </li>
    );
  }


}

export default SubjectIndexItem;
