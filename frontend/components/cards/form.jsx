import React from 'react';

class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      body: this.props.body
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
		return event => { this.setState({[field]: event.currentTarget.value }); };
	}

  handleSubmit(event){
    event.preventDefault();
    const card = this.state;
    this.props.createCard({ card });
  }

  componentWillReceiveProps(newProps) {
    if (!newProps.errors.responseJSON) {
      newProps.closeAdd();
    }
  }

  renderErrors(){
    return(
      <ul>
        { this.props.errors.responseJSON && this.props.errors.responseJSON.map( (error, i) => (
          <li key={`error-${i}`} className="errors">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="add-card-container">

        <form onSubmit={this.handleSubmit} className="add-card">

          { this.renderErrors() }

          <label>
            <input type="text"
              className="card-form-field"
              placeholder="Title"
              value={this.state.title}
              onChange={this.update("title")}
              />
          </label>
          <span>
            <label>
              <input type="text"
                className="card-form-field-2"
                placeholder="Body"
                value={this.state.body}
                onChange={this.update("body")}
                />
            </label>

            <button className="add-card">Save</button>
          </span>

        </form>

      </div>
    );
  }
}

export default CardForm;
