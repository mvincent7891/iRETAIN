import React from 'react';
import { hashHistory } from 'react-router';

const interval = 150;

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.initiateGuestLogin = this.initiateGuestLogin.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.enterGuestUsername = this.enterGuestUsername.bind(this);
    this.enterGuestPassword = this.enterGuestPassword.bind(this);
  }

  componentDidMount () {
    this.props.deleteErrors();
    if (this.props.type === "Guest Login") {
      this.guestLogin();
    }
  }

  guestLogin () {
    setTimeout(() => {
      this.initiateGuestLogin();
    }, 500);
  }


  initiateGuestLogin () {
    const uname = (i) => this.enterGuestUsername(i);
    const pword = (i) => this.enterGuestPassword(i);
    for (var i = 0; i < 5; i++) {
      uname(i);
    }
    setTimeout(() => {
      for (var j = 0; j < 8; j++) {
        pword(j);
      }
    }, interval * 5);
    setTimeout(() => {
      const user = this.state;
      this.props.processForm({user});
    }, interval * 16);
  }

  enterGuestUsername (i) {
    const username = "guest".slice(0,(i+1));
    setTimeout(() => {
      this.setState({username});
    }, i*interval);
  }

  enterGuestPassword (i) {
    const password = "password".slice(0,(i+1));
    setTimeout(() => {
      this.setState({password});
    }, i*(interval - 10));
  }

  update(field){
		return event => { this.setState({[field]: event.currentTarget.value }); };
	}

  handleSubmit(event){
    event.preventDefault();
    const user = this.state;
    debugger
    if (this.props.loggedIn) {
      this.props.logout();
    } else {
      this.props.processForm({user});
    }
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
