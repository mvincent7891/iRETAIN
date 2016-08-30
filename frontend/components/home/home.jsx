import React from 'react';

export const Home = ({loggedIn}) => {

  const homeElement = loggedIn ?
  <section>
    Logged In
  </section> :
  <section>
    Not Logged In
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
