export const fetchUserSubjects = (success, error) => {
  $.ajax({
    url: 'api/subjects',
    method: 'GET',
    success,
    error
  });
};
