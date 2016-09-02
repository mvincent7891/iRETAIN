
export const fetchDecks = (success, error) => {
  $.ajax({
    url: `api/decks`,
    method: `GET`,
    dataType: `json`,
    success,
    error
  });
};

export const fetchDeck = (success, error, deckId) => {
  $.ajax({
    url: `api/decks/${deckId}`,
    method: `GET`,
    dataType: `json`,
    success,
    error
  });
};

export const createDeck = (success, error, deck) => {
  $.ajax({
    url: `api/decks/`,
    method: `POST`,
    dataType: `json`,
    data: deck,
    success,
    error
  });
};

export const updateDeck = (success, error, deckObject) => {
  $.ajax({
    url: `api/decks/${deckObject.deck.id}`,
    method: `PATCH`,
    dataType: `json`,
    data: deckObject,
    success,
    error
  });
};

export const removeDeck = (success, error, deckId) => {
  $.ajax({
    url: `api/decks/${deckId}`,
    method: `DELETE`,
    dataType: `json`,
    success,
    error
  });
};
