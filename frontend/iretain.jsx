import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Root } from './components/root.jsx';
import { requestDecks } from './actions/deck_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
   const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
   } else {
     store = configureStore();
   }
  const root = document.getElementById('root');
  window.Store = store;
  window.requestDecks = requestDecks;
  ReactDOM.render(<Root store={store} />, root);
});
