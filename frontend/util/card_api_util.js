
export const fetchCards = (success, error, deck = 0) => {
  let id;

  if (deck && deck.id) {
    id = deck.id;
  } else {
    id = deck;
  }
  $.ajax({
    url: `api/decks/${id}/cards`,
    method: 'GET',
    dataType: 'json',
    success,
    error
  });
};

export const createCard = (success, error, card, deckId) => {

  $.ajax({
    url: `api/decks/${deckId}/cards`,
    method: 'POST',
    dataType: 'json',
    data: card,
    success,
    error
  });
};

export const updateCard = (success, error, card) => {
  $.ajax({
    url: `api/decks/${card.deck_id}/cards/${card.id}`,
    method: 'PATCH',
    dataType: 'json',
    data: card,
    success,
    error
  });
};

export const removeSingleCard = (success, error, card) => {
  $.ajax({
    url: `api/decks/${card.deckId}/cards/${card.id}`,
    method: 'DELETE',
    dataType: 'json',
    data: {card},
    success,
    error
  });
};

export const lookupCard = (success, error, cardObject) => {

  $.ajax({
    url: `http://api.pearson.com/v2/dictionaries/entries?headword=${cardObject.card.title}`,
    method: 'GET',
    dataType: 'json',
    success,
    error
  });
};
