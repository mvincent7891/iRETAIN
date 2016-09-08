import React from 'react';

export class Question extends React.Component {
  constructor (props) {
    super(props);
    this.state = { question: props.card.body,
                   answer: this.replaceAnswer(props.card.title),
                   indices: this.shuffle(Object.keys(props.card.title)),
                   current: 0,
                   solving: false,
                   userAnswer: "",
                   feedback: "" };
    this.timer = undefined;

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.addLetter = this.addLetter.bind(this);
    this.solve = this.solve.bind(this);
    this.continueAddingLetters = this.continueAddingLetters.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.card.id !== this.props.card.id) {
      this.setState({
        question: newProps.card.body,
        answer: this.replaceAnswer(newProps.card.title),
        indices: this.shuffle(Object.keys(newProps.card.title)),
        current: 0,
        solving: false,
        userAnswer: "",
        feedback: ""
      });
      setTimeout(() => this.startTimer(), 500);
    }
  }

  componentDidMount () {
    if (!this.timer) {
      this.startTimer();
    }
  }

  componentWillUnmount () {
    this.stopTimer();
  }

  handleInput (event) {
    event.preventDefault();
    const userAnswer = event.currentTarget.value;
    this.setState({ userAnswer });
  }

  submitAnswer (event) {
    event.preventDefault();
    const userAnswer = this.state.userAnswer.toLowerCase();
    const correctAnswer = this.props.card.title.toLowerCase();
    if ( userAnswer === correctAnswer ) {
      this.setState({ feedback: "That's right!"});
      setTimeout(() => this.props.nextQuestion(true), 1500);
    } else {
      this.setState({ feedback: "Sorry, that's incorrect."});
      setTimeout(() => this.setState({ answer: correctAnswer }), 1500);
      setTimeout(() => this.props.nextQuestion(false), 3500);
    }
  }

  solve () {
    if (this.state.current >= this.state.indices.length - 1) {
      return;
    } else {
      this.stopTimer();
      this.setState({ solving: true });
    }
  }

  continueAddingLetters () {
    this.startTimer();
    this.setState({ solving: false });
  }

  shuffle (array) {
    var i = 0
      , j = 0
      , temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  replaceAnswer (title) {
    return title.replace(/[a-zA-Z]/g,"_");
  }

  startTimer () {
    var difficultyAdjuster = 2000 * this.props.difficulty;
    var interval = Math.floor((10000 - difficultyAdjuster) / this.state.indices.length );
    this.timer = setInterval(() => this.addLetter(), interval);
  }

  stopTimer () {
    clearInterval(this.timer);
    this.timer = undefined;
  }

  addLetter () {
    const letterIndex = parseInt(this.state.indices[this.state.current]);
    const letter = this.props.card.title[letterIndex];
    let firstHalf = this.state.answer.slice(0,letterIndex);
    let secondHalf = this.state.answer.slice(letterIndex + 1);
    let answer = `${firstHalf}${letter}${secondHalf}`;
    if (this.state.current >= this.state.indices.length - 1) {
      this.stopTimer();
      this.setState({ feedback: "Time's up!"});
      setTimeout(() => this.props.nextQuestion(false), 1500);
    }
    this.setState({ current: this.state.current + 1, answer });
  }

  renderDisplay () {
    if (this.state.solving) {
      return (
        <div className="question-display">
          <form onSubmit={ this.submitAnswer }>
            <input className="answer"
                   placeholder="Enter answer..."
                   value={ this.state.userAnswer }
                   onChange={ this.handleInput } />
          </form>
        <button className="continue-button"
          onClick={ this.continueAddingLetters }>
          More hints...
        </button>
        </div>
      );
    } else {
      return (
        <div className="question-display">
          <button className="solve-button"
            onClick={ this.solve }>
            Solve
          </button>
        </div>
      );
    }
  }

  render () {
    return (
      <div className="question-container">
        <span className="question-body">{ this.state.question }</span><br/><br/>
        <span className="question-answer">{ this.state.answer }</span><br/><br/>
        { this.renderDisplay() }<br/><br/>
        <span className="feedback">
          { this.state.feedback }
        </span>
      </div>
    );
  }
}
