import isEmpty from 'lodash/isEmpty';

export const userDeckSelector = (decks, user) => {
  const returnDecks = {};
  Object.keys(decks).forEach(deckId => {
    if (decks[deckId].author_id === user.id) {
      returnDecks[deckId] = decks[deckId];
    }
  });
  return returnDecks;
};

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

export const subjectDeckSelector = (deckArray, currentSubject, user) => {
  if (deckArray.length === 0 || isEmpty(currentSubject || !user)) {
    return deckArray;
  } else {
    const subjectDecks = [];
    deckArray.forEach(deck => {

      if (deck.subject_id === currentSubject.id &&
          deck.author_id === user.id) {
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
