import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import { hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {open: false, type: 'Login'};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.goHome = this.goHome.bind(this);
    this.searchCards = this.searchCards.bind(this);
  }

  componentWillMount() {
    var appElement = document.getElementById('page-wrapper');
    Modal.setAppElement(appElement);
  }

  searchCards () {
    hashHistory.push('/search');
  }

  goHome () {
    hashHistory.push('/dashboard');
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.closeModal();
    }
  }

  openModal (type = "") { this.setState({open: true, type}); }

  closeModal (type = "") { this.setState({open: false, type}); }

  render () {

    const sessionNav = this.props.loggedIn ?
      <ul className="nav">
        <li className="greeting">Signed in as {this.props.user}</li>
        <li className="material-icons"
          onClick={ this.searchCards }>
          search
        </li>
        <li className="material-icons"
          onClick={ this.goHome }>
          home
        </li>
        <li className="material-icons settings"
          onClick={ this.props.logout }>
          settings
        </li>
      </ul> :
      <ul className="nav">
        <li className="link" onClick={this.openModal.bind(this, "Login")}>Login</li>
        <li className="link" onClick={this.openModal.bind(this, "Sign Up")}>Sign Up</li>
        <li className="link">Guest</li>
      </ul>;

    return (
      <div>
        <header className="nav-header">
          <ul className="nav">
            <li className="link logo-image" onClick={ this.goHome }>
            </li>
            <li className="link logo-name"
                onClick={ this.goHome } >
              <strong className="logo">iRETAIN</strong>.IO
            </li>
            <li className="link">How It Works</li>
            <li className="link" onClick={ this.searchCards }>Flashcards</li>
            <li className="link">Educators</li>
            <li className="link">more...</li>
          </ul>
          { sessionNav }
        </header>
        <Modal
          overlayClassName="OverlayClass"
          className="LoginModalClass"
          onRequestClose={this.closeModal}
          isOpen={this.state.open}>
          <SessionFormContainer type={this.state.type}/>
        </Modal>
        { this.props.children }
      </div>
    );
  }

}

export default NavBar;
