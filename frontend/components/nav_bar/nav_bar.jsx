import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import AccountMenuContainer from '../session/account_menu_container';
import { hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {open: false, type: 'Login', openAccount: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.closeAccountModal = this.closeAccountModal.bind(this);
    this.goHome = this.goHome.bind(this);
    this.searchCards = this.searchCards.bind(this);
    this.studyCards = this.studyCards.bind(this);
  }

  componentWillMount() {
    var appElement = document.getElementById('page-wrapper');
    Modal.setAppElement(appElement);
  }

  searchCards () {
    if (!this.props.loggedIn) {
      this.openModal("Login");
    } else {
      hashHistory.push('/search');
    }
  }

  studyCards () {
    if (!this.props.loggedIn) {
      this.openModal("Login");
    } else {
      hashHistory.push('/study');
    }
  }

  goHome () {
    if (!this.props.loggedIn) {
      this.openModal("Login");
    } else {
      hashHistory.push('/subjects');
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.closeModal();
    }
  }

  openAccountModal (type = "") { this.setState({openAccount: true}); }

  closeAccountModal (type = "") { this.setState({openAccount: false}); }

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
          onMouseOver={this.openAccountModal.bind(this)}>
          settings
        </li>
      </ul> :
      <ul className="nav">
        <li className="link" onClick={this.openModal.bind(this, "Login")}>Login</li>
        <li className="link" onClick={this.openModal.bind(this, "Sign Up")}>Sign Up</li>
        <li className="link" onClick={this.openModal.bind(this, "Guest Login")}>Guest</li>
      </ul>;

    return (
      <div>
        <header className="nav-header">
          <ul className="nav">
            <li className="link logo-image" onClick={ this.goHome }>
            </li>
            <li className="link logo-name"
                onClick={ this.goHome } >
              <strong className="logo">iRETAIN</strong><span id="logo-io">.IO</span>
            </li>
            <li className="link">How It Works</li>
            <li className="link" onClick={ this.searchCards }>Flashcards</li>
            <li className="link" onClick={ this.studyCards }>Study</li>
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
        <Modal
          overlayClassName="AccountOverlayClass"
          className="AccountModalClass"
          onRequestClose={this.closeAccountModal}
          isOpen={this.state.openAccount}>
          <AccountMenuContainer closeModal={ this.closeAccountModal }/>
        </Modal>
        { this.props.children }
      </div>
    );
  }

}

export default NavBar;
