
import React from 'react';
import { hashHistory } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const hints = [
  'Click on the magnifying glass in the nav bar to search for decks',
  'While editing, add descriptive tags to your decks to make them show up in searches',
  'Click \'more...\' in the navigation bar to read about the iRetain Chrome extension',
  'To add a subject, use the search bar to the left of the page',
  'While viewing a deck, clicking the title will launch a study session on it',
  'Download the iRetain Chrome extension to create flash cards from anywhere',
  'While adding a card, clicking \'lookup\' will autofill the body'
];

class HintSidebar extends React.Component {

  constructor() {
    super();
    this.state = { index: 0, hint: hints[0] };
    this.updateIndex = this.updateIndex.bind(this);
    this.goExtras = this.goExtras.bind(this);
  }

  componentDidMount () {
    this.timer = setInterval(() => this.updateIndex(), 5000);
  }

  componentWillUnmount () {
    clearInterval(this.timer);
  }

  goExtras () {
    window.location = 'https://chrome.google.com/webstore/detail/iretain/gbeamkiokdfmamlmmkhddfdpbmbgmkic?utm_source=gmail';
  }

  updateIndex() {
    this.setState({ hint: hints[(this.state.index + 1) % hints.length],
                    index: this.state.index + 1 });
  }

  render () {
    return (
      <div className="hint-sidebar-container">

        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}>
          <span className="hints"
                key={ this.state.hint } >
              { this.state.hint }
          </span>
        </ReactCSSTransitionGroup>

        <ul className="sidebar-chrome" onClick={ this.goExtras }>
          <li id="ext-icon" className="material-icons">
            get_app
          </li>
          <li id="ext-text">
            Download Extension
          </li>
        </ul>
      </div>
    );
  }
}

export default HintSidebar;
