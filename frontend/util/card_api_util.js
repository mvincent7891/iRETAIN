export const fetchCards = (success, error) => {
  $.ajax({
    url: `api/cards`,
    method: 'GET',
    dataType: 'json',
    success,
    error
  });
};

export const createCard = (success, error, card) => {
  $.ajax({
    url: `api/cards`,
    method: 'POST',
    dataType: 'json',
    data: card,
    success,
    error
  });
};

export const updateCard = (success, error, card) => {
  $.ajax({
    url: `api/cards/${card.id}`,
    method: 'PATCH',
    dataType: 'json',
    data: card,
    success,
    error
  });
};


export const removeSingleCard = (success, error, card) => {
  $.ajax({
    url: `api/cards/${card.id}`,
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
