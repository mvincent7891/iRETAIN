import React from 'react';
import DeckResultsContainer from './deck_results_container';

class Search extends React.Component {

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        Search Component
        <div>
          <DeckResultsContainer />
        </div>
      </div>
    );
  }

}

export default Search;
