export const CardConstants = {
  RECEIVE_CARDS: "RECEIVE_CARDS",
  REQUEST_CARDS: "REQUEST_BENCHES"
};

export const requestCards = () => ({
  type: CardConstants.REQUEST_CARDS,
});

export const receiveCards = cards => ({
  type: CardConstants.RECEIVE_CARDS,
  cards
});
