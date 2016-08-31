var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');



class ModalTest extends React.Component {
    constructor () {
      super();
      this.state = {open: false};
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    componentWillMount() {
      var appElement = document.getElementById('page-wrapper');
      Modal.setAppElement(appElement);
    }

    openModal () { this.setState({open: true}); }

    closeModal () { this.setState({open: false}); }

    render () {
      return (
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            overlayClassName="OverlayClass"
            className="ModalClass"
            isOpen={this.state.open}
            >
              <div className="login">
                <h1>Login</h1>
                <input placeholder="Username"/>
                <input placeholder="Password" />
                <button onClick={this.closeModal}>Login</button>

              </div>
          </Modal>
        </div>
      );
    }
  }

export default ModalTest
