import React from 'react';
import { hashHistory } from 'react-router';

export class SubjectDashboard extends React.Component {
  constructor (props) {
    super(props);
    this.viewFirstSubject = this.viewFirstSubject.bind(this);
    this.search = this.search.bind(this);
    this.study = this.study.bind(this);
  }

  viewFirstSubject () {
    const subjectId = this.props.subjects[0].id;
    hashHistory.push(`/subjects/${subjectId}/decks/dashboard`);
  }

  search () {
    hashHistory.push(`/search`);
  }

  study () {
    hashHistory.push(`/study`);
  }

  render () {
    return (
      <div className="subject-dashboard-container">
        <h2 className="subject-dashboard-header">Home</h2>
        <div className="subject-dashboard-body-container">
          <div>
            <ul className="nav" id="home">
              <li className="material-icons" onClick={ this.viewFirstSubject }>
                visibility
              </li>
            </ul>
            <p className="subject-dashboard-body first">
              This is your dashboard. From here, you can view your decks of flashcards by clicking on a subjet to the left, then selecting a deck. Be sure to checkout the autolookup feature for new cards!
            </p>
          </div>
          <div>
            <ul className="nav" id="home">
              <li className="material-icons" onClick={ this.search }>
                search
              </li>
            </ul>
            <p className="subject-dashboard-body">
              You can also search for decks of flash cards that you or other users have created.
            </p>
          </div>
          <div>
            <ul className="nav" id="home">
              <li className="material-icons" onClick={ this.study }>
                school
              </li>
            </ul>
            <p className="subject-dashboard-body">
              Finally, you can study all of your flash cards at once, or navigate to a deck and click on the title to study it.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
