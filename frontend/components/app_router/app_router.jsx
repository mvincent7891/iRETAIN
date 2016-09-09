import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from '../app.jsx';
import DecksIndexContainer from '../decks/index_container';
import SubjectIndexContainer from '../subjects/index_container';
import DeckFormContainer from '../decks/form_container';
import DeckHeaderContainer from '../decks/header_container';
import DeckViewContainer from '../decks/view_container';
import DashboardContainer from '../dashboard/dashboard_container';
import SearchContainer from '../search/container';
import SubjectContainer from '../subjects/container';
import StudyViewContainer from '../study/study_view_container';
import SubjectDashboardContainer from '../subjects/subject_dashboard_container';
import {Greeting} from '../extras/greeting';
import ChromeExtension from '../extras/chrome_extension';
import isEmpty from 'lodash/isEmpty';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);
    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this._ensureStoreFull = this._ensureStoreFull.bind(this);

    this.routes = (
      <Router history={ hashHistory } >
        <Route path="/" component={ App } >
          <IndexRoute component = { Greeting }
                      onEnter={this._redirectIfLoggedIn}/>

          <Route path="/study(/:deckId)" component={ StudyViewContainer } onEnter={ this._ensureLoggedIn } />
          <Route path="/subjects" component={ SubjectIndexContainer } onEnter={ this._ensureLoggedIn } >
            <IndexRoute component={ SubjectDashboardContainer } />
            <Route path="/subjects/:subjectId"
                   component={ SubjectContainer } >
              <Route path="/subjects/:subjectId/new" component={ DeckFormContainer } />
              <Route path="/subjects/:subjectId/decks(/new)" component={ DecksIndexContainer } >
                <Route path="/subjects/:subjectId/decks/dashboard" component={ DashboardContainer } />
                <Route path="/subjects/:subjectId/decks/:deckId" component={ DeckViewContainer } >
                  <IndexRoute component={ DeckHeaderContainer } />
                  <Route path="/subjects/:subjectId/decks/:deckId/edit" component={ DeckFormContainer } />
                </Route>
              </Route>
            </Route>
            <Route path="/chrome_extension" component={ ChromeExtension } />
            <Route path ="/search(/:query_parms)" component={ SearchContainer } />
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
