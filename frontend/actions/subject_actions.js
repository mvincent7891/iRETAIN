
export const SubjectConstants = {
  REQUEST_SUBJECTS: "REQUEST_SUBJECTS",
  RECEIVE_SUBJECTS: "RECEIVE_SUBJECTS"
};

export const requestSubjects = () => ({
  type: SubjectConstants.REQUEST_SUBJECTS
});

export const receiveSubjects = subjects => ({
  type: SubjectConstants.RECEIVE_SUBJECTS,
  subjects
});
