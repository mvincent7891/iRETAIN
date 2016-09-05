import isEmpty from 'lodash/isEmpty';

export const subjectSelector = (subjects) => {
  if (isEmpty(subjects)) {
    return [];
  }

  const subjectArray = Object.keys(subjects).map(subjectId => subjects[subjectId]);
  return subjectArray;

};
