import React from 'react';

class CardForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      body: this.props.body,
      id: this.props.id || null,
      deck_id: this.props.deckId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLookup = this.handleLookup.bind(this);
    this.update = this.update.bind(this);
  }
  componentDidMount () {
    this.props.setCardSavedFalse();
  }

  update(field){
		return event => { event.preventDefault();
                      this.setState({[field]: event.currentTarget.value }); };
	}

  handleSubmit(event){
    event.preventDefault();
    const card = this.state;
    this.props.processCard({ card });
    this.props.deleteLookup();
  }

  handleLookup(event){
    event.preventDefault();
    const card = this.state;
    this.props.lookupCard({ card });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.cardSaved) {
      newProps.cancelForm();
    }
    if (newProps.lookup &&
        newProps.lookup.length > 0) {
      const lookup = newProps.lookup.join("\n\n");
      this.setState({body: lookup});
    }
  }

  renderErrors(){
    let errors;
    if (this.props.type === 'edit') {
      errors = this.props.errors.update;
    } else {
      errors = this.props.errors.create;
    }
    return(
      <ul>
        { errors && errors.responseJSON && errors.responseJSON.map( (error, i) => (
          <li key={`error-${i}`} className="errors">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderCancel(){
    if (this.props.type === 'edit' ) {
      return (
        <button className="cancel-form"
          onClick={ this.props.cancelForm }>
          Cancel</button>
      );
    } else {
      return;
    }
  }

  render() {

    return (
      <div className="add-card-container">

        <form className="add-card">

          { this.renderErrors() }

          <span>
            <label>
              <input type="text"
                className="card-form-field"
                placeholder="Title"
                value={this.state.title}
                onChange={this.update("title")}
                />
            </label>
            <button className="lookup-card"
                    onClick={ this.handleLookup }>
                    Lookup</button>
          </span>

          <span>
            <label>
              <textarea type="text"
                className="card-form-field-2"
                placeholder="Body"
                onChange={this.update("body")}
                value={ this.state.body }>
              </textarea>

            </label>
            <ul>
              <button className="add-card"
                      onClick={ this.handleSubmit }>
                      Save</button>
                    { this.renderCancel() }
            </ul>

          </span>

        </form>

      </div>
    );
  }
}

export default CardForm;
