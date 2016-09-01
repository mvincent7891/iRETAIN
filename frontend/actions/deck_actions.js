export const DeckConstants = {
  RECEIVE_DECKS: "RECEIVE_DECKS",
  REQUEST_DECKS: "REQUEST_DECKS",
  RECEIVE_SINGLE_DECK: "RECEIVE_SINGLE_DECK",
  CREATE_DECK: "CREATE_DECK",
  REMOVE_SINGLE_DECK: "REMOVE_SINGLE_DECK",
  UPDATE_DECK: "UPDATE_DECK",
};

export const updateDeck = deck => ({
  type: DeckConstants.UPDATE_DECK,
  deck
});

export const removeSingleDeck = deck => ({
  type: DeckConstants.REMOVE_SINGLE_DECK,
  deck
});

export const receiveSingleDeck = deck => ({
  type: DeckConstants.RECEIVE_SINGLE_DECK,
  deck
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
