import React from 'react';
import { hashHistory } from 'react-router';

class DeckForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title
    };
    this.cancelForm = this.cancelForm.bind(this);
  }

  cancelForm () {
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
        <div className="OverlayClass"></div>
        <div className="deck-form-container">
          <h3 className="decks">New Deck</h3>
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
                  <button className="add-card">
                    Save</button>
                  <button className="cancel-form"
                    onClick={ this.cancelForm }>
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
