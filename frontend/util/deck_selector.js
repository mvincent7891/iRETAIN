import isEmpty from 'lodash/isEmpty';

export const selectLastDeck = decks => {
  if (isEmpty(decks)) {
    return {};
  }
  const deckArray = Object.keys(decks);
  return decks[deckArray[deckArray.length - 1]];
};

export const deckSelector = (decks) => {
  if (isEmpty(decks)) {
    return [];
  }

  const deckArray = Object.keys(decks).map(deckId => decks[deckId]);
  return deckArray;

};

export const subjectDeckSelector = (deckArray, currentSubject) => {
  if (deckArray.length === 0 || isEmpty(currentSubject)) {
    return deckArray;
  } else {
    const subjectDecks = [];
    deckArray.forEach(deck => {

      if (deck.subject_id === currentSubject.id ) {
        subjectDecks.push(deck);
      }
    });
    return subjectDecks;
  }
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
