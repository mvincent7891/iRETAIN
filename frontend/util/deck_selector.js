import isEmpty from 'lodash/isEmpty';

export const deckSelector = (decks) => {
  if (isEmpty(decks)) {
    return [];
  }

  const deckArray = Object.keys(decks).map(deckId => decks[deckId]);
  return deckArray;

};
