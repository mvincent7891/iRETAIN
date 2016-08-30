import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './app.jsx';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import ModalTest from './session/modal';

export const AppRouter = () => (
  <Router history={ hashHistory } >
     <Route path="/" component={ App } >
       <IndexRoute component={ NavBarContainer } >

      </IndexRoute>
    </Route>
  </Router>
);
