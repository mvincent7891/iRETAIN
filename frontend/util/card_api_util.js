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
