import React from 'react';
import DeckIndexItem from './index_item';
import DeckHeaderContainer from './header_container';
import CardsIndexContainer from '../cards/index_container';
import DashboardContainer from '../dashboard/dashboard_container';
import { hashHistory } from 'react-router';
import { tabIndexSelector } from '../../util/deck_selector';

export class DeckIndex extends React.Component {

  constructor (props) {
    super(props);
    this.state = { selectedTab: null, firstDeck: 0, lastDeck: 3 };
    this.selectDashboard = this.selectDashboard.bind(this);
    this.moreDecks = this.moreDecks.bind(this);
    this.moreDecks = this.moreDecks.bind(this);
    this.lessDecks = this.lessDecks.bind(this);
    this.newDeck = this.newDeck.bind(this);
    this.setBoundaries = this.setBoundaries.bind(this);
  }

  setBoundaries(tabIndex) {
    let lastDeck = tabIndex + 2;
    let firstDeck = tabIndex - 1;
    if (firstDeck <= 0) {
      firstDeck = 0;
      lastDeck = 3;
    }
    const indexLength = this.props.decks.length;
    if (lastDeck > indexLength) {
      lastDeck = indexLength;
      firstDeck = indexLength - 3;
    }
    if (firstDeck <= 0) {
      firstDeck = 0;
      lastDeck = 3;
    }
    this.setState({ firstDeck, lastDeck });
  }

  componentWillReceiveProps (newProps) {
    // const id = newProps.showDeck.id;
    // if (newProps.decks.length > 0) {
    //   this.setState({ selectedTab: newProps.decks[0].id });
    // }
    const active = newProps.activeDeck;
    if (active && active.id) {
      this.setState({ selectedTab: active.id });
      this.setBoundaries(tabIndexSelector(active.id, this.props.decks));
    } else {
      this.setState({ selectedTab: null, firstDeck: 0, lastDeck: 3 });
    }
    // if (id) {
    //   this.setState({ selectedTab: parseInt(id) });
    //   this.setBoundaries(newProps.showDeck.tabPos);
    // }
  }

  selectDashboard () {
    this.setState({ selectedTab: null });
    this.props.clearActiveDeck();
    const path = this.props.location.pathname;
    const pathIndex = path.indexOf('decks');
    const newPath = `${path.slice(0, pathIndex)}decks`;
    hashHistory.push(newPath);
  }

  newDeck () {
    hashHistory.push('/new-deck');
  }

  selectTab (deck) {
    this.setState({ selectedTab: deck.id });
    this.props.chooseDeck(deck);
    hashHistory.push(`subjects/${deck.subject_id}/decks/${deck.id}`);
  }

  componentDidMount () {
    const active = this.props.activeDeck;
    if (active && active.id) {
      this.setState({ selectedTab: active.id });
      this.setBoundaries(tabIndexSelector(active.id, this.props.decks));
    }
  }

  moreDecks () {
    const indexLength = this.props.decks.length;
    let lastDeck = this.state.lastDeck + 3;
    let firstDeck = this.state.firstDeck + 3;
    if (lastDeck > indexLength) {
      lastDeck = indexLength;
      firstDeck = indexLength - 3;
    }
    this.setState({ lastDeck, firstDeck,
                    selectedTab: this.props.decks[firstDeck].id });
  }

  lessDecks () {
    let firstDeck = this.state.firstDeck - 3;
    let lastDeck = this.state.lastDeck - 3;
    if (firstDeck <= 0) {
      firstDeck = 0;
      lastDeck = 3;
    }
    this.setState({ firstDeck, lastDeck,
                    selectedTab: this.props.decks[lastDeck - 1].id });
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
                selectThis={ this.selectTab.bind(this, deck) }
              />);
    });
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

      <div className="deck-index-container">

        {/* this.props.location.pathname.includes('edit') ?
          "" : this.props.children */}

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
        {/* this.renderCards() */}
        { this.props.children }
      </div>
    );
  }
}
