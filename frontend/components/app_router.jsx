import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { App } from './app.jsx';
import NavBarContainer from './nav_bar/nav_bar_container';
import SessionFormContainer from './session/session_form_container';
import ModalTest from './session/modal';
import HomeContainer from './home/home_container';

export const AppRouter = () => (
  <Router history={ hashHistory } >
     <Route path="/(home)" component={ App } >
       <Route component={ NavBarContainer } >
        <IndexRoute component={ HomeContainer } />
       </Route>
    </Route>
  </Router>
);
