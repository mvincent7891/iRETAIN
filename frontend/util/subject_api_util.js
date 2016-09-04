export const fetchSubjects = (success) => {
  $.ajax({
    url: 'api/subjects',
    method: 'GET',
    success
  });
};
