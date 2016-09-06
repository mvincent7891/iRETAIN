import React from 'react';
import DeckHeaderContainer from './header_container';
import CardsIndexContainer from '../cards/index_container';
import { hashHistory } from 'react-router';

export class DeckView extends React.Component {

  constructor (props) {
    super(props);

  }

  componentWillReceiveProps (newProps) {

  }

  componentDidMount () {

  }

  renderCards () {
    const children = this.props.location.pathname.includes('new') ?
              ("") : (this.props.children);

    if ( this.state.selectedTab ) {
      return (
        <div>
          <DeckHeaderContainer deckId={ this.state.selectedTab }
                               children={ children } />
          <CardsIndexContainer deckId={ this.state.selectedTab } />
        </div>
      );
    } else {
      return <DashboardContainer />;
    }
  }

  render () {
    return (
      <div className="deck-view-container">
        Deck View Container
      </div>
    );
  }
}
