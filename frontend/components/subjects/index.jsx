import React from 'react';
import SubjectIndexItem from './index_item';
import { hashHistory } from 'react-router';

export class SubjectIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = { selectedTab: null };
  }

  componentWillReceiveProps (newProps) {

  }

  newDeck () {
    hashHistory.push('/new-subject');
  }

  selectTab (subjectId) {
    this.setState({ selectedTab: subjectId });
    hashHistory.push(`subjects/${subjectId}`);
  }

  componentDidMount () {
    this.props.requestSubjects();
  }

  renderSubjects () {
    if (this.props.subjects.length === 0) {
      return "";
    } else {
      return this.props.subjects.map((subject, idx) => {
        const id = subject.id;
        return (<SubjectIndexItem
          key={`${id}-${idx}`}
          subject={subject}
          selected={ id === this.state.selectedTab ? true : false }
          selectThis={ this.selectTab.bind(this, id) }
          />);
        });
    }
  }

  render () {
    return (
      <div className="content-container">
        <div className="subject-index-container">
          <div>
            <div className="subject-index-header">
              <h3 className="subjects">Subjects</h3>
            </div>
            <div className="divider"></div>
            <ul className="subject-index">
              { this.renderSubjects() }
              <li className="last-subject-item"></li>
            </ul>
          </div>
          { this.props.children }
        </div>
      </div>
    );
  }
}