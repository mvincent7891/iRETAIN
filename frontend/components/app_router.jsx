import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './app.jsx';
import NavBar from './nav_bar/nav_bar';
import SessionFormContainer from './session/session_form_container';

export const AppRouter = () => (
  <Router history={ hashHistory }>
     <Route path="/" component={ NavBar } >
       <Route path="home" component={ App } />
       <Route path="login" component={ SessionFormContainer } />
       <Route path="signup" component={ SessionFormContainer } />
      </Route>
  </Router>
);
