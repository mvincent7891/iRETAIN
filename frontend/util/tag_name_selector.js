import isEmpty from 'lodash/isEmpty';

export const tagNameSelector = (tags) => {
  if (isEmpty(tags)) {
    return [];
  }
  const tagArray = Object.keys(tags).map(id => tags[id].text);
  
  return tagArray;

};
