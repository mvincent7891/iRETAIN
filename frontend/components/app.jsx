import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import Footer from './extras/footer';

export const App = ({children}) => {
  return (
  <div>
    <NavBarContainer />
    <div>
      { children }
    </div>
    
  </div>
);
};
