import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from '../app.jsx';
import DecksIndexContainer from '../decks/index_container';
import SubjectIndexContainer from '../subjects/index_container';
import DeckFormContainer from '../decks/form_container';
import DeckViewContainer from '../decks/view_container';
import SearchContainer from '../search/container';
import SubjectContainer from '../subjects/container';
import isEmpty from 'lodash/isEmpty';

const SplashPage = () => ( <li></li>);

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._ensureStoreFull = this._ensureStoreFull.bind(this);

    this.routes = (
      <Router history={ hashHistory } >
        <Route path="/" component={ App } >
          <IndexRoute component = { SplashPage } onEnter={this._redirectIfLoggedIn}/>
          <Route path="/dashboard(/:deck_id)" component={ DecksIndexContainer } onEnter={ this._ensureLoggedIn } >
            <Route path="/new-deck" component={ DeckFormContainer } onEnter={ this._ensureLoggedIn } />
            <Route path="/edit-deck/:deckId" component={ DeckFormContainer } onEnter={ this._ensureLoggedIn } />
          </Route>
          <Route path ="/search(/:query_parms)" component={ SearchContainer } />

          <Route path="/subjects" component={ SubjectIndexContainer } onEnter={ this._ensureLoggedIn } >
            <Route path="/subjects/:subjectId"
                   component={ SubjectContainer } >
              <Route path="/subjects/:subjectId/decks" component={ DecksIndexContainer } >
                <Route path="/subjects/:subjectId/decks/:deckId" component={ DeckViewContainer } />
              </Route>
            </Route>
          </Route>

        </Route>
      </Router>
    );
  }

  _redirectIfLoggedIn (nextState, replace) {
    const currentUser = this.props.currentUser;
    if (currentUser) {
      replace('/subjects');
    }
  }

  _ensureLoggedIn (nextState, replace) {
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      replace('/');
    } else {
      this._ensureStoreFull();
    }
  }

  _ensureStoreFull() {
    if (isEmpty(this.props.cards)) {
      this.props.requestCards();
    }
    if (isEmpty(this.props.decks)) {
      this.props.requestDecks();
    }
    if (isEmpty(this.props.cards)) {
      this.props.requestSubjects();
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
