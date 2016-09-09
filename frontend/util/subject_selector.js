import isEmpty from 'lodash/isEmpty';

export const subjectSelector = (subjects) => {
  if (isEmpty(subjects)) {
    return [];
  }

  const subjectArray = Object.keys(subjects).map(subjectId => subjects[subjectId]);
  return subjectArray;

};

export const selectSubjectFromArray = (subjectsArray, subject_id) => {
  let chooseSubject = {};
  subjectsArray.forEach(subject => {
    if (subject.id === subject_id) {
      chooseSubject = subject;
    }
  });
  return chooseSubject;
};

export const subjectPresent = (decks, location) => {
  const path = location.hash;
  const start = path.indexOf('subjects') + 9;
  const end = path.indexOf('/decks') ;
  const subjectId = parseInt(path.slice(start, end));
  let flag = true;
  Object.keys(decks).forEach(deckId => {
    if (decks[deckId].subject_id === subjectId) {
      flag = false;
    }
  });
  return flag;
};
