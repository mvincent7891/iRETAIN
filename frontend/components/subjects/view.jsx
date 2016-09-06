import React from 'react';

class SubjectView extends React.Component {

  constructor (props) {
    super(props);
    const subjectId = parseInt(this.props.params.subjectId);
    const subject = this.props.subjects[subjectId];
    this.state = { subject };
    this.renderSubject = this.renderSubject.bind(this);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(newProps) {
    const subjectId = parseInt(newProps.params.subjectId);
    const subject = newProps.subjects[subjectId];
    this.setState({ subject });
  }

  renderSubject () {
    const subject = this.state.subject;
    return (
      <div>
        <h2 className="subject-title">
          { subject ? subject.title : "" }
        </h2>
      </div>
    );
  }

  render () {
    return (
      <div className="subject-view-container">
        { this.renderSubject() }
        { this.props.children }
      </div>
    );
  }


}

export default SubjectView;
