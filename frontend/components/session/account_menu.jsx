import React from 'react';
import { hashHistory } from 'react-router';

class AccountMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {

  }

  closeThisModal () {
    this.props.closeModal();
  }

  logoutAndClose () {
    this.props.closeModal();
    this.props.logout();
  }

  render() {
    return (
      <div className="account-menu"
        onMouseLeave={this.closeThisModal.bind(this)}>
        <ul className="account-menu-list">
          <li className="account-menu-item">
            Account Settings
          </li>
          <li onClick={ this.logoutAndClose.bind(this) }
              className="account-menu-item">
            Logout
          </li>
        </ul>
      </div>
    );
  }

}

export default AccountMenu;
