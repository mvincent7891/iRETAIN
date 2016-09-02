import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';

export const App = ({children}) => {
  return (
  <div className="pageWrapper">
    <NavBarContainer />
    <div className="content-container">
      { children }
    </div>
  </div>
);
};
