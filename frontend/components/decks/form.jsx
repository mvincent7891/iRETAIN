import React from 'react';
import { hashHistory } from 'react-router';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
    const path = this.props.location.pathname;
    let type, title, id;
    if (path.includes('edit')) {
      type = 'Edit';
      title = this.props.decks[this.props.params.deckId].title;
      id = this.props.params.deckId;
    } else {
      type = 'New';
      title = this.props.title;
      id = null;
    }
    this.state = { title, subject_id: 1, type, id };
    this.cancelForm = this.cancelForm.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  cancelForm (event) {
    event.preventDefault();
    hashHistory.push('/dashboard');
  }

  submitForm (event) {
    event.preventDefault();
    const deck = this.state;
    if (this.state.type === 'Edit') {
      this.props.updateDeck({ deck });
    } else {
      this.props.createDeck({ deck });
    }
    hashHistory.push('/dashboard');
  }

  componentDidMount () {

  }

  componentWillReceiveProps (newProps) {

  }

  update(field){
    return event => { event.preventDefault();
                      this.setState({[field]: event.currentTarget.value }); };
  }

  render () {
    return (
      <div>
        <div className="OverlayClass InAppOverlay"></div>
        <div className="deck-form-container">
          <h3 className="decks">{ this.state.type } Deck</h3>
          <form>
            <ul className="deck-form">
              <li className="deck-form-item">
                <input type="text"
                  className="deck-form-field"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.update("title")}
                  />
              </li>

              <li className="deck-form-item">
                Syntax Highlighting: On
              </li>

              <li className="deck-form-item">
                Subject: Default
              </li>

              <li className="deck-form-item">
                <div>
                  <button className="add-card"
                          onClick={ this.submitForm } >
                    Save</button>
                    <button className="cancel-form"
                            onClick={ this.cancelForm } >
                      Cancel</button>
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default DeckForm;
