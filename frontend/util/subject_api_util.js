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
