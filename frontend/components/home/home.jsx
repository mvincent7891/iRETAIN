import React from 'react';
import DecksIndexContainer from '../decks/index_container';

export const Home = ({loggedIn, children}) => {

  const homeElement = loggedIn ?
    <section>
      {children}
    </section> :
    <section>
    </section>;


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
