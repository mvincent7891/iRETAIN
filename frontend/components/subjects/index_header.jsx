import React from 'react';

export class SubjectIndexHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllSubjects();
  }

  render () {
    return (
      <div className="subject-index-header">
        <h3 className="subjects">Subjects</h3>
        <h4>React Component</h4>
      </div>
    );
  }
}
