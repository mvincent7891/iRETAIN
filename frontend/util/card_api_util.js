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
