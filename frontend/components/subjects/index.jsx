import React from 'react';
import SubjectIndexItem from './index_item';
import SubjectIndexHeaderContainer from './index_header_container';
import { selectSubjectFromArray } from '../../util/subject_selector';
import { hashHistory } from 'react-router';
import Footer from '../extras/footer';

export class SubjectIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = { selectedTab: null };
  }

  componentWillReceiveProps (newProps) {
    if (!newProps.params.subjectId) {
      this.props.clearActiveSubject();
      this.setState({ selectedTab: null });
    } else if (newProps.subjects.length > 0) {
      const currentSubject = selectSubjectFromArray(newProps.subjects, parseInt(newProps.params.subjectId));
      this.props.chooseSubject(currentSubject);
    }
    const activeDeck = newProps.activeDeck;
    if (activeDeck && activeDeck.id && !this.state.selectedTab) {
      if (newProps.subjects.length > 0) {
        const subject = selectSubjectFromArray(newProps.subjects, activeDeck.subject_id);
        this.props.chooseSubject(subject);
      }
    }
    const currentSubject = newProps.currentSubject;
    if (currentSubject && currentSubject.id) {
      this.setState({ selectedTab: newProps.currentSubject.id });
    }
    if (activeDeck && !newProps.params.deckId) {
      this.props.clearActiveDeck();
    }
  }

  newDeck () {
    hashHistory.push('/new-subject');
  }

  selectTab (subject) {
    this.setState({ selectedTab: subject.id });
    this.props.chooseSubject(subject);
    this.props.clearActiveDeck();
    hashHistory.push(`subjects/${subject.id}/decks/dashboard`);
  }

  componentDidMount () {
    if (!this.props.params.subjectId) {
      this.props.clearActiveSubject();
      this.setState({ selectedTab: null });
    } else {
      const id = parseInt(this.props.params.subjectId);
      this.setState({ selectedTab: id });
      const subject = selectSubjectFromArray(this.props.subjects, id);
      this.props.chooseSubject(subject);
    }
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
          user={ this.props.user }
          decks={ this.props.decks }
          selected={ id === this.state.selectedTab ? true : false }
          selectThis={ this.selectTab.bind(this, subject) }
          />);
        });
    }
  }

  render () {
    return (
      <div className="content-aligner">
        <div className="content-container">
          <div className="subject-index-container">
            <div>
              <SubjectIndexHeaderContainer />
              <div className="divider"></div>
              <ul className="subject-index">
                { this.renderSubjects() }
                <li className="last-subject-item"></li>
              </ul>
            </div>
            { this.props.children }
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
