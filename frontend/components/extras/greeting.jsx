import React from 'react';

export class Greeting extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div id="splash-greeting-container">

          <h1 id="splash-header">iRETAIN:</h1>
          <h3 id="splash-sub-header">[i-ri-<b>teyn</b>] <i>application</i></h3>
        <hr/>
        <p id="splash-p"><div>(1)</div> <div>study and create topical flash card decks</div></p>
        <p id="splash-p"><div>(2)</div><div>transform everyday browsing into an education experience with the iRETAIN Chrome Extension</div></p>
      </div>
    );
  }
}
