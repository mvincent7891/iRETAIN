import React from 'react';
// import DecksIndexContainer from '../decks/index_container';
import NavBarContainer from '../nav_bar/nav_bar_container';

export const Home = ({loggedIn, children}) => {
  const homeElement = loggedIn ?
    (<section>
      <NavBarContainer />
      {children}
    </section>) :
    (<section>
      <NavBarContainer />
    </section>);

  // TODO: remove breaks
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      { homeElement }
    </div>
);
};
