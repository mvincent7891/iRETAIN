import isEmpty from 'lodash/isEmpty';

export const cardSelector = (cards) => {
  if (isEmpty(cards)) {
    return [];
  }

  const cardArray = Object.keys(cards).map(cardId => cards[cardId]);
  return cardArray;

};

export const lookupSelector = card => {
  const definitions = [];
  card.results.forEach( (result) => {
    result.senses.forEach( (sense) => {
      if (sense.definition) {
        if (sense.definition instanceof Array) {
          sense.definition.forEach( (subdef) => {
            definitions.push(subdef);
          });
        } else {
          definitions.push(sense.definition);
        }
      }
    });
  });
  return definitions;
};
