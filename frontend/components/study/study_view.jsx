import React from 'react';
import {Question} from './question.jsx';
import { hashHistory } from 'react-router';
import isEmpty from 'lodash/isEmpty';

export class StudyView extends React.Component {
  constructor (props) {
    super(props);
    this.state = { cardIndex: 0, finished: false,
                   correctResponses: 0, incorrectResponses: 0,
                  };
    this.renderQuestion = this.renderQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.endSession = this.endSession.bind(this);
    this.renderDeckTitle = this.renderDeckTitle.bind(this);
  }

  nextQuestion (correctResponseBoolean) {
    if (correctResponseBoolean) {
      this.setState({ correctResponses: this.state.correctResponses + 1 });
    } else {
      this.setState({ incorrectResponses: this.state.incorrectResponses + 1 });
    }
    if (this.state.cardIndex === this.props.cards.length - 1) {
      this.setState({ finished: true });
    } else {
      this.setState({ cardIndex: this.state.cardIndex + 1 });
    }
  }

  componentDidMount () {
    this.setState({
      cardIndex: 0, finished: false,
      correctResponses: 0, incorrectResponses: 0
    });
  }

    // componentWillReceiveProps (newProps) {
    //   console.log(newProps);
    // }

  endSession () {
    hashHistory.push('/subjects');
  }

  renderQuestion () {
    if (this.props.ready) {
      return (
        <Question card={ this.props.cards[this.state.cardIndex ]}
                  nextQuestion={ this.nextQuestion } />
      );
    } else {
      return "";
    }
  }

  renderDeckTitle () {
    if (this.props.cards && this.props.decks &&
        !isEmpty(this.props.cards) &&
        !isEmpty(this.props.decks)) {
      return (
        <div>
          {this.props.decks[this.props.cards[this.state.cardIndex].deck_id].title}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  render () {
    return (
      <div className="study-view-container">
        <section className="study-section left">
          <span className="study-deck-title">
            { this.renderDeckTitle() }
          </span>
          <ul className="exit-study">
            <li className="material-icons"
                 id="exit-icon"
                 onClick={ this.endSession }>
              exit to app
            </li>
          </ul>
          <div className="study-options">
            <button className="end-study"
                    onClick={ this.endSession } >
              End Session
            </button>
            <ul className="progress">
              <li><span>Correct:</span>
                <span className="progress-correct">{this.state.correctResponses}</span>
              </li>
              <li><span>Wrong:</span>
                <span className="progress-incorrect">{this.state.incorrectResponses}</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="study-section right">
          { this.renderQuestion() }
        </section>
      </div>
    );
  }
}
