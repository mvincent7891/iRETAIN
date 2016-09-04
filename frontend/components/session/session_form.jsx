import React from 'react';
import { hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.deleteErrors();
  }

  update(field){
		return event => { this.setState({[field]: event.currentTarget.value }); };
	}

  handleSubmit(event){
    event.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.responseJSON && this.props.errors.responseJSON.map( (error, i) => (
          <li key={`error-${i}`} className="errors">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="relative-container">

        <form onSubmit={this.handleSubmit} className="login">

          <h2 className="login-item">{this.props.type}</h2>
          { this.renderErrors() }

          <label>
            <input type="text"
              className="login-item"
              placeholder="Username"
              value={this.state.username}
              onChange={this.update("username")}
              />
          </label>

          <label>
            <input type="password"
              className="login-item"
              placeholder="Password"
              value={this.state.password}
              onChange={this.update("password")}
              />
          </label>
          <label>
            <button id="login-button"
              onClick={ this.handleSubmit }>{ this.props.type }</button>

          </label>
          <input type="submit"
            value={this.props.type}
            />
        </form>



      </div>
    );
  }

}

export default SessionForm;
