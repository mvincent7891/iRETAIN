import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SessionFormContainer from '../session/session_form_container';
import { hashHistory } from 'react-router';

export class Greeting extends React.Component {
  constructor () {
    super();
    this.state = {open: false, type: 'Guest Login'};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    var appElement = document.getElementById('page-wrapper');
    Modal.setAppElement(appElement);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.loggedIn) {
      this.closeModal();
    }
  }

  openModal () { this.setState({open: true}); }

  closeModal () { this.setState({open: false}); }

  render () {
    return (
      <div id="splash-greeting-container">

          <h1 id="splash-header">iRETAIN:</h1>
          <h3 id="splash-sub-header">[i-ri-<b>teyn</b>] <i>application</i></h3>
        <hr/>
        <p id="splash-p"><span>(1)</span> <span>study and create topical flash card decks</span></p>
        <p id="splash-p"><span>(2)</span><span>transform everyday browsing into an educational experience with the iRETAIN Chrome extension</span></p>
        <button className="demo-button"
                onClick={ this.openModal } >DEMO</button>
        <Modal
          overlayClassName="OverlayClass"
          className="LoginModalClass"
          onRequestClose={this.closeModal}
          isOpen={this.state.open}>
          <SessionFormContainer type={this.state.type}/>
        </Modal>

      </div>
    );
  }
}
