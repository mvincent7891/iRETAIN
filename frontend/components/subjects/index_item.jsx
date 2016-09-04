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
        { this.props.subject.title }
      </li>
    );
  }


}

export default SubjectIndexItem;
