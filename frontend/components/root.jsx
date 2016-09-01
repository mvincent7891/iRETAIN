
import React from 'react';
import { Provider } from 'react-redux';
import AppRouterContainer from './app_router/app_router_container.jsx';

export const Root = ({store}) => (
  <Provider store={store}>
    <AppRouterContainer/>
  </Provider>
);
