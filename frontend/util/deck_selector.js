import isEmpty from 'lodash/isEmpty';

export const deckSelector = (decks) => {
  if (isEmpty(decks)) {
    return [];
  }

  const deckArray = Object.keys(decks).map(deckId => decks[deckId]);
  return deckArray;

};

export const tabIndexSelector = (deckId, decks) => {
  let tabIndex = 0;
  decks.forEach((deck, index) => {
    if (deck.id === deckId) {
      tabIndex = index;
    }
  });
  return tabIndex;
};
