import React from 'react';
import DeckIndexItem from './index_item';
import DeckHeaderContainer from './header_container';
import CardsIndexContainer from '../cards/index_container';
import DashboardContainer from '../dashboard/dashboard_container';
import { hashHistory } from 'react-router';

export class DeckIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = { selectedTab: null, firstDeck: 0, lastDeck: 3 };
    this.selectDashboard = this.selectDashboard.bind(this);
    this.moreDecks = this.moreDecks.bind(this);
    this.moreDecks = this.moreDecks.bind(this);
    this.lessDecks = this.lessDecks.bind(this);
    this.newDeck = this.newDeck.bind(this);
  }

  selectDashboard () {
    this.setState({ selectedTab: null });
  }

  newDeck () {
    hashHistory.push('/new-deck');
  }

  selectTab (deckId) {
    this.setState({ selectedTab: deckId });
  }

  componentDidMount () {
    this.props.fetchDecks();
  }

  moreDecks () {
    const indexLength = this.props.decks.length;
    let lastDeck = this.state.lastDeck + 3;
    let firstDeck = this.state.firstDeck + 3;
    if (lastDeck > indexLength) {
      lastDeck = indexLength;
      firstDeck = indexLength - 3;
    }
    this.setState({ lastDeck, firstDeck });
  }

  lessDecks () {
    let firstDeck = this.state.firstDeck - 3;
    let lastDeck = this.state.lastDeck - 3;
    if (firstDeck <= 0) {
      firstDeck = 0;
      lastDeck = 3;
    }
    this.setState({ firstDeck, lastDeck });
  }

  renderLeft() {
    if ( this.state.firstDeck <= 0 ) {
      return;
    } else {
      return (<li className="deck-index-item request"
                  onClick={ this.lessDecks }>
                { " ◀ "}
              </li>);
    }
  }

  renderRight() {
    if ( this.state.lastDeck >= this.props.decks.length ) {
      return;
    } else {
      return (<li className="deck-index-item request"
                  onClick={ this.moreDecks }>
                { " ▶ "}
              </li>);
    }
  }

  renderDecks () {
    const start = this.state.firstDeck;
    const finish = this.state.lastDeck;

    return this.props.decks.slice(start, finish).map((deck, idx) => {
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
        { this.props.children }
        <h3 className="decks">Decks</h3>
        <ul className="deck-index">
          <li className="deck-index-item"
              onClick={ this.selectDashboard }
              id={ this.state.selectedTab ? "" : "selected" }>
              Dashboard
          </li>
          { this.renderLeft() }
          { this.renderDecks() }
          { this.renderRight() }
          <li className="deck-index-item plus"
            onClick={ this.newDeck } >
            <strong>{ " + "}</strong>
          </li>
        </ul>
        { this.renderCards() }
      </div>
    );
  }
}
