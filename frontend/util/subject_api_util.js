export const fetchSubjects = success => {
  $.ajax({
    url: 'api/subjects',
    method: 'GET',
    success
  });
};

export const fetchAllSubjects = success => {
  $.ajax({
    url: 'api/subjects',
    method: 'GET',
    dataType: 'json',
    data: { allSubjects: true },
    success
  });
};

export const createSubject = (success, title) => {
  $.ajax({
    url: 'api/subjects',
    method: 'POST',
    dataType: 'json',
    data: { title },
    success
  });
};
