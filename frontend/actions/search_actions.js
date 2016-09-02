export const SearchConstants = {
  SEARCH_DECKS: "SEARCH_DECKS"
};

export const searchDecks = (query) => ({
  type: SearchConstants.SEARCH_DECKS,
  query
});
