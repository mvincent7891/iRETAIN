export const SearchConstants = {
  SEARCH_DECKS: "SEARCH_DECKS",
  RECEIVE_SEARCH_RESULTS: "RECEIVE_SEARCH_RESULTS"
};

export const searchDecks = (query) => ({
  type: SearchConstants.SEARCH_DECKS,
  query
});
export const receiveSearchResults = (decks) => ({
  type: SearchConstants.RECEIVE_SEARCH_RESULTS,
  decks
});
