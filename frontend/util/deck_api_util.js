
export const fetchDecks = (success, error) => {
  $.ajax({
    url: `api/decks`,
    method: `GET`,
    dataType: `json`,
    success,
    error
  });
};
// 
// export const createDeck = (success, error, deck) => {
//   $.ajax({
//     url: ,
//     method: ,
//     dataType: ,
//     data: ,
//     success,
//     error
//   });
// };
//
// export const updateDeck = (success, error, deck) => {
//   $.ajax({
//     url: ,
//     method: ,
//     dataType: ,
//     data: ,
//     success,
//     error
//   });
// };
//
//
// export const removeSingleDeck = (success, error, deck) => {
//   $.ajax({
//     url: ,
//     method: ,
//     dataType: ,
//     data: ,
//     success,
//     error
//   });
// };