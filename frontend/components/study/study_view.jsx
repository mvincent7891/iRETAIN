import React from 'react';
import {Question} from './question.jsx';

export class StudyView extends React.Component {
  constructor (props) {
    super(props);
    this.state = { cardIndex: 0, finished: false };
    this.renderQuestion = this.renderQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion (correctResponseBoolean) {
    console.log(correctResponseBoolean);
    if (this.state.cardIndex === this.props.cards.length - 1) {
      this.setState({ finished: true });
    } else {
      this.setState({ cardIndex: this.state.cardIndex + 1 });
    }
  }

  renderQuestion () {

    if (this.props.cards.length > 0){
      return (
        <Question card={ this.props.cards[this.state.cardIndex ]}
                  nextQuestion={ this.nextQuestion } />
      );
    } else {
      return "";
    }
  }

  render () {
    return (
      <div className="study-view-container">
        Study View Container
        { this.renderQuestion() }
      </div>
    );
  }
}
