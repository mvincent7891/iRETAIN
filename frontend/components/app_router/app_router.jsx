import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from '../app.jsx';
import DecksIndexContainer from '../decks/index_container';
import DeckFormContainer from '../decks/form_container';

const SplashPage = () => ( <li>Splash</li>);

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);

    this.routes = (
      <Router history={ hashHistory } >
        <Route path="/" component={ App } >
          <IndexRoute component = { SplashPage } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/dashboard(/:deck_id)" component={ DecksIndexContainer } onEnter={ this._ensureLoggedIn } >
            <Route path="/new-deck" component={ DeckFormContainer } onEnter={ this._ensureLoggedIn } />
            <Route path="/edit-deck/:deckId" component={ DeckFormContainer } onEnter={ this._ensureLoggedIn } />
          </Route>
        </Route>
      </Router>
    );
  }

  _redirectIfLoggedIn (nextState, replace) {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      replace('/dashboard');
    }
  }

  _ensureLoggedIn (nextState, replace) {
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/');
    }
  }

  componentWillReceiveProps(newProps) {

  }

  render () {
    return(
      <div className="router">
        {this.routes}
      </div>
    );
  }
}

  export default AppRouter;
