
import React from 'react';
import { Provider } from 'react-redux';
import { AppRouter } from './app_router.jsx';

export const Root = ({store}) => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
