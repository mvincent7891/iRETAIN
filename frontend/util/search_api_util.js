
export const searchDecks = (success, query) => {
  $.ajax({
    url: 'api/decks',
    method: 'GET',
    dataType: 'json',
    data: { query },
    success
  });
};
