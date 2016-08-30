export const signup = (success, error, user) => {
  $.ajax({
    url: 'api/user',
    method: 'POST',
    dataType: 'json',
    data: user,
    success,
    error
  });
};
export const login = (success, error, user) => {
  $.ajax({
    url: 'api/session',
    method: 'POST',
    dataType: 'json',
    data: user,
    success,
    error
  });
};
export const logout = (success, error) => {
  $.ajax({
    url: 'api/session',
    method: 'DELETE',
    success,
    error
  });
};
