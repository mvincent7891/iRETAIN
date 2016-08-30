import React from 'react';
import CardsIndexContainer from '../cards/index_container';

export const Home = ({loggedIn}) => {

  const homeElement = loggedIn ?
  <section>
    <CardsIndexContainer />
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
