import React from 'react';
import DeckIndexItem from './index_item';
import DeckHeaderContainer from './header_container';
import CardsIndexContainer from '../cards/index_container';
import DashboardContainer from '../dashboard/dashboard_container';

export class DeckIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = { selectedTab: null };
    this.selectDashboard = this.selectDashboard.bind(this);
  }

  selectDashboard () {
    this.setState({ selectedTab: null });
  }

  selectTab (deckId) {
    this.setState({ selectedTab: deckId });
  }

  componentDidMount () {
    this.props.fetchDecks();
  }

  renderDecks () {
    return this.props.decks.map((deck, idx) => {
      const id = deck.id;
      return (<DeckIndexItem
                key={`${id}-${idx}`}
                deck={deck}
                selected={ id === this.state.selectedTab ? true : false }
                selectThis={ this.selectTab.bind(this, id) }
              />);
    });
  }

  renderCards () {
    if ( this.state.selectedTab ) {
      return (
        <div>
          <DeckHeaderContainer deckId={ this.state.selectedTab }/>
          <CardsIndexContainer deckId={ this.state.selectedTab }/>
        </div>
      );
    } else {
      return <DashboardContainer />;
    }
  }

  render () {
    return (
      <div className="deck-index-container">
        <h3 className="decks">Decks</h3>
        <ul className="deck-index">
          <li className="deck-index-item"
              onClick={ this.selectDashboard }
              id={ this.state.selectedTab ? "" : "selected" }>
              Dashboard
          </li>
          { this.renderDecks() }
          <li className="deck-index-item plus"><strong>{ " + "}</strong></li>
        </ul>
        { this.renderCards() }
      </div>
    );
  }
}
