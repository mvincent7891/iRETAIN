
export const SubjectConstants = {
  REQUEST_SUBJECTS: "REQUEST_SUBJECTS",
  RECEIVE_SUBJECTS: "RECEIVE_SUBJECTS",
  RECEIVE_CURRENT_SUBJECT: "RECEIVE_CURRENT_SUBJECT"
};

export const requestSubjects = () => ({
  type: SubjectConstants.REQUEST_SUBJECTS
});

export const receiveSubjects = subjects => ({
  type: SubjectConstants.RECEIVE_SUBJECTS,
  subjects
});

export const receiveCurrentSubject = subject => ({
  type: SubjectConstants.RECEIVE_CURRENT_SUBJECT,
  subject
});
