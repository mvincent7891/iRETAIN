export const fetchCards = (success, error) => {
  $.ajax({
    url: `api/cards`,
    method: 'GET',
    dataType: 'json',
    success,
    error
  });
};
