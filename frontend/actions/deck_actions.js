export const DeckConstants = {
  RECEIVE_DECKS: "RECEIVE_DECKS",
  REQUEST_DECKS: "REQUEST_DECKS",
  RECEIVE_SINGLE_DECK: "RECEIVE_SINGLE_DECK",
  REQUEST_SINGLE_DECK: "REQUEST_SINGLE_DECK",
  CREATE_DECK: "CREATE_DECK",
  REMOVE_DECK: "REMOVE_DECK",
  UPDATE_DECK: "UPDATE_DECK",
  REMOVED_DECK: "REMOVED_DECK"
};

export const removedDeck = decks => ({
  type: DeckConstants.REMOVED_DECK,
  decks
});

export const updateDeck = deck => ({
  type: DeckConstants.UPDATE_DECK,
  deck
});

export const removeDeck = deckId => ({
  type: DeckConstants.REMOVE_DECK,
  deckId
});

export const receiveSingleDeck = deck => ({
  type: DeckConstants.RECEIVE_SINGLE_DECK,
  deck
});

export const requestSingleDeck = deckId => ({
  type: DeckConstants.REQUEST_SINGLE_DECK,
  deckId
});

export const createDeck = deck => ({
  type: DeckConstants.CREATE_DECK,
  deck
});


export const requestDecks = () => ({
  type: DeckConstants.REQUEST_DECKS
});

export const receiveDecks = decks => ({
  type: DeckConstants.RECEIVE_DECKS,
  decks
});
