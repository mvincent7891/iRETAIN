import isEmpty from 'lodash/isEmpty';

export const cardSelector = (cards) => {
  if (isEmpty(cards)) {
    return [];
  }

  const cardArray = Object.keys(cards).map(cardId => cards[cardId]);
  return cardArray;
  
};
