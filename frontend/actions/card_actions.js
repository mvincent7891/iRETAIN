export const CardConstants = {
  RECEIVE_CARDS: "RECEIVE_CARDS",
  REQUEST_CARDS: "REQUEST_CARDS",
  RECEIVE_SINGLE_CARD: "RECEIVE_SINGLE_CARD",
  CREATE_CARD: "CREATE_CARD",
  REMOVE_SINGLE_CARD: "REMOVE_SINGLE_CARD",
  UPDATE_CARD: "UPDATE_CARD",
  LOOKUP_CARD: "LOOKUP_CARD",
  RECEIVE_LOOKUP: "RECEIVE_LOOKUP"
};

export const receiveLookup = card => ({
  type: CardConstants.RECEIVE_LOOKUP,
  card
});

export const lookupCard = card => ({
  type: CardConstants.LOOKUP_CARD,
  card
});

export const updateCard = card => ({
  type: CardConstants.UPDATE_CARD,
  card
});

export const removeSingleCard = card => ({
  type: CardConstants.REMOVE_SINGLE_CARD,
  card
});

export const receiveSingleCard = card => ({
  type: CardConstants.RECEIVE_SINGLE_CARD,
  card
});

export const createCard = card => ({
  type: CardConstants.CREATE_CARD,
  card
});


export const requestCards = (deckId) => ({
  type: CardConstants.REQUEST_CARDS,
  deckId
});

export const receiveCards = cards => ({
  type: CardConstants.RECEIVE_CARDS,
  cards
});
