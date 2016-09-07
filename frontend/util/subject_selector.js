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
