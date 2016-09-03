
export const fetchTags = (success) => {

  $.ajax({
    url: `api/tags`,
    method: `GET`,
    dataType: `json`,
    success
  });
};
