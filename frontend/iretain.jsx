import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { Root } from './components/root.jsx';
import { requestCards } from './actions/card_actions';

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
  window.requestCards = requestCards;
  ReactDOM.render(<Root store={store} />, root);
});
