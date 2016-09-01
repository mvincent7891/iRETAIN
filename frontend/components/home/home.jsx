import React from 'react';
import DecksIndexContainer from '../decks/index_container';

export const Home = ({loggedIn}) => {

  const homeElement = loggedIn ?
  <section>
    <DecksIndexContainer />
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
